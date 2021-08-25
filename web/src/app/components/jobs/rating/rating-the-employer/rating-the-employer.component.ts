import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { ApplicantReturn, RatingTheEmployerByTheWorker } from '../../_models/applicant';
import { ApplicantsService } from '../../_services/applicants.service';

@Component({
  selector: 'app-rating-the-employer',
  templateUrl: './rating-the-employer.component.html',
  styleUrls: ['./rating-the-employer.component.css']
})
export class RatingTheEmployerComponent implements OnInit {
  @Output() ratingSuccessfully: EventEmitter<ApplicantReturn> = new EventEmitter<ApplicantReturn>();
  applicantDetails: ApplicantReturn
  ratingForm: FormGroup;
  ratingDescriptionText: String = '';

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private applicantService: ApplicantsService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.initAddForm();
  }

  initAddForm() {
    this.ratingForm = this.formBuilder.group({
      applicantId: [null, Validators.required],
      rating: [null, Validators.required],
      comment: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(300)]]
    });
    this.ratingForm.controls.applicantId.setValue(this.applicantDetails.id);
  }

  get addValidator() { return this.ratingForm.controls; }

  ratingTheEmployerByTheWorker() {
    if (this.ratingForm.valid) {
      let ratingData = {} as RatingTheEmployerByTheWorker;
      ratingData = Object.assign({}, this.ratingForm.value);
      this.applicantService.ratingTheEmployerByTheWorker(ratingData).subscribe(
        returnEmployerReview => {
          this.alertify.info(this.appTranslation.get('Rating.ThanksForRating'));
          this.ratingSuccessfully.emit(returnEmployerReview);
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
