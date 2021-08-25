import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { VisitorAccountUpdate } from 'src/app/_models/Users/visitor-account';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { VisitorAccountsService } from 'src/app/_services/users/visitor-accounts.service';
import { VisitorAccountForEdit } from '../../models/visitor-account';

@Component({
  selector: 'app-modify-visitor-profile',
  templateUrl: './modify-visitor-profile.component.html',
  styleUrls: []
})
export class ModifyVisitorProfileComponent implements OnInit {
  isLoadingOptions = true;
  citiesOptions: KeyValuePairResource[] = [];
  languagesOptions: KeyValuePairResource[] = [];

  visitorAccount: VisitorAccountForEdit;
  maxDate: any;
  public GenderEnum = Gender;
  edtVisitorAccountForm: FormGroup;
  isSubmitting: boolean = false;
  citiesList: KeyValuePairResource[] = [];

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private locationsService: LocationsService,
    private router: Router,
    private visitorAccountsService: VisitorAccountsService,
  ) {
    this.maxDate = HijriCalenderService.getToday(-17);
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.visitorAccount = data['user'];
    });
    this.initEdtForm();
    this.getAllDefualtsValues();
  }

  getAllDefualtsValues() {
    zip(
      this.locationsService.getCitiesList(),
    ).subscribe(
      ([locations]) => {
        this.citiesOptions = locations;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.enableAllControls();
      }
    );
  }

  initEdtForm() {
    this.edtVisitorAccountForm = this.formBuilder.group({
      id: [this.visitorAccount.id, Validators.required],
      arFirstName: [this.visitorAccount.firstName ?? '', Validators.required],
      arLastName: [this.visitorAccount.lastName ?? '', Validators.required],
      enFullName: [this.visitorAccount.enFullName ?? '', [Validators.required]],
      gender: [this.visitorAccount.gender ?? '', Validators.required],
      cityId: [{ value: this.visitorAccount.cityId ?? '', disabled: true }, Validators.required],
      birthDay: [HijriCalenderService.dateToNgbDateOrNull(this.visitorAccount.birthDay) ?? null],
      instagram: [this.visitorAccount.socialMediaAccounts?.instagram ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      linkedin: [this.visitorAccount.socialMediaAccounts?.linkedin ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      twitter: [this.visitorAccount.socialMediaAccounts?.twitter ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      facebook: [this.visitorAccount.socialMediaAccounts?.facebook ?? null, Validators.pattern(RegularExpression.SocialMediaAccounts)]
    });
  }

  enableAllControls() {
    this.edtVisitorAccountForm.controls.cityId.enable();
  }

  get updateValidator() { return this.edtVisitorAccountForm.controls; }

  editVisitorAccount() {
    // console.log(this.edtVisitorAccountForm.value);
    // console.log("Invalid Controls:", this.findInvalidControls());
    this.edtVisitorAccountForm.valid;
    if (this.edtVisitorAccountForm.valid) {
      this.isSubmitting = true;
      this.edtVisitorAccountForm.disable();
      var updatedVisitorAccount = {} as VisitorAccountUpdate;
      Object.assign(updatedVisitorAccount, this.edtVisitorAccountForm.value);
      updatedVisitorAccount.birthDay = HijriCalenderService.tryConvertGregorianToDate(this.edtVisitorAccountForm.controls.birthDay.value);
      this.visitorAccountsService.updateVisitorAccount(this.visitorAccount.id, updatedVisitorAccount).subscribe(
        returnVisitorAccount => {
          this.alertify.success(this.appTranslation.get('Common.Messages.UpdatedSuccessfully'));
          this.router.navigate(['/profile']);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.edtVisitorAccountForm.enable(); },
        () => { });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.edtVisitorAccountForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  // console.log("Invalid Controls:", this.findInvalidControls());
  // public findInvalidControls() {
  //   const invalid = [];
  //   const controls = this.edtVisitorAccountForm.controls;
  //   for (const name in controls) {
  //     if (controls[name].invalid) {

  //       console.log(controls[name].errors);
  //       invalid.push(name);
  //     }
  //   }
  //   return invalid;
  // }

}
