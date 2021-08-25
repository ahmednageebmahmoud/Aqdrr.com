import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Portfolio } from 'src/app/components/profile/models/portfolio';
import { Observable } from 'rxjs';
import { UploadStatus } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { map } from 'rxjs/operators';
import { Utilities } from '../utilities.service';
import { PaginationResult } from 'src/app/_models/data/Pagination';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  baseUrl = environment.ApiUrl;
  portfoliosUrl = `${this.baseUrl}portfolios`;

  constructor(private http: HttpClient) { }

  addNew(newPortfolio: Portfolio): Observable<any> {
    return this.http.post<any>(`${this.portfoliosUrl}`, newPortfolio);
  }

  addNewWithFile(data: FormData) {
    const uploadURL = `${this.portfoliosUrl}/files`;
    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
    return this.http.post<any>(uploadURL, data, {
      headers: headers,
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: UploadStatus.progress, message: progress };
        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }

  updatePortfolio(updatedPortfolio: Portfolio): Observable<Portfolio> {
    return this.http.put<Portfolio>(`${this.portfoliosUrl}`, updatedPortfolio);
  }

  getPortfolio(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.portfoliosUrl}/${id}`);
  }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.portfoliosUrl);
  }

  getPagedPortfolios(query: any): Observable<PaginationResult<Portfolio[]>> {
    return Utilities.getPaginationResult<Portfolio>(this.http, `${this.portfoliosUrl}/Pages`, query);
  }

  setMainPhoto(portfolioId: number, photoId: number) {
    return this.http.put(`${this.portfoliosUrl}/${portfolioId}/photos/${photoId}/setMain`, {});
  }

  deletePhoto(portfolioId: number, photoId: number) {
    return this.http.delete(`${this.portfoliosUrl}/${portfolioId}/photos/${photoId}`);
  }


}
