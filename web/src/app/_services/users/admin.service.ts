import { PaginationResult } from '../../_models/data/Pagination';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User, UserWithRoles, BaseUserInfo } from '../../_models/Users/User';
import { Observable } from 'rxjs';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.ApiUrl + 'admin/';
  constructor(private http: HttpClient) { }


  getUsersWithRoles(query): Observable<PaginationResult<UserWithRoles[]>> {
    return Utilities.getPaginationResult<UserWithRoles>(this.http, this.baseUrl + 'usersWithRoles', query);
  }

  getUsersInRole(roleId: Number, query): Observable<PaginationResult<BaseUserInfo[]>> {
    return Utilities.getPaginationResult<BaseUserInfo>(this.http, `${this.baseUrl}Role/${roleId}/Users`, query);
  }

  updateUserRoles(userName: string, roles: {}) {
    return this.http.post(`${this.baseUrl}editRoles/${userName}`, roles);
  }

  getPhotosForApproval() {
    return this.http.get(this.baseUrl + 'photosForModeration');
  }

  approvePhoto(photoId) {
    return this.http.post(this.baseUrl + 'approvePhoto/' + photoId, {});
  }

  rejectPhoto(photoId) {
    return this.http.post(this.baseUrl + 'rejectPhoto/' + photoId, {});
  }

  removeUserFromRole(roleId: Number, userId: Number) {
    return this.http.delete(`${this.baseUrl}Roles/${roleId}/Users/${userId}`);
  }

}

