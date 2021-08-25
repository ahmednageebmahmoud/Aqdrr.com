import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilities } from '../utilities.service';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { SubscriptionPackageInvoice, Invoice, PaymentInvoice } from 'src/app/_models/invoices/Invoice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseUrl = environment.ApiUrl;
  invoicesUrl = `${this.baseUrl}invoices`;

  constructor(private http: HttpClient) { }

  addNew(newInvoice: Invoice): Observable<any> {
    return this.http.post<any>(`${this.invoicesUrl}`, newInvoice);
  }

  freeSubscription( packageId: number): Observable<SubscriptionPackageInvoice> {
    return this.http.post<SubscriptionPackageInvoice>(`${this.invoicesUrl}/free/${packageId}`, null);
  }

  updateInvoice(updatedInvoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.invoicesUrl}`, updatedInvoice);
  }
  getInvoice(id: number): Observable<PaymentInvoice> {
    return this.http.get<PaymentInvoice>(`${this.invoicesUrl}/${id}`);
  }
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoicesUrl);
  }
  getPagedInvoices(query: any): Observable<PaginationResult<PaymentInvoice[]>> {
    return Utilities.getPaginationResult<PaymentInvoice>(this.http, `${this.invoicesUrl}/Pages`, query);
  }
  getInvoicesAsList(query?: any): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.invoicesUrl}/list`);
  }



}
