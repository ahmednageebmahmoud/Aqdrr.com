import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitorAccountUpdate } from 'src/app/_models/Users/visitor-account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorAccountsService {
  baseUrl = environment.ApiUrl;
  visitorAccountsUrl = `${this.baseUrl}Accounts/visitors`;

  constructor(private http: HttpClient) { }

  getVisitorAccount(id: number): Observable<VisitorAccountUpdate> {
    return this.http.get<any>(`${this.visitorAccountsUrl}/${id}`);
  }
  

  updateVisitorAccount(userId: number, updatedAccount: VisitorAccountUpdate): Observable<any> {
    return this.http.put<any>(`${this.visitorAccountsUrl}/${userId}`, updatedAccount);
  }
}