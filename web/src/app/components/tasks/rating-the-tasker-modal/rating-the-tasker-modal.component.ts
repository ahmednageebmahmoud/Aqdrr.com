import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { OrderServiceDetails, RatingTheOrder } from '../_models/order-service';
import { OrderServicesService } from '../_services/order-services.service';

@Component({
  selector: 'app-rating-the-tasker-modal',
  templateUrl: './rating-the-tasker-modal.component.html',
  styleUrls: ['./rating-the-tasker-modal.component.css']
})
export class RatingTheTaskerModalComponent implements OnInit {
  @Output() ratingSuccessfully: EventEmitter<OrderServiceDetails> = new EventEmitter<OrderServiceDetails>();
  orderDetails: OrderServiceDetails;
  ratingForm: FormGroup;
  ratingDescriptionText: String = '';

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private orderServicesService: OrderServicesService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.initAddForm();
    this.ratingForm.controls.orderId.setValue(this.orderDetails.id);
  }

  initAddForm() {
    this.ratingForm = this.formBuilder.group({
      orderId: [null, Validators.required],
      rating: [null, Validators.required],
      comment: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(300)]]
    });
  }

  get addValidator() { return this.ratingForm.controls; }

  addNewTicketReview() {
    if (this.ratingForm.valid) {
      let ratingOrder = {} as RatingTheOrder;
      ratingOrder = Object.assign({}, this.ratingForm.value);
      this.orderServicesService.ratingOrder(ratingOrder).subscribe(
        returnTicketReview => {
          this.alertify.info(this.appTranslation.get('Rating.ThanksForRating'));
          this.ratingSuccessfully.emit(returnTicketReview);
        },
        error => { this.alertify.warning(error); },
        () => { });
    } else { this.alertify.success(this.appTranslation.get('Common.Messages.ErrorOnAction')); }
  }

  showRatingDescriptionText(value: any) {
    switch (value) {
      case 1:
        this.ratingDescriptionText = this.appTranslation.get('Rating.VeryBad');
        break;
      case 2:
        this.ratingDescriptionText = this.appTranslation.get('Rating.Bad');
        break;
      case 3:
        this.ratingDescriptionText = this.appTranslation.get('Rating.Good');
        break;
      case 4:
        this.ratingDescriptionText = this.appTranslation.get('Rating.Excellent');
        break;
      case 5:
        this.ratingDescriptionText = this.appTranslation.get('Rating.VeryExcellent');
        break;
      default:
        this.ratingDescriptionText = ``;
        break;
    }
  }

}
