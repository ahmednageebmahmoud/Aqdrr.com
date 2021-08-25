import { Component, Input, OnInit } from '@angular/core';
import { AppNotification } from 'src/app/_models/Users/notifications';
import { NotificationNewActionOnApplicant } from '../../_models/notification-new-applicant';

@Component({
  selector: 'app-invite-to-work-with-company',
  templateUrl: './invite-to-work-with-company.component.html',
  styleUrls: []
})
export class InviteToWorkWithCompanyComponent implements OnInit {
  @Input('Notification') notification: AppNotification;
  constructor() { }

  ngOnInit(): void {
  }

  get getContentDetails(): NotificationNewActionOnApplicant {
    return JSON.parse(this.notification?.content) as NotificationNewActionOnApplicant;
  }

}
