import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { PackageCategory, SubscriptionPackage, SubscriptionPackageReturn } from 'src/app/_models/settings/subscription-package';
import { environment } from 'src/environments/environment';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPackagesService {
  baseUrl = environment.ApiUrl;
  subscriptionPackagesUrl = `${this.baseUrl}subscriptionPackages`;

  constructor(private http: HttpClient) { }

  updateSubscriptionPackage(updatedSubscriptionPackage: SubscriptionPackage): Observable<SubscriptionPackage> {
    return this.http.put<SubscriptionPackage>(`${this.subscriptionPackagesUrl}`, updatedSubscriptionPackage);
  }

  changeSubscriptionPackageStatus(subscriptionPackageId: number, newStatus: boolean): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<boolean>(`${this.subscriptionPackagesUrl}/${subscriptionPackageId}`, newStatus, { headers: headers });
  }

  getSubscriptionPackage(id: number): Observable<SubscriptionPackageReturn> {
    return this.http.get<SubscriptionPackageReturn>(`${this.subscriptionPackagesUrl}/${id}`);
  }

  getSubscriptionPackages(categoryId: PackageCategory): Observable<SubscriptionPackageReturn[]> {
    return this.http.get<SubscriptionPackageReturn[]>(`${this.subscriptionPackagesUrl}/category/${categoryId}`);
  }

  getPagedSubscriptionPackages(query: any): Observable<PaginationResult<SubscriptionPackage[]>> {
    return Utilities.getPaginationResult<SubscriptionPackage>(this.http, `${this.subscriptionPackagesUrl}/Pages`, query);
  }

  getSubscriptionPackagesAsList(query?: any): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.subscriptionPackagesUrl}/list`);
  }

  getSubscriptionPackageColorsAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.subscriptionPackagesUrl}/colors`);
  }


}
