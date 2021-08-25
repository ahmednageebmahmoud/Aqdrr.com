import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { BusinessAccountsService } from 'src/app/_services/users/business-accounts.service';
import { BusinessAccount } from 'src/app/_models/Users/business-account';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { UserBusinessProfile } from '../../models/user-business-profile';

@Component({
  selector: 'app-edit-business-account',
  templateUrl: './edit-business-account.component.html',
  styleUrls: []
})
export class EditBusinessAccountComponent implements OnInit {
  userProfile: UserBusinessProfile;
  edtBusinessAccountForm: FormGroup;
  isSubmitting: boolean = false;
  businessAccount = {};
  citiesList: KeyValuePairResource[] = [];

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private locationsService: LocationsService,
    private businessAccountsService: BusinessAccountsService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.userProfile = data['user'];
      console.log(this.userProfile);
    });
    this.initEdtForm();
    this.loadCitiesList();
  }

  loadCitiesList() {
    this.locationsService.getCitiesList().subscribe(
      result => { this.citiesList = result; },
      error => { this.alertify.error(error); }
    );
  }

  initEdtForm() {
    this.edtBusinessAccountForm = this.formBuilder.group({
      id: [this.userProfile.id, Validators.required],
      arFullName: [this.userProfile.arFullName ?? this.userProfile.fullName, Validators.required],
      enFullName: [this.userProfile.enFullName, [Validators.required,Validators.pattern(RegularExpression.EnglishLettersRegExp)]],
      cityId: [this.userProfile.cityId, Validators.required],
      address: [this.userProfile.businessAccountData?.address, Validators.maxLength(300)],
      about: [this.userProfile.businessAccountData?.about, Validators.maxLength(1000)],
      vision: [this.userProfile.businessAccountData?.vision, Validators.maxLength(1000)],
      message: [this.userProfile.businessAccountData?.message, Validators.maxLength(1000)],
      instagram: [this.userProfile.socialMediaAccounts?.instagram, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      linkedin: [this.userProfile.socialMediaAccounts?.linkedin, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      twitter: [this.userProfile.socialMediaAccounts?.twitter, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      facebook: [this.userProfile.socialMediaAccounts?.facebook, Validators.pattern(RegularExpression.SocialMediaAccounts)]
    });
    if (this.businessAccount) { this.edtBusinessAccountForm.patchValue(this.businessAccount); }
  }

  get updateValidator() { return this.edtBusinessAccountForm.controls; }

  editBusinessAccount() {
    this.edtBusinessAccountForm.valid;
    if (this.edtBusinessAccountForm.valid) {
      this.isSubmitting = true;
      this.edtBusinessAccountForm.disable();
      this.businessAccountsService.updateBusinessAccount(this.userProfile.id, this.edtBusinessAccountForm.value).subscribe(
        returnBusinessAccount => {
          this.alertify.success(this.appTranslation.get('Common.Messages.UpdatedSuccessfully'));
          this.router.navigate(['/profile']);
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
          this.edtBusinessAccountForm.enable();
        },
        () => { });
    } else {
      this.alertify.success(this.appTranslation.get('Common.Data.Invalid'));
      this.edtBusinessAccountForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

}
