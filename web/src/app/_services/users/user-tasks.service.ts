import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Observable } from 'rxjs';
import { Utilities } from 'src/app/_services/utilities.service';
import { TaskServiceCard, UserTask } from 'src/app/_models/Users/user-tasks';
@Injectable({
  providedIn: 'root'
})
export class UserTasksService {
  baseUrl = environment.ApiUrl;
  userTasksUrl = `${this.baseUrl}userTasks`;

  constructor(private http: HttpClient) { }

  addNew(newUserTask: UserTask): Observable<any> {
    return this.http.post<any>(`${this.userTasksUrl}`, newUserTask);
  }

  updateUserTask(updatedUserTask: UserTask): Observable<UserTask> {
    return this.http.put<UserTask>(`${this.userTasksUrl}`, updatedUserTask);
  }

  changeUserTaskStatus(userTaskId: number, newStatus: boolean): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<boolean>(`${this.userTasksUrl}/${userTaskId}`, newStatus, { headers: headers });
  }

  getUserTask(id: number): Observable<UserTask> {
    return this.http.get<UserTask>(`${this.userTasksUrl}/${id}`);
  }

  getUserTasks(): Observable<UserTask[]> {
    return this.http.get<UserTask[]>(this.userTasksUrl);
  }

  getPagedUserTasks(query: any): Observable<PaginationResult<UserTask[]>> {
    return Utilities.getPaginationResult<UserTask>(this.http, `${this.userTasksUrl}/Pages`, query);
  }

  getPagedUserTaskCards(query: any): Observable<PaginationResult<TaskServiceCard[]>> {
    return Utilities.getPaginationResult<TaskServiceCard>(this.http, `${this.userTasksUrl}/Cards`, query);
  }

	removeUserTask(userTaskId: number): Observable<UserTask> {
		return this.http.delete<UserTask>(`${this.userTasksUrl}/${userTaskId}`);
	}

}
