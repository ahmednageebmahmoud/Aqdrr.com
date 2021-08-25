import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { UserNameAndMainImage } from 'src/app/_models/Users/User';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { AuthService } from 'src/app/_services/users/auth.service';
import { StudentAccountsService } from 'src/app/_services/users/student-accounts.service';
import { Applicant, ApplicantResult } from '../_models/applicant';
import { JobOfferDetails } from '../_models/job-offer';
import { ApplicantsService } from '../_services/applicants.service';
import { JobOffersService } from '../_services/job-offers.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: []
})
export class JobDetailsComponent implements OnInit {
  @Output() registerSuccessfully: EventEmitter<Applicant> = new EventEmitter<Applicant>();
  currentJobOfferId: number = 0;
  currentUserId: number = 0;
  previousUrl: any;
  jobOffer: JobOfferDetails;
  registerApplicantForm: FormGroup;
  isSubmitting: boolean = false;
  isLoading: boolean = true;
  suggestUsersList: UserNameAndMainImage[];
  isHideSuccessAlert:boolean=false;

  constructor(private router: Router, private route: ActivatedRoute, private alertify: AlertifyService, private applicantsService: ApplicantsService,
    private appTranslation: AppTranslationService, private jobOffersService: JobOffersService, private studentAccountsService: StudentAccountsService,
    private urlService: UrlService, private formBuilder: FormBuilder, public authService: AuthService, public permissions: PermissionsService) {
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      if (previousUrl != null)
        this.previousUrl = [`${previousUrl}`];
      else
        this.previousUrl = ['/jobs']
    });
  }

  ngOnInit(): void {
    try { this.currentUserId = this.authService.getCurrentUserIdUsingToken(); } catch (error) { console.log('anonymous user'); }
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId') || +paramMap.get('offerId') == 0) {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.router.navigate([this.previousUrl]);
        return;
      }
      this.currentJobOfferId = +paramMap.get('offerId');
      this.jobOffersService.getJobOffer(this.currentJobOfferId).subscribe(
        (result: JobOfferDetails) => {
          this.initRegisterForm(result.id);
          this.getSuggestStudentsForOffer(result.id);
          this.jobOffer = result;
          this.isLoading = false;
        },
        () => {
          this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
          this.router.navigate([this.previousUrl]);
        }
      );
      // تم اضافة ال setTimeout لحل مشكلة ال Expression has changed after it was checked.
      // setTimeout(() => {
      //   this.appTitle.changeNavgationTitle(`تذكرة رقم #${this.ticket?.id}`, ``);
      //   this.appTitle.changeTabTitle(`تذكرة رقم #${this.ticket?.id}`);
      // }, 0);
    });

  }

  getSuggestStudentsForOffer(jobOfferId: number) {
    this.studentAccountsService.getRandomSuggestForOffer(jobOfferId).subscribe((suggestUsers: UserNameAndMainImage[]) => {
      this.suggestUsersList = suggestUsers;
    });
  }

  initRegisterForm(jobOfferId: number) {
    this.registerApplicantForm = this.formBuilder.group({
      jobOfferId: [jobOfferId, Validators.required],
      userId: ['', Validators.required],
      comment: ['']
    });
  }

  registerNewApplicant() {
    let userId = this.authService.getCurrentUserIdUsingToken();
    this.registerApplicantForm.controls.userId.setValue(userId);
    if (this.registerApplicantForm.valid) {
      this.isSubmitting = true;
      this.registerApplicantForm.disable();
      let applicant = {} as Applicant;
      Object.assign(applicant, this.registerApplicantForm.value);
      this.applicantsService.registerNew(applicant).subscribe(
        (result: ApplicantResult) => {
          this.alertify.success(this.appTranslation.getWithTranslationValue('Common.Data.Successfully', 'Common.CRUD.Registered'));
          this.jobOffer.isRegistedBefore = true;

setTimeout(() => {
  this.isHideSuccessAlert=true;
}, 5000);

          this.addNewApplicantToApplicantsList(result);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.registerApplicantForm.enable(); },
        () => { this.isSubmitting = false; this.registerApplicantForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.registerApplicantForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  removeAddedSuggestUserFromList(newApplicant: ApplicantResult) {
    if (newApplicant) {
      this.suggestUsersList.splice(this.suggestUsersList.findIndex(e => e.id === newApplicant.userId), 1);
      this.addNewApplicantToApplicantsList(newApplicant);
    }
  }

  addNewApplicantToApplicantsList(newApplicant: ApplicantResult) {
    if (newApplicant) {
      this.jobOffer.applicants.unshift(newApplicant);
    }
  }

  get isOfferOwnerSameCurrentUser(): boolean {
    return this.currentUserId === +(this.jobOffer?.company?.id);
  }

  get getGenderTitle(): string {
    if (<Gender>this.jobOffer?.gender === <Gender>Gender.male) {
      return this.appTranslation.get('Common.Form.Males');
    } else if (<Gender>this.jobOffer?.gender === <Gender>Gender.female) {
      return this.appTranslation.get('Common.Form.Females');
    } else if (<Gender>this.jobOffer?.gender === <Gender>Gender.none) {
      return this.appTranslation.get('Common.Form.BothGender');
    }
    else { return '' }
  }

  get getUserFriendlyName(): string {
    return `${this.jobOffer?.company?.firstName} ${this.jobOffer?.company?.lastName}`;
  }

  get currentUrl(): string {
    return window.location.href;
  }
}
