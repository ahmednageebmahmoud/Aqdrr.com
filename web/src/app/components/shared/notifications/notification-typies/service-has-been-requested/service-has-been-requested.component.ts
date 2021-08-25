import { Component, Input, OnInit } from '@angular/core';
import { AppNotification } from 'src/app/_models/Users/notifications';
import { NotificationNewServiceRequested } from '../../_models/notification-new-applicant';

@Component({
  selector: 'app-service-has-been-requested',
  templateUrl: './service-has-been-requested.component.html',
  styleUrls: []
})
export class ServiceHasBeenRequestedComponent implements OnInit {
  @Input('Notification') notification: AppNotification;
  constructor() { }

  ngOnInit(): void {
  }

  get getContentDetails(): NotificationNewServiceRequested {
    return JSON.parse(this.notification?.content) as NotificationNewServiceRequested;
  }
}
