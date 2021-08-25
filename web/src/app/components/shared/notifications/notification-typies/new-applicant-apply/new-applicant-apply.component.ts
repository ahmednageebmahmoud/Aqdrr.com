import { Component, Input, OnInit } from '@angular/core';
import { AppNotification } from 'src/app/_models/Users/notifications';
import { NotificationNewApplicant } from '../../_models/notification-new-applicant';

@Component({
  selector: 'app-new-applicant-apply',
  templateUrl: './new-applicant-apply.component.html',
  styleUrls: []
})
export class NewApplicantApplyComponent implements OnInit {
  @Input('Notification') notification: AppNotification;
  constructor() { }

  ngOnInit(): void {
  }

  get getContentDetails(): NotificationNewApplicant {
    return JSON.parse(this.notification?.content) as NotificationNewApplicant;
  }

}
