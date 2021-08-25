import { User } from '../../_models/Users/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { PaginationResult } from '../../_models/data/Pagination';
import { map } from 'rxjs/operators';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { UploadStatus } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { PaymentsResult } from 'src/app/_models/invoices/Invoice';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.ApiUrl + 'users/';
  constructor(private http: HttpClient) { }

  // getUsers(page?, itemsPerPage?): Observable<PaginationResult<User[]>> {
  //   const paginationResult: PaginationResult<User[]> = new PaginationResult<User[]>();
  //   let params = new HttpParams();
  //   if (page != null && itemsPerPage != null) {
  //     params = params.append('pageNumber', page);
  //     params = params.append('pageSize', itemsPerPage);
  //   }
  //   return this.http.get<User[]>(this.baseUrl, { observe: 'response', params }).pipe(
  //     map(response => {
  //       paginationResult.items = response.body;
  //       if (response.headers.get('Pagination') != null) {
  //         paginationResult.pagination = JSON.parse(response.headers.get('Pagination'));
  //       }
  //       return paginationResult;
  //     })
  //   );
  // }

  // getUser(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}${id}`);
  // }

  // getUserWithRoles(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}${id}/detials`);
  // }

  // updateUser(id: number, user: User) {
  //   return this.http.put(this.baseUrl + id, user);
  // }

  updateProfilePhoto(data: FormData, userId: number) {
    const uploadURL = `${this.baseUrl}${userId}/photos/upload`;
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
    }));
  }

  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.baseUrl + userId + '/photos/' + id + '/setMain', {});
  }

  filter(searchQuery: string) {
    return this.http.get<KeyValuePairResource[]>(this.baseUrl + `filter/${searchQuery}`);
  }

  findUser(searchQuery: string) {
    return this.http.get<KeyValuePairResource[]>(this.baseUrl + `filter/${searchQuery}`);
  }

  deletePhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + userId + '/photos/' + id);
  }


}
