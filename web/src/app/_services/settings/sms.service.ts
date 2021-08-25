import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecuteResult, MessageWithObject } from 'src/app/_models/data/actions-result';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { SMSBalance } from 'src/app/_models/settings/sms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  baseUrl = environment.ApiUrl;
  smsUrl = `${this.baseUrl}Settings/Sms`;

  constructor(private http: HttpClient) { }

  getAlfaCellSMSBalance(): Observable<SMSBalance> {
    return this.http.get<SMSBalance>(`${this.smsUrl}/AlfaCell/Balance`);
  }

  sendSMSFromYamamahAsTestMessage(phoneNumber: string): Observable<ExecuteResult> {
    return this.http.post<ExecuteResult>(`${this.smsUrl}/Yamamah/Test/${phoneNumber}`, null);
  }

  getYamamahSMSBalance(): Observable<SMSBalance> {
    return this.http.get<SMSBalance>(`${this.smsUrl}/Yamamah/Balance`);
  }

}
