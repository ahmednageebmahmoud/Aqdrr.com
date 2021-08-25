import { Component, Input, OnInit } from '@angular/core';
import { AppNotification } from 'src/app/_models/Users/notifications';
import { NotificationNewActionOnApplicant } from '../../_models/notification-new-applicant';

@Component({
  selector: 'app-applicant-change-status',
  templateUrl: './applicant-change-status.component.html',
  styleUrls: []
})
export class ApplicantChangeStatusComponent implements OnInit {
  @Input('Notification') notification: AppNotification;
  constructor() { }

  ngOnInit(): void {
  }

  get getContentDetails(): NotificationNewActionOnApplicant {
    return JSON.parse(this.notification?.content) as NotificationNewActionOnApplicant;
  }

}
