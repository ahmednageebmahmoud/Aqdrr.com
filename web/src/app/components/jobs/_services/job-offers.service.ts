import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AccountEmploymentBagsBalance, JobOffer, JobOfferDetails, JobOfferRow } from '../_models/job-offer';
import { Observable } from 'rxjs';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Utilities } from 'src/app/_services/utilities.service';
import { JobPaginationResult, JobParams } from '../_models/job-params';

@Injectable({
	providedIn: 'root'
})
export class JobOffersService {
	baseUrl = environment.ApiUrl;
	jobOffersUrl = `${this.baseUrl}jobsOffers`;

	constructor(private http: HttpClient) { }

	addNew(newJobOffer: JobOffer): Observable<any> {
		return this.http.post<any>(`${this.jobOffersUrl}`, newJobOffer);
	}
	updateJobOffer(updatedJobOffer: JobOffer): Observable<JobOffer> {
		return this.http.put<JobOffer>(`${this.jobOffersUrl}`, updatedJobOffer);
	}
	getJobOffer(id: number): Observable<JobOfferDetails> {
		return this.http.get<JobOfferDetails>(`${this.jobOffersUrl}/${id}`);
	}
	getJobOffers(): Observable<JobOffer[]> {
		return this.http.get<JobOffer[]>(this.jobOffersUrl);
	}
	getPagedJobOffers(query: JobParams): Observable<JobPaginationResult<JobOfferRow[]>> {
		return Utilities.getCustomPaginationResult<JobPaginationResult<JobOfferRow[]>, JobOfferRow>(this.http, `${this.jobOffersUrl}/Pages`, query);
	}
	getPagedJobOffersForManage(query: JobParams): Observable<JobPaginationResult<JobOfferRow[]>> {
		return Utilities.getCustomPaginationResult<JobPaginationResult<JobOfferRow[]>, JobOfferRow>(this.http, `${this.jobOffersUrl}/Pages/manage`, query);
	}

  getCurrentAccountJobOffersBalance(): Observable<AccountEmploymentBagsBalance> {
		return this.http.get<AccountEmploymentBagsBalance>(`${this.jobOffersUrl}/balance`);
	}
}
