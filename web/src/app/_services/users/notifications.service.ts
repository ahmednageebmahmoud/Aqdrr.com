import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { AppNotification } from 'src/app/_models/Users/notifications';
import { environment } from 'src/environments/environment';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
	baseUrl = environment.ApiUrl ;
	notificationsUrl = `${this.baseUrl}notifications`;

	constructor(private http: HttpClient) { }

	addNew(newNotification: AppNotification): Observable<any> {
		return this.http.post<any>(`${this.notificationsUrl}`, newNotification);
	}
	updateNotification(updatedNotification: AppNotification): Observable<AppNotification> {
		return this.http.put<AppNotification>(`${this.notificationsUrl}`, updatedNotification);
	}
	ViewNotification(viewedNotification: AppNotification): Observable<AppNotification> {
		return this.http.put<AppNotification>(`${this.notificationsUrl}`, viewedNotification);
	}
	getNotification(id: number): Observable<AppNotification> {
		return this.http.get<AppNotification>(`${this.notificationsUrl}/${id}`);
	}
	getNotifications(): Observable<AppNotification[]> {
		return this.http.get<AppNotification[]>(this.notificationsUrl);
	}
	getPagedNotifications(query: any): Observable<PaginationResult<AppNotification[]>> {
		return Utilities.getPaginationResult<AppNotification>(this.http, `${this.notificationsUrl}/Pages`, query);
	}
	getNotificationsAsList(query?: any): Observable<KeyValuePairResource[]> {
		return this.http.get<KeyValuePairResource[]>(`${this.notificationsUrl}/list`);
	}



}