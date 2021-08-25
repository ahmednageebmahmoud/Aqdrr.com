import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JobCategoryResult } from 'src/app/_models/Users/job-category';
import { UploadStatus } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { map } from 'rxjs/operators';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { JobCategory } from 'src/app/_models/settings/job-category';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class JobCategoriesService {
  baseUrl = environment.ApiUrl;
  jobCategoriesUrl = `${this.baseUrl}jobCategories`;

  constructor(private http: HttpClient) { }

  getRandomJobCategories(random: number): Observable<JobCategoryResult[]> {
    return this.http.get<JobCategoryResult[]>(`${this.jobCategoriesUrl}/random/${random}`);
  }

  getJobCategoriesAsList(): Observable<JobCategoryResult[]> {
    return this.http.get<JobCategoryResult[]>(`${this.jobCategoriesUrl}/list`);
  }

  addNew(newJobCategory: JobCategory): Observable<any> {
    return this.http.post<any>(`${this.jobCategoriesUrl}`, newJobCategory);
  }

  addNewWithFile(data: FormData) {
    const uploadURL = `${this.jobCategoriesUrl}/files`;
    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
    return this.http.post<any>(uploadURL, data, {
      headers: headers,
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: UploadStatus.progress, message: progress };
        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
  updateJobCategory(updatedJobCategory: JobCategory): Observable<JobCategory> {
    return this.http.put<JobCategory>(`${this.jobCategoriesUrl}`, updatedJobCategory);
  }
  changeJobCategoryStatus(jobCategoryId: number, newStatus: boolean): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<boolean>(`${this.jobCategoriesUrl}/${jobCategoryId}`, newStatus, { headers: headers });
  }

  removeJobCategory(jobCategoryId: number): Observable<JobCategory> {
    return this.http.delete<JobCategory>(`${this.jobCategoriesUrl}/${jobCategoryId}`);
  }
  getJobCategory(id: number): Observable<JobCategory> {
    return this.http.get<JobCategory>(`${this.jobCategoriesUrl}/${id}`);
  }
  
  getJobCategories(): Observable<JobCategory[]> {
    return this.http.get<JobCategory[]>(this.jobCategoriesUrl);
  }

  getPagedJobCategories(query: any): Observable<PaginationResult<JobCategory[]>> {
    return Utilities.getPaginationResult<JobCategory>(this.http, `${this.jobCategoriesUrl}/Pages`, query);
  }

}
