import { Component, OnInit, Input } from '@angular/core';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';
import { Gender, AccountType } from 'src/app/_models/Users/user-for-register';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styles: [``]
})
export class PersonalDetailsComponent implements OnInit {
  @Input('UserProfileData') userProfile: UserProfileResult;
  GenderEnum: Gender;
  constructor() { }

  ngOnInit(): void {
  }


  getGenderStyle() {
    if (<Gender>this.userProfile.gender === <Gender>Gender.male) {
      return 'fa fa-lg fa-male text-sky';
    } else if (<Gender>this.userProfile.gender === <Gender>Gender.female) {
      return 'fa fa-lg fa-female text-pink';
    }
    else { return '' }
  }

  showAboutField(): boolean {
    if ((<AccountType>this.userProfile.accountType === <AccountType>AccountType.taskerAccount) ||
      (<AccountType>this.userProfile.accountType === <AccountType>AccountType.studentAccount)) {
      return true;
    }
    return false;
  }

  get getAboutValue(): string {
    if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.taskerAccount)
      return this.userProfile?.taskerAccountData?.about;
    else if (<AccountType>this.userProfile.accountType === <AccountType>AccountType.studentAccount)
      return this.userProfile?.studentAccountData?.about;
  }

}
