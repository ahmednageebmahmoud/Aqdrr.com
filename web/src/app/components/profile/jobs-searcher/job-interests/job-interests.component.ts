import { Component, OnInit, Input } from '@angular/core';
import { UserJobCategoryResult } from 'src/app/_models/Users/job-category';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';

@Component({
  selector: 'app-job-interests',
  templateUrl: './job-interests.component.html',
  styleUrls: []
})
export class JobInterestsComponent implements OnInit {
  @Input('UserProfileData') userProfile: UserProfileResult;
  @Input('Jobs') userJobInterests: UserJobCategoryResult[];
  constructor() { }

  ngOnInit(): void {
  }

}
