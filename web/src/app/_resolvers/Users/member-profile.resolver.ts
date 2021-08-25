import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { UserService } from '../../_services/users/User.service';
import { User } from 'src/app/_models/Users/User';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { AccountService } from 'src/app/_services/users/account.service';

@Injectable()
export class MemberProfileResolver implements Resolve<User> {
    constructor(private accountService: AccountService, private router: Router, private alertiy: AlertifyService, private authService: AuthService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        let userId = 0;
        if (route.paramMap.has('userId')) {
            userId = +route.params['userId'];
        }
        else if (!route.paramMap.has('userId') && this.authService.loggedIn()) {
            userId = this.authService.getCurrentUserIdUsingToken();
        }
        else
            return of(null);

        return this.accountService.getUserProfile(+userId).pipe(
            catchError(error => {
                this.alertiy.error('يوجد مشكلة في عرض بيانات المستخدم أو لا تملك صلاحية مخوله للوصول الى ملفه');
                this.router.navigate(['']);
                return of(null);
            })
        );
    }
}
