import { User } from '../../_models/Users/User';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { LocalStoreManager } from '../../_helpers/local-store-manager.service';
import { PermissionValues } from '../../_models/Users/permission.model';
import { DbKeysService } from '../../_helpers/db-keys';
import { Router } from '@angular/router';
import { ChangeUserPassword, RequestResetPassword, ResetForgottenPassword, UserForRegister, VerifyAccount } from 'src/app/_models/Users/user-for-register';
import { SuccessfullyResult } from 'src/app/_models/data/actions-result';
import { UserLogin, LoginResult, UserLoginResult } from 'src/app/_models/Users/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.ApiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  private readonly _loginUrl: string = 'login';


  dir: string = localStorage.getItem(DbKeysService.PAGE_DIRECTIONS) || 'rtl';

  siteLang: string = localStorage.getItem(DbKeysService.LANGUAGE) || 'ar';
  language = new BehaviorSubject<string>(localStorage.getItem(DbKeysService.LANGUAGE) || 'ar');
  loggedInSuccessFully = new BehaviorSubject<null>(null);
  
  lang = this.language.asObservable();

  decodedToken: any;
  currentUser: UserLoginResult;

  photoUrl = new BehaviorSubject<string>('../../assets/img/team/m-avatar.jpg');
  currentPhotoUrl = this.photoUrl.asObservable();

  unreadCount = new BehaviorSubject<string>('');
  latestUnreadCount = this.unreadCount.asObservable();


  constructor(private http: HttpClient,
    private localStoreManager: LocalStoreManager) {
    // #region Language and page diraction
    const pageDirection = localStorage.getItem(DbKeysService.PAGE_DIRECTIONS);
    if (pageDirection == 'ltr') {
      this.dir = 'ltr';
      this.siteLang = 'en';
      localStorage.setItem(DbKeysService.LANGUAGE, 'en');
    } else {
      this.dir = 'rtl';
      this.siteLang = 'ar';
      localStorage.setItem(DbKeysService.LANGUAGE, 'ar');
    }
  }

  public get loginUrl() { return this.baseUrl + this._loginUrl; }

  changeMemberPhoto(newPhotoUrl: string) {
    this.photoUrl.next(newPhotoUrl);
  }

  login(userLogin: UserLogin) {
    return this.http.post(this.loginUrl, userLogin, { withCredentials: true }).pipe(
      map((response: LoginResult) => {
        const loginResult = response;
        if (loginResult) {
          this.decodedToken = this.jwtHelper.decodeToken(loginResult.token);
          this.currentUser = loginResult.user;
          this.changeMemberPhoto(this.currentUser.photoURL);
          const permissions: PermissionValues[] = Array.isArray(this.decodedToken.permission) ? this.decodedToken.permission : [this.decodedToken.permission];
          loginResult.user.roles = Array.isArray(this.decodedToken.role) ? this.decodedToken.role : [this.decodedToken.role];
          localStorage.setItem(DbKeysService.ACCESS_TOKEN, loginResult.token);
          localStorage.setItem(DbKeysService.CURRENT_USER, JSON.stringify(loginResult.user));
          localStorage.setItem(DbKeysService.USER_PERMISSIONS, JSON.stringify(permissions));
        }
      }));
  }

  register(user: UserForRegister) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  restoreAccount(requestResetPassword: RequestResetPassword): Observable<SuccessfullyResult> {
    return this.http.post<SuccessfullyResult>(this.baseUrl + 'account/restore', requestResetPassword);
  }

  resetForgottenPasswordAccount(resetForgottenPassword: ResetForgottenPassword): Observable<SuccessfullyResult> {
    return this.http.post<SuccessfullyResult>(this.baseUrl + 'password/reset', resetForgottenPassword);
  }

  changeCurrentUserPassword(changeUserPassword: ChangeUserPassword): Observable<SuccessfullyResult> {
    return this.http.post<SuccessfullyResult>(this.baseUrl + 'password/change', changeUserPassword);
  }

  tokenGetter() {
    return localStorage.getItem(DbKeysService.ACCESS_TOKEN);
  }

  loadUserDataFromLocalStorage() {
    const token = localStorage.getItem(DbKeysService.ACCESS_TOKEN);
    const user: UserLoginResult = JSON.parse(localStorage.getItem(DbKeysService.CURRENT_USER));
    if (token) { this.decodedToken = this.jwtHelper.decodeToken(token); }
    if (user) {
      this.currentUser = user;
      this.changeMemberPhoto(this.currentUser.photoURL);
    }
  }


  refreshUserProfilePhoto(photoURL: string) {
    this.changeMemberPhoto(photoURL);
    this.currentUser.photoURL = photoURL;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  getCurrentUserIdUsingToken() {
    const token = localStorage.getItem(DbKeysService.ACCESS_TOKEN);
    if (token && !this.jwtHelper.isTokenExpired(token))
      return +this.jwtHelper.decodeToken(token).nameid;
    else
      return 0;
  }

  getCurrentUserToken() {
    const token = localStorage.getItem(DbKeysService.ACCESS_TOKEN);
    if (token && !this.jwtHelper.isTokenExpired(token))
      return +this.jwtHelper.decodeToken(token);
    else
      return of(null);
  }

  isCurrentUserProfile(userID: Number): boolean {
    if (+this.getCurrentUserIdUsingToken() === userID && userID !== 0) {
      return true;
    } else { return false; }
  }

  getCurrentUser() {
    const token = localStorage.getItem(DbKeysService.ACCESS_TOKEN);
    const user: User = JSON.parse(localStorage.getItem(DbKeysService.CURRENT_USER));
    if (user && !this.jwtHelper.isTokenExpired(token))
      return user;
    else
      return of(null);
  }

  
  resendVerifyCode(userId: number): Observable<SuccessfullyResult> {
    return this.http.post<SuccessfullyResult>(this.baseUrl + 'phone/resendVerifyCode', {userId});
  }

  activeUserAccountViaPhone(verifyAccount: VerifyAccount): Observable<SuccessfullyResult> {
    return this.http.post<SuccessfullyResult>(this.baseUrl + 'phone/verify', verifyAccount);
  }

  loggedIn() {
    try {
      const token = localStorage.getItem(DbKeysService.ACCESS_TOKEN);
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      return false;
    }
  }

  matchRole(AllowedRoles: Array<string>): boolean {
    let isMatch = false;
    const userRoles = this.decodedToken.role as Array<string>;
    AllowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }

  permissionMatch(AllowedPermissions: Array<string>): boolean {
    let isMatch = false;
    const userPermissions = this.decodedToken.permission as Array<string>;
    AllowedPermissions.forEach(element => {
      if (userPermissions.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }

  userHasPermission(permissionValue: PermissionValues): boolean {
    const userPermissions = this.decodedToken.permission as Array<string>;
    return this.userPermissions.some(p => p == permissionValue);
  }

  get userPermissions(): PermissionValues[] {
    return this.localStoreManager.getDataObject<PermissionValues[]>(DbKeysService.USER_PERMISSIONS) || [];
  }

  get isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  get rememberMe(): boolean {
    return this.localStoreManager.getDataObject<boolean>(DbKeysService.REMEMBER_ME) === true;
  }



}
