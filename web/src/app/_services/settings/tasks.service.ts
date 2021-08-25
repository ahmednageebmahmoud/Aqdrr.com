import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Observable } from 'rxjs';
import { Utilities } from 'src/app/_services/utilities.service';
import { Task } from 'src/app/_models/settings/task';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl = environment.ApiUrl;
  tasksUrl = `${this.baseUrl}tasks`;

  constructor(private http: HttpClient) { }

  addNew(newTask: Task): Observable<any> {
    return this.http.post<any>(`${this.tasksUrl}`, newTask);
  }

  updateTask(updatedTask: Task): Observable<Task> {
    return this.http.put<Task>(`${this.tasksUrl}`, updatedTask);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksUrl}/${id}`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTasksAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.tasksUrl}/list`);
  }

  getPagedTasks(query: any): Observable<PaginationResult<Task[]>> {
    return Utilities.getPaginationResult<Task>(this.http, `${this.tasksUrl}/Pages`, query);
  }

  changeTaskStatus(taskId: number, newStatus: boolean): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<boolean>(`${this.tasksUrl}/${taskId}`, newStatus, { headers: headers });
  }

}
