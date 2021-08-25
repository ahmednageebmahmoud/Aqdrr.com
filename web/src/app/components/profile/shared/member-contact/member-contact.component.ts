import { Component, OnInit, Input } from '@angular/core';
import { SocialMediaAccountResult, UserProfileResult } from 'src/app/_models/Users/user-profile-result';

@Component({
  selector: 'app-member-contact',
  templateUrl: './member-contact.component.html',
  styleUrls: []
})
export class MemberContactComponent implements OnInit {
  @Input('UserProfileData') userProfile: UserProfileResult;


  constructor() { }

  ngOnInit(): void {

  }

}
