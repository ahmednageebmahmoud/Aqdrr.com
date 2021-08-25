import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TaskerAccountResult, TaskerAccountUpdate } from 'src/app/_models/Users/tasker-account';
import { Utilities } from '../utilities.service';
import { TasksPaginationResult, TaskersParams } from 'src/app/components/tasks/_models/tasks-params';
import { TaskerCard } from 'src/app/components/tasks/_models/tasker-card';

@Injectable({
  providedIn: 'root'
})
export class TaskerAccountsService {
  baseUrl = environment.ApiUrl;
  taskerAccountsUrl = `${this.baseUrl}Accounts/taskers`;

  constructor(private http: HttpClient) { }

  getTaskerAccount(id: number): Observable<TaskerAccountResult> {
    return this.http.get<TaskerAccountResult>(`${this.taskerAccountsUrl}/${id}`);
  }

  getPagedTaskerCard(query: TaskersParams): Observable<TasksPaginationResult<TaskerCard[]>> {
		return Utilities.getCustomPaginationResult<TasksPaginationResult<TaskerCard[]>, TaskerCard>(this.http, `${this.taskerAccountsUrl}`, query);
	}

  updateTaskerAccount(userId: number, updatedTaskerAccount: TaskerAccountUpdate): Observable<any> {
    return this.http.put<any>(`${this.taskerAccountsUrl}/${userId}`, updatedTaskerAccount);
  }
}