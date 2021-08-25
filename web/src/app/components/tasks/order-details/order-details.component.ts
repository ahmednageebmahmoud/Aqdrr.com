import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RatingTheTaskerModalComponent } from '../rating-the-tasker-modal/rating-the-tasker-modal.component';
import { OrderServiceDetails, TaskerConfirmOrDiscardOrder, TaskerResponse } from '../_models/order-service';
import { OrderServicesService } from '../_services/order-services.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: []
})
export class OrderDetailsComponent implements OnInit {
  @Output() viewedSuccessfully: EventEmitter<OrderServiceDetails> = new EventEmitter<OrderServiceDetails>();
  orderService: OrderServiceDetails;
  confirmOrDiscardOrderForm: FormGroup;
  isLoading: boolean = true;
  previousUrl: any;
  currentOrderId: number = 0;
  isSubmitting: boolean = false;
  currentUserId: number = 0;
  TaskerResponseEnum = TaskerResponse;
  ratingModalRef: NgbModalRef | null;

  constructor(private appTranslation: AppTranslationService,
    public authService: AuthService, public permissions: PermissionsService,
    private router: Router, private route: ActivatedRoute,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private urlService: UrlService,
    private orderServicesService: OrderServicesService) {
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      if (previousUrl != null)
        this.previousUrl = [`${previousUrl}`];
      else
        this.previousUrl = ['/orders']
    });
  }

  ngOnInit(): void {
    this.initConfirmOrDiscardOrderForm();
    try { this.currentUserId = this.authService.getCurrentUserIdUsingToken(); } catch (error) { console.log('anonymous user'); }
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('orderId') || +paramMap.get('orderId') == 0) {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.router.navigate([this.previousUrl]);
        return;
      }
      this.currentOrderId = +paramMap.get('orderId');
      this.orderServicesService.getOrderService(this.currentOrderId).subscribe(
        (result: OrderServiceDetails) => {
          this.orderService = result;
          this.isLoading = false;
        },
        () => {
          this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
          this.router.navigate([this.previousUrl]);
        }
      );
    });
  }

  initConfirmOrDiscardOrderForm() {
    this.confirmOrDiscardOrderForm = this.formBuilder.group({
      id: [this.currentOrderId, [Validators.required, Validators.pattern('^[0-9]+$')]],
      taskerResponse: [this.TaskerResponseEnum.Waiting, Validators.required],
      taskerComment: ['', Validators.maxLength(300)]
    });
    if (this.orderService) { this.confirmOrDiscardOrderForm.patchValue(this.orderService); }
  }

  get updateValidator() { return this.confirmOrDiscardOrderForm.controls; }

  confirmOrDiscardOrder(taskerResponse: TaskerResponse): void {
    if (this.confirmOrDiscardOrderForm.valid) {
      this.isSubmitting = true;
      this.confirmOrDiscardOrderForm.disable();
      let taskerConfirmOrDiscardOrder = {} as TaskerConfirmOrDiscardOrder;
      Object.assign(taskerConfirmOrDiscardOrder, this.confirmOrDiscardOrderForm.value);
      taskerConfirmOrDiscardOrder.id = this.currentOrderId;
      taskerConfirmOrDiscardOrder.taskerResponse = taskerResponse;
      this.orderServicesService.confirmOrDiscardOrder(taskerConfirmOrDiscardOrder).subscribe(
        returnOrderService => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          if (returnOrderService) { this.orderService = returnOrderService; }
        },
        error => { this.alertify.error(error); },
        () => { this.isSubmitting = false; this.confirmOrDiscardOrderForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.confirmOrDiscardOrderForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }


  getOrderStatusStyle() {
    if (<TaskerResponse>this.orderService?.taskerResponse === <TaskerResponse>this.TaskerResponseEnum.Accepted) {
      return 'alert alert-success';
    } else if (<TaskerResponse>this.orderService?.taskerResponse === <TaskerResponse>this.TaskerResponseEnum.Rejected) {
      return 'alert alert-warning';
    }
    else { return 'alert alert-info text-center' }
  }

  getOrderStatusIconStyle() {
    if (<TaskerResponse>this.orderService?.taskerResponse === <TaskerResponse>this.TaskerResponseEnum.Accepted) {
      return 'fa fa-check-circle';
    } else if (<TaskerResponse>this.orderService?.taskerResponse === <TaskerResponse>this.TaskerResponseEnum.Rejected) {
      return 'fa fa-ban';
    }
    else { return 'fa fa-info-circle' }
  }

  get isCurrentUserIsTheTasker(): boolean {
    return this.orderService?.userTask?.userId === this.currentUserId;
  }

  get isCurrentUserIsTheApplicant(): boolean {
    return this.orderService?.userId === this.currentUserId;
  }

  get getTaskerUserName(): string {
    return `${this.orderService?.userTask?.user?.firstName} ${this.orderService?.userTask?.user?.lastName}`;
  }

  get getRequestUserName(): string {
    return `${this.orderService?.user?.firstName} ${this.orderService?.user?.lastName}`;
  }

  showRatingOrderModal(currentOrder: OrderServiceDetails): void {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.ratingModalRef = this.modalService.open(RatingTheTaskerModalComponent, config);
    this.ratingModalRef.componentInstance.orderDetails = currentOrder;
    this.ratingModalRef.componentInstance.ratingSuccessfully.subscribe((updatedOrder: OrderServiceDetails) => {
      this.ratingModalRef.close();
      if (updatedOrder) {
        Object.assign(currentOrder, updatedOrder);
      }
    });
  }


}
