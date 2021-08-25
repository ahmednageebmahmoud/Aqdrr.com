import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { Applicant, ApplicantResult, ApplicantStatus, ApplicantUpdate } from '../../_models/applicant';
import { ApplicantsService } from '../../_services/applicants.service';

@Component({
  selector: 'app-applicant-row',
  templateUrl: './applicant-row.component.html',
  styleUrls: []
})
export class ApplicantRowComponent implements OnInit {
  @Output() updatedSuccessfully: EventEmitter<Applicant> = new EventEmitter<Applicant>();
  @Input('Applicant') applicant: ApplicantResult;
  @Input('CurrentUserId') currentUserId: number = 0;
  @Input('IsThisUserIsTheOwner') isOfferOwnerSameCurrentUser: boolean = false;
  ApplicantStatusEnum = ApplicantStatus;
  isSubmitting: boolean = false;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder, public permissions: PermissionsService,
    private applicantsService: ApplicantsService) { }

  ngOnInit(): void { }

  get getUserFriendlyName(): string {
    return `${this.applicant?.user?.firstName} ${this.applicant?.user?.lastName}`;
  }

  acceptedOrRejectedApplicantByOwner(status: ApplicantStatus) {
    this.isSubmitting = true;
    let applicant = {} as ApplicantUpdate;
    applicant.id = this.applicant.id;
    applicant.status = status;
    this.applicantsService.acceptedOrRejectedApplicantByOwner(applicant).subscribe(
      (result: ApplicantResult) => {
        this.applicant = result;
        this.updatedSuccessfully.emit(result);
      },
      error => { this.alertify.error(error); this.isSubmitting = false; },
      () => { this.isSubmitting = false; });
  }

  requestedUserAcceptOrDiscardTheApplicant(status: ApplicantStatus) {
    this.isSubmitting = true;
    let applicant = {} as ApplicantUpdate;
    applicant.id = this.applicant.id;
    applicant.status = status;
    this.applicantsService.requestedUserAcceptOrDiscardTheApplicant(applicant).subscribe(
      (result: ApplicantResult) => {
        this.applicant = result;
        this.updatedSuccessfully.emit(result);
      },
      error => { this.alertify.error(error); this.isSubmitting = false; },
      () => { this.isSubmitting = false; });
  }

  get getApplicantStatusStyle(): string {
    if ((<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept) ||
      (<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.Accepted)) {
      return 'alert-success';
    } else if ((<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.Rejected)) {
      return 'alert-danger';
    } else if ((<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.RequestDiscard)) {
      return 'alert-warning';
    }
    return 'alert-secondary';
  }

  get getApplicantStatusIcon(): string {
    if ((<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept) ||
      (<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.Accepted)) {
      return 'fa-check-circle text-success';
    } else if ((<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.Rejected)) {
      return 'fa-times-circle-o text-danger';
    } else if ((<ApplicantStatus>this.applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.RequestDiscard)) {
      return 'fa-times-circle-o text-warning';
    }
    return 'fa-info-circle text-secondary';
  }

  get isApplicantUserSameCurrentUser(): boolean {
    return this.currentUserId === +(this.applicant?.userId);
  }
}
