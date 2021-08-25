import { Component, OnInit, Input } from '@angular/core';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: []
})
export class EducationDetailsComponent implements OnInit {
  @Input('UserProfileData') userProfile: UserProfileResult;
  constructor() { }

  ngOnInit(): void {
  }

}
