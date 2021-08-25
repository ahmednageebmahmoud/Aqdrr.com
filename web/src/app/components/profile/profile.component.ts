import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/_services/users/account.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AuthService } from 'src/app/_services/users/auth.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';
import { AccountType } from 'src/app/_models/Users/user-for-register';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfileResult;
  AccountTypeEnum = AccountType;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private alertify: AlertifyService,
    private authService: AuthService, private appTranslation: AppTranslationService) { 
    }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.userProfile = data['user'];
    });
  }

  isBusinessAccount() {
    if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.businessAccount) {
      return true;
    }
    return false;
  }

  isStudentAccount() {
    if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.studentAccount) {
      return true;
    }
    return false;
  }

  isTaskerAccount() {
    if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.taskerAccount) {
      return true;
    }
    return false;
  }

  isVisitorAccount() {
    if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.visitorAccount) {
      return true;
    }
    return false;
  }

  isManagerAccount() {
    if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.managementAccount) {
      return true;
    }
    return false;
  }

}
