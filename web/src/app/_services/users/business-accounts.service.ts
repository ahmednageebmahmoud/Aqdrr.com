import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BusinessAccount, BusinessAccountResult } from 'src/app/_models/Users/business-account';

@Injectable({
	providedIn: 'root'
})
export class BusinessAccountsService {
	baseUrl = environment.ApiUrl;
	businessAccountsUrl = `${this.baseUrl}Accounts/business`;

	constructor(private http: HttpClient) { }

	// getUserBusinessAccount(userId: number): Observable<UserBusinessAccount> {
	// 	return this.http.get<UserBusinessAccount>(`${this.businessAccountsUrl}/${userId}`);
	// }


	sentTextDate(data: any) {
		return this.http.post(`${this.baseUrl}StudentAccounts`, data);
	}

	getBusinessAccount(userId: number): Observable<BusinessAccount> {
		return this.http.get<BusinessAccount>(`${this.businessAccountsUrl}/${userId}`);
	}

	updateBusinessAccount(userId: number, updatedBusinessAccount: BusinessAccountResult): Observable<BusinessAccount> {
		console.log(userId);
		return this.http.put<BusinessAccount>(`${this.businessAccountsUrl}/${userId}`, updatedBusinessAccount);
	}


}