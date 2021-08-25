import { Component, Input, OnInit } from '@angular/core';
import { AppNotification } from 'src/app/_models/Users/notifications';

@Component({
  selector: 'app-default-notification',
  templateUrl: './default-notification.component.html',
  styleUrls: []
})
export class DefaultNotificationComponent implements OnInit {
  @Input('Notification') notification: AppNotification;
  constructor() { }

  ngOnInit(): void {
  }

}
