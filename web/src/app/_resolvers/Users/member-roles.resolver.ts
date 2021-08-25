import { AuthService } from '../../_services/users/auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Role } from '../../_models/Users/role';
import { AccountService } from '../../_services/users/account.service';

@Injectable()
export class MemberRolesResolver implements Resolve<Role> {
  constructor(private accountService: AccountService, private authService: AuthService,
    private router: Router, private alertiy: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Role> {
    let id: number = +route.params['id'];
    if (Number.isNaN(id)) { id = this.authService.decodedToken.nameid; }
    return this.accountService.getUserRoles(id).pipe(
      catchError(error => {
        this.alertiy.error('يوجد مشكلة في عرض البيانات');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
