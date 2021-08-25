import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { zip } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { UserTask } from 'src/app/_models/Users/user-tasks';
import { NewOrderService, OrderService } from '../_models/order-service';
import { OrderServicesService } from '../_services/order-services.service';

@Component({
  selector: 'app-order-tasker-modal',
  templateUrl: './order-tasker-modal.component.html',
  styleUrls: []
})
export class OrderTaskerModalComponent implements OnInit {
  isLoadingOptions = true;
  public taskTimeOptions: KeyValuePairResource[] = []
  public citiesOptions: KeyValuePairResource[] = []
  maxDate: NgbDate | null = null;
  minDate: NgbDate | null = null;
  @Output() orderSuccessfully: EventEmitter<OrderService> = new EventEmitter<OrderService>();
  orderServiceForm: FormGroup;
  isSubmitting: boolean = false;
  userTask: UserTask;
  cityName: string;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private orderServicesService: OrderServicesService,
    public activeModal: NgbActiveModal,
    calendar: NgbCalendar) {
    this.minDate = calendar.getToday();
    this.maxDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.initAddForm();
    this.getAllDefualtsValues();
  }

  getAllDefualtsValues(): void {
    zip(
      this.orderServicesService.getTaskTimeAsList(),
    ).subscribe(
      ([taskTimesList]) => {
        this.taskTimeOptions = <KeyValuePairResource[]>taskTimesList;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.enableAllControls();
      }
    );
  }

  enableAllControls(): void {
    this.orderServiceForm.controls.timing.enable();
  }


  initAddForm() {
    this.orderServiceForm = this.formBuilder.group({
      userTaskId: [{ value: this.userTask?.id, disabled: true }, Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      startDate: [null, Validators.required],
      timing: [{ value: null, disabled: true }, Validators.required]
    });
  }

  get orderValidator() { return this.orderServiceForm.controls; }

  addNewOrderService() {
    if (this.orderServiceForm.valid) {
      this.isSubmitting = true;
      this.orderServiceForm.disable();
      let orderService = {} as NewOrderService;
      Object.assign(orderService, this.orderServiceForm.value);
      orderService.startDate = HijriCalenderService.tryConvertGregorianToDate(this.orderServiceForm.controls.startDate.value);
      this.orderServicesService.addNew(orderService).subscribe(
        returnOrderService => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.orderSuccessfully.emit(returnOrderService);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.orderServiceForm.enable(); },
        () => { this.isSubmitting = false; this.orderServiceForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.orderServiceForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }



}