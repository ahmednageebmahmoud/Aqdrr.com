import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EndpointFactory } from './endpoint-factory.service';

@Injectable({
  providedIn: 'root'
})
export class AccountEndpointService extends EndpointFactory {
  baseUrl = environment.ApiUrl;

  private readonly _usersUrl: string = 'account/users';
  private readonly _usersProfilesUrl: string = 'account/users/profiles';
  private readonly _userByUserNameUrl: string = 'account/users/username';
  private readonly _ldapUserByUserNameUrl: string = 'account/users/ldap';
  private readonly _currentUserUrl: string = 'account/users/me';
  private readonly _currentUserPreferencesUrl: string = 'account/users/me/preferences';
  private readonly _unblockUserUrl: string = 'account/users/unblock';
  private readonly _rolesUrl: string = 'account/roles';
  private readonly _roleByRoleNameUrl: string = 'account/roles/name';
  private readonly _permissionsUrl: string = 'account/permissions';
  private readonly _languageUrl: string = 'account/SetLanguage/';
  private readonly _rolesListUrl: string = 'account/roles/list';

  get usersUrl() { return this.baseUrl + this._usersUrl; }
  get usersProfilesUrl() { return this.baseUrl + this._usersProfilesUrl; }
  get userByUserNameUrl() { return this.baseUrl + this._userByUserNameUrl; }
  get ldapUserByUserNameUrl() { return this.baseUrl + this._ldapUserByUserNameUrl; }
  get currentUserUrl() { return this.baseUrl + this._currentUserUrl; }
  get currentUserPreferencesUrl() { return this.baseUrl + this._currentUserPreferencesUrl; }
  get unblockUserUrl() { return this.baseUrl + this._unblockUserUrl; }
  get rolesUrl() { return this.baseUrl + this._rolesUrl; }
  get roleByRoleNameUrl() { return this.baseUrl + this._roleByRoleNameUrl; }
  get rolesListUrl() { return this.baseUrl + this._rolesListUrl; }
  get permissionsUrl() { return this.baseUrl + this._permissionsUrl; }
  get languageUrl() { return this.baseUrl + this._languageUrl; }

  constructor(http: HttpClient, injector: Injector) {
    super(http, injector);
  }

  getUserProfileEndpoint<T>(userId: number): Observable<T> {
    return this.http.get<T>(`${this.usersProfilesUrl}/${userId}`).pipe();
  }
  
  getUserProfileForEditEndpoint<T>(userId: number): Observable<T> {
    return this.http.get<T>(`${this.usersProfilesUrl}/${userId}/edit`).pipe();
  }

  getUserEndpoint<T>(userId?: number): Observable<T> {
    const endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
    return this.http.get<T>(endpointUrl).pipe();
  }

  getUserRolesEndpoint<T>(id: number): Observable<T> {
    const endpointUrl = `${this.usersUrl}/${id}/roles`;
    return this.http.get<T>(endpointUrl).pipe();
  }

  getRolesLisEndpoint<T>(filter: string): Observable<T> {
    const endpointUrl = `${this.rolesListUrl}/${filter}`;
    return this.http.get<T>(endpointUrl).pipe();
  }

  getUserByUserNameEndpoint<T>(userName: string): Observable<T> {
    const endpointUrl = `${this.userByUserNameUrl}/${userName}`;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }

  getLdapUserByUserNameEndpoint<T>(userName: string): Observable<T> {
    const endpointUrl = `${this.ldapUserByUserNameUrl}/${userName}`;
    return this.http.get<T>(endpointUrl);
  }

  getUsersEndpoint<T>(page?: number, pageSize?: number): Observable<T> {
    const endpointUrl = page && pageSize ? `${this.usersUrl}/${page}/${pageSize}` : this.usersUrl;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }


  getNewUserEndpoint<T>(userObject: any): Observable<T> {
    return this.http.post<T>(this.usersUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe();
  }

  getUpdateUserEndpoint<T>(userObject: any, userId?: number): Observable<T> {
    const endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
    return this.http.put<T>(endpointUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe();
  }

  getPatchUpdateUserEndpoint<T>(patch: {}, userId?: string): Observable<T>;
  getPatchUpdateUserEndpoint<T>(value: any, op: string, path: string, from?: any, userId?: string): Observable<T>;
  getPatchUpdateUserEndpoint<T>(valueOrPatch: any, opOrUserId?: string, path?: string, from?: any, userId?: string): Observable<T> {
    let endpointUrl: string;
    let patchDocument: {};

    if (path) {
      endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
      patchDocument = from ?
        [{ 'value': valueOrPatch, 'path': path, 'op': opOrUserId, 'from': from }] :
        [{ 'value': valueOrPatch, 'path': path, 'op': opOrUserId }];
    } else {
      endpointUrl = opOrUserId ? `${this.usersUrl}/${opOrUserId}` : this.currentUserUrl;
      patchDocument = valueOrPatch;
    }

    return this.http.patch<T>(endpointUrl, JSON.stringify(patchDocument), this.getRequestHeaders()).pipe();
  }


  getUserPreferencesEndpoint<T>(): Observable<T> {
    return this.http.get<T>(this.currentUserPreferencesUrl, this.getRequestHeaders()).pipe();
  }

  getUpdateUserPreferencesEndpoint<T>(configuration: string): Observable<T> {
    return this.http.put<T>(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.getRequestHeaders()).pipe();
  }

  getUnblockUserEndpoint<T>(userId: number): Observable<T> {
    const endpointUrl = `${this.unblockUserUrl}/${userId}`;
    return this.http.put<T>(endpointUrl, null, this.getRequestHeaders()).pipe();
  }

  getDeleteUserEndpoint<T>(userId: number): Observable<T> {
    const endpointUrl = `${this.usersUrl}/${userId}`;
    return this.http.delete<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }


  getRoleEndpoint<T>(roleId: string): Observable<T> {
    const endpointUrl = `${this.rolesUrl}/${roleId}`;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }


  getRoleByRoleNameEndpoint<T>(roleName: string): Observable<T> {
    const endpointUrl = `${this.roleByRoleNameUrl}/${roleName}`;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }



  getRolesEndpoint<T>(page?: number, pageSize?: number): Observable<T> {
    const endpointUrl = page && pageSize ? `${this.rolesUrl}/${page}/${pageSize}` : this.rolesUrl;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }

  getNewRoleEndpoint<T>(roleObject: any): Observable<T> {
    return this.http.post<T>(this.rolesUrl, JSON.stringify(roleObject), this.getRequestHeaders()).pipe();
  }

  getUpdateRoleEndpoint<T>(roleObject: any, roleId: string): Observable<T> {
    const endpointUrl = `${this.rolesUrl}/${roleId}`;
    return this.http.put<T>(endpointUrl, JSON.stringify(roleObject), this.getRequestHeaders()).pipe();
  }

  getDeleteRoleEndpoint<T>(roleId: string): Observable<T> {
    const endpointUrl = `${this.rolesUrl}/${roleId}`;
    return this.http.delete<T>(endpointUrl, this.getRequestHeaders()).pipe();
  }


  getPermissionsEndpoint<T>(): Observable<T> {
    return this.http.get<T>(this.permissionsUrl, this.getRequestHeaders()).pipe();
  }

  setLanguage(lang:string): Observable<any>{
    return this.http.get<string>(this.languageUrl + lang);
  }

}
