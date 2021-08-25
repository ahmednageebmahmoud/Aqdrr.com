import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { LanguagesService } from 'src/app/_services/settings/languages.service';
import { zip } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { TaskerAccountForEdit } from '../../models/tasker-account';
import { TaskerAccountUpdate } from 'src/app/_models/Users/tasker-account';
import { TaskerAccountsService } from 'src/app/_services/users/tasker-accounts.service';

@Component({
  selector: 'app-modify-tasker-profile',
  templateUrl: './modify-tasker-profile.component.html',
  styleUrls: []
})
export class ModifyTaskerProfileComponent implements OnInit {
  isLoadingOptions = true;
  citiesOptions: KeyValuePairResource[] = [];
  languagesOptions: KeyValuePairResource[] = [];
  taskerAccount: TaskerAccountForEdit;
  maxDate: any;
  public GenderEnum = Gender;
  edtTaskerAccountForm: FormGroup;
  isSubmitting: boolean = false;
  citiesList: KeyValuePairResource[] = [];

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private locationsService: LocationsService,
    private languagesService: LanguagesService,
    private router: Router,
    private taskerAccountsService: TaskerAccountsService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.taskerAccount = data['user'];
    });
    this.initEdtForm();
    this.getAllDefualtsValues();
    this.maxDate = HijriCalenderService.getToday(-17);
  }

  getAllDefualtsValues() {
    zip(
      this.locationsService.getCitiesList(),
      this.languagesService.getLanguagesAsList(),
    ).subscribe(
      ([locations, languages]) => {
        this.citiesOptions = locations;
        this.languagesOptions = languages;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.enableAllControls();
      }
    );
  }

  initEdtForm() {
    this.edtTaskerAccountForm = this.formBuilder.group({
      id: [this.taskerAccount.id, Validators.required],
      arFirstName: [this.taskerAccount.firstName ?? '', Validators.required],
      arLastName: [this.taskerAccount.lastName ?? '', Validators.required],
      enFullName: [this.taskerAccount.enFullName ?? '', [Validators.required]],
      gender: [this.taskerAccount.gender ?? '', Validators.required],
      cityId: [{ value: this.taskerAccount.cityId ?? '', disabled: true }, Validators.required],
      birthDay: [HijriCalenderService.dateToNgbDateOrNull(this.taskerAccount.birthDay) ?? null],
      about: [this.taskerAccount.taskerAccountData?.about ?? '', Validators.maxLength(500)], //
      languages: [{ value: this.taskerAccount.languages ?? [], disabled: true }],
      instagram: [this.taskerAccount.socialMediaAccounts?.instagram ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      linkedin: [this.taskerAccount.socialMediaAccounts?.linkedin ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      twitter: [this.taskerAccount.socialMediaAccounts?.twitter ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      facebook: [this.taskerAccount.socialMediaAccounts?.facebook ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)]
    });
  }

  enableAllControls() {
    this.edtTaskerAccountForm.controls.cityId.enable();
    this.edtTaskerAccountForm.controls.languages.enable();
  }

  get updateValidator() { return this.edtTaskerAccountForm.controls; }

  editTaskerAccount() {
    this.edtTaskerAccountForm.valid;
    // console.log(this.edtTaskerAccountForm.value);
    // console.log("Invalid Controls:", this.findInvalidControls());
    if (this.edtTaskerAccountForm.valid) {
      this.isSubmitting = true;
      this.edtTaskerAccountForm.disable();
      var updatedTaskerAccount = {} as TaskerAccountUpdate;
      Object.assign(updatedTaskerAccount, this.edtTaskerAccountForm.value);
      updatedTaskerAccount.birthDay = HijriCalenderService.tryConvertGregorianToDate(this.edtTaskerAccountForm.controls.birthDay.value);
      this.taskerAccountsService.updateTaskerAccount(this.taskerAccount.id, updatedTaskerAccount).subscribe(
        returnTaskerAccount => {
          this.alertify.success(this.appTranslation.get('Common.Messages.UpdatedSuccessfully'));
          this.router.navigate(['/profile']);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.edtTaskerAccountForm.enable(); },
        () => { });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.edtTaskerAccountForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  // console.log("Invalid Controls:", this.findInvalidControls());
  public findInvalidControls() {
    const invalid = [];
    const controls = this.edtTaskerAccountForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

}
