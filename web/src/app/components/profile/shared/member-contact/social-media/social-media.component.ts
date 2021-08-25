import { Component, OnInit, Input } from '@angular/core';
import { SocialMediaAccountResult } from 'src/app/_models/Users/user-profile-result';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: []
})
export class SocialMediaComponent implements OnInit {
  @Input('SocialMediaUserAccounts') socialMediaAccounts: SocialMediaAccountResult;
  constructor() { }

  ngOnInit(): void {
  }

}
