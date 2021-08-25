import { Component, Input, OnInit } from '@angular/core';
import { AppNotification } from 'src/app/_models/Users/notifications';
import { NotificationRespondToServiceRequest } from '../../_models/notification-new-applicant';

@Component({
  selector: 'app-respond-to-service-request',
  templateUrl: './respond-to-service-request.component.html',
  styleUrls: []
})
export class RespondToServiceRequestComponent implements OnInit {
  @Input('Notification') notification: AppNotification;
  constructor() { }

  ngOnInit(): void {
  }

  get getContentDetails(): NotificationRespondToServiceRequest {
    return JSON.parse(this.notification?.content) as NotificationRespondToServiceRequest;
  }
}
