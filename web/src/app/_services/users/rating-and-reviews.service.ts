import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { RatingAndReview } from 'src/app/_models/Users/rating-and-review';
import { environment } from 'src/environments/environment';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class RatingAndReviewsService {
	baseUrl = environment.ApiUrl ;
	ratingAndReviewsUrl = `${this.baseUrl}ratingAndReviews`;

	constructor(private http: HttpClient) { }

	addNew(newRatingAndReview: RatingAndReview): Observable<any> {
		return this.http.post<any>(`${this.ratingAndReviewsUrl}`, newRatingAndReview);
	}
	updateRatingAndReview(updatedRatingAndReview: RatingAndReview): Observable<RatingAndReview> {
		return this.http.put<RatingAndReview>(`${this.ratingAndReviewsUrl}`, updatedRatingAndReview);
	}
	ViewRatingAndReview(viewedRatingAndReview: RatingAndReview): Observable<RatingAndReview> {
		return this.http.put<RatingAndReview>(`${this.ratingAndReviewsUrl}`, viewedRatingAndReview);
	}
	getRatingAndReview(id: number): Observable<RatingAndReview> {
		return this.http.get<RatingAndReview>(`${this.ratingAndReviewsUrl}/${id}`);
	}
	getRatingAndReviews(): Observable<RatingAndReview[]> {
		return this.http.get<RatingAndReview[]>(this.ratingAndReviewsUrl);
	}
	getPagedRatingAndReviews(query: any): Observable<PaginationResult<RatingAndReview[]>> {
		return Utilities.getPaginationResult<RatingAndReview>(this.http, `${this.ratingAndReviewsUrl}/Pages`, query);
	}
	getRatingAndReviewsAsList(query?: any): Observable<KeyValuePairResource[]> {
		return this.http.get<KeyValuePairResource[]>(`${this.ratingAndReviewsUrl}/list`);
	}
}

