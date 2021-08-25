import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Utilities } from 'src/app/_services/utilities.service';
import { environment } from 'src/environments/environment';
import { ApplicantCreate, ApplicantUpdate, ApplicantResult, ApplicantReturn, RatingTheEmployerByTheWorker, RatingTheWorkerByTheEmployer } from '../_models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  baseUrl = environment.ApiUrl;
  applicantsUrl = `${this.baseUrl}applicants`;
  constructor(private http: HttpClient) { }

  registerNew(newApplicant: ApplicantCreate): Observable<any> {
    return this.http.post<any>(`${this.applicantsUrl}`, newApplicant);
  }
  requestUserToWorkWithTheCompany(newApplicant: ApplicantCreate): Observable<any> {
    return this.http.post<any>(`${this.applicantsUrl}/Request/User`, newApplicant);
  }
  
  acceptedOrRejectedApplicantByOwner(updatedApplicant: ApplicantUpdate): Observable<ApplicantUpdate> {
    return this.http.put<ApplicantUpdate>(`${this.applicantsUrl}`, updatedApplicant);
  }
  requestedUserAcceptOrDiscardTheApplicant(updatedApplicant: ApplicantUpdate): Observable<ApplicantUpdate> {
    return this.http.put<ApplicantUpdate>(`${this.applicantsUrl}/User`, updatedApplicant);
  }

  getApplicant(id: number): Observable<ApplicantResult> {
    return this.http.get<ApplicantResult>(`${this.applicantsUrl}/${id}`);
  }
  getApplicants(): Observable<ApplicantResult[]> {
    return this.http.get<ApplicantResult[]>(this.applicantsUrl);
  }
  getPagedApplicants(query: any): Observable<PaginationResult<ApplicantReturn[]>> {
    return Utilities.getPaginationResult<ApplicantReturn>(this.http, `${this.applicantsUrl}/Pages`, query);
  }
  getPagedUserRequests(query: any): Observable<PaginationResult<ApplicantReturn[]>> {
    return Utilities.getPaginationResult<ApplicantReturn>(this.http, `${this.applicantsUrl}/currentUser/requests`, query);
  }
  getApplicantsAsList(query?: any): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.applicantsUrl}/list`);
  }
  changeApplicantStatus(applicantId: number, newStatus: boolean): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<boolean>(`${this.applicantsUrl}/${applicantId}`, newStatus, { headers: headers });
  }
  ratingTheEmployerByTheWorker(rating: RatingTheEmployerByTheWorker): Observable<ApplicantReturn> {
    return this.http.put<ApplicantReturn>(`${this.applicantsUrl}/rating/employer`, rating);
  }
  ratingTheWorkerByTheEmployer(rating: RatingTheWorkerByTheEmployer): Observable<ApplicantReturn> {
    return this.http.put<ApplicantReturn>(`${this.applicantsUrl}/rating/worker`, rating);
  }
}
