import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentsResult, SubscriptionPackageInvoice } from 'src/app/_models/invoices/Invoice';
import { ChargeReturn } from 'src/app/_models/payments/tab-company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  baseUrl = environment.ApiUrl + 'users/';
  constructor(private http: HttpClient) { }


  chargeTest(userId: number, stripeToken: StringConstructor): Observable<ChargeReturn> {
    return this.http.post<ChargeReturn>(`${this.baseUrl}${userId}/payments/charges/${stripeToken}/test`, {});
  }


  charge(userId: number, stripeToken: string, packageId: number): Observable<PaymentsResult> {
    return this.http.post<PaymentsResult>(`${this.baseUrl}${userId}/payments/charges/${stripeToken}/packages/${packageId}`, {});
  }

  getPaymentForUser(userId: number) {
    return this.http.get(`${this.baseUrl}${userId}/payment`);
  }

  confirmAfterRedirectFromPaymentGateway(userId: number, chargeId: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${userId}/payments/charges/${chargeId}/confirm`, null);
  }
}
