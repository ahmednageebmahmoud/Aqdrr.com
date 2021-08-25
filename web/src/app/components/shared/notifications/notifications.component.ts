import { Component, OnInit } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { AppNotification, NotificationState, NotificationType } from 'src/app/_models/Users/notifications';
import { NotificationUsersService } from 'src/app/_services/users/notification-users.service';
import { NotificationsService } from 'src/app/_services/users/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  isLoading: boolean = true;
  notifications: AppNotification[];
  entityCaption: string;
  NotificationTypeEnum = NotificationType;
  NotificationStateEnum = NotificationState;
  readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    public notificationUsersService: NotificationUsersService,
    private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getAllNotifications();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Notifications.notificationCaption'));
  }

  makeNotificationAsRead(notification: AppNotification) {
    if (notification != null && notification.id > 0 && <NotificationState>notification.notificationUser.state === <NotificationState>NotificationState.Unread) {
      this.notificationUsersService.markNotificationAsRead(notification.id);
      notification.notificationUser.state = NotificationState.Read;
    }
  }

  getAllNotifications() {
    this.isLoading = true;
    this.notificationsService.getPagedNotifications(this.query).subscribe(
      (res: PaginationResult<AppNotification[]>) => {
        this.notifications = res.items;
        this.query = res.pagination;
      },
      error => {
        this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption));
        this.isLoading = false;
      },
      () => { this.isLoading = false; }
    );
  }

  onFilterChange() {
    this.query.pageNumber = 1;
    this.getAllNotifications();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllNotifications();
  }

  refreshData() {
    this.resetFilter();
    this.alertify.info('تم تحديث البيانات');
  }

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getAllNotifications();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllNotifications();
  }




}