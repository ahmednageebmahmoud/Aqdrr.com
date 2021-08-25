import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentAccountEdit, StudentAccountResult, StudentAccountUpdate } from 'src/app/_models/Users/student-account';
import { UserNameAndMainImage } from 'src/app/_models/Users/User';

@Injectable({
  providedIn: 'root'
})
export class StudentAccountsService {
  baseUrl = environment.ApiUrl;
  studentAccountsUrl = `${this.baseUrl}Accounts/students`;

  constructor(private http: HttpClient) { }

  getStudentAccount(id: number): Observable<StudentAccountResult> {
    return this.http.get<StudentAccountResult>(`${this.studentAccountsUrl}/${id}`);
  }

  updateStudentAccount(userId: number, updatedStudenAccount: StudentAccountUpdate): Observable<any> {
    return this.http.put<any>(`${this.studentAccountsUrl}/${userId}`, updatedStudenAccount);
  }

  getRandomSuggestForOffer(offerId: number): Observable<UserNameAndMainImage[]> {
    return this.http.get<UserNameAndMainImage[]>(`${this.studentAccountsUrl}/offer/${offerId}`);
  }


}
