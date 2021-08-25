import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { NotificationUser } from 'src/app/_models/Users/notification-users';
import { environment } from 'src/environments/environment';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationUsersService {
  baseUrl = environment.ApiUrl;
  notificationUsersUrl = `${this.baseUrl}notificationUsers`;

  constructor(private http: HttpClient) { }

  // addNew(newNotificationUser: NotificationUser): Observable<any> {
  // 	return this.http.post<any>(`${this.notificationUsersUrl}`, newNotificationUser);
  // }
  // updateNotificationUser(updatedNotificationUser: NotificationUser): Observable<NotificationUser> {
  // 	return this.http.put<NotificationUser>(`${this.notificationUsersUrl}`, updatedNotificationUser);
  // }
  // ViewNotificationUser(viewedNotificationUser: NotificationUser): Observable<NotificationUser> {
  // 	return this.http.put<NotificationUser>(`${this.notificationUsersUrl}`, viewedNotificationUser);
  // }
  // getNotificationUser(id: number): Observable<NotificationUser> {
  // 	return this.http.get<NotificationUser>(`${this.notificationUsersUrl}/${id}`);
  // }
  // getNotificationUsers(): Observable<NotificationUser[]> {
  // 	return this.http.get<NotificationUser[]>(this.notificationUsersUrl);
  // }
  // getPagedNotificationUsers(query: any): Observable<PaginationResult<NotificationUser[]>> {
  // 	return Utilities.getPaginationResult<NotificationUser>(this.http, `${this.notificationUsersUrl}/Pages`, query);
  // }
  // getNotificationUsersAsList(query?: any): Observable<KeyValuePairResource[]> {
  // 	return this.http.get<KeyValuePairResource[]>(`${this.notificationUsersUrl}/list`);
  // }

  getCountNewNotification(): Observable<number> {
    return this.http.get<number>(`${this.notificationUsersUrl}/count/new`);
  }

  markNotificationAsRead(notificationId: number) {
    return this.http.put(`${this.notificationUsersUrl}/read/${notificationId}`, {}).subscribe();
  }
  
}