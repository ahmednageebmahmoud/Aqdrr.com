import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UserNameAndMainImage } from 'src/app/_models/Users/User';
import { Applicant, ApplicantResult } from '../../_models/applicant';
import { ApplicantsService } from '../../_services/applicants.service';

@Component({
  selector: 'app-suggest-applicant-row',
  templateUrl: './suggest-applicant-row.component.html',
  styleUrls: []
})
export class SuggestApplicantRowComponent implements OnInit {
  @Output() addSuccessfully: EventEmitter<Applicant> = new EventEmitter<Applicant>();
  @Input('User') user: UserNameAndMainImage;
  @Input('JobOfferId') jobOfferId: number;
  isSubmitting: boolean = false;
  registerApplicantForm: FormGroup;

  constructor(private appTranslation: AppTranslationService, public permissions: PermissionsService,
    private alertify: AlertifyService, private formBuilder: FormBuilder,
    private applicantsService: ApplicantsService) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  get getUserFriendlyName(): string {
    return `${this.user?.firstName} ${this.user?.lastName}`;
  }


  initRegisterForm() {
    this.registerApplicantForm = this.formBuilder.group({
      jobOfferId: ['', Validators.required],
      userId: ['', Validators.required],
      comment: ['']
    });
  }

  registerNewApplicant() {
    this.registerApplicantForm.controls.jobOfferId.setValue(this.jobOfferId);
    this.registerApplicantForm.controls.userId.setValue(this.user.id);
    if (this.registerApplicantForm.valid) {
      this.isSubmitting = true;
      this.registerApplicantForm.disable();
      let applicant = {} as Applicant;
      Object.assign(applicant, this.registerApplicantForm.value);
      this.applicantsService.requestUserToWorkWithTheCompany(applicant).subscribe(
        (result: ApplicantResult) => {
          this.alertify.success(this.appTranslation.getWithTranslationValue('Common.Data.Successfully', 'Common.CRUD.Registered'));
          this.addSuccessfully.emit(result);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.registerApplicantForm.enable(); },
        () => { this.isSubmitting = false; this.registerApplicantForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.registerApplicantForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

}
