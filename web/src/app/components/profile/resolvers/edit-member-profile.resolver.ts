import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/app/_models/Users/User';
import { AccountService } from 'src/app/_services/users/account.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AuthService } from 'src/app/_services/users/auth.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserBusinessProfile } from '../models/user-business-profile';

@Injectable()
export class EditMemberProfileResolver implements Resolve<User> {
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

        return this.accountService.getUserProfileForEdit<UserBusinessProfile>(+userId).pipe(
            catchError(error => {
                this.alertiy.error('يوجد مشكلة في عرض بيانات المستخدم أو لا تملك صلاحية مخوله للوصول الى ملفه');
                this.router.navigate(['']);
                return of(null);
            })
        );
    }
}
