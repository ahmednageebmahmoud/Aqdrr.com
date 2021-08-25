import { AlertifyService } from '../_helpers/Alertify';
import { AuthService } from './../_services/users/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router, private alertify: AlertifyService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const roles = next.firstChild?.data['roles'] as Array<string>;
    // console.log(roles);
    if (roles) {
      const match = this.authservice.matchRole(roles);
      if (match) {
        return true;
      } else {
        this.router.navigate(['home']);
        this.alertify.error('غير مصرح لك بالوصول الى هذا المحتوى');

      }
    }

    if (this.authservice.loggedIn()) {
      return true;
    }

    this.alertify.error('يجب تسجيل الدخول اولاً.');
    this.router.navigate(['login'], { queryParams: { 'redirectURL': state.url } });
    return false;

  }
}
