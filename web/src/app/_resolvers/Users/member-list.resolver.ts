import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { UserService } from '../../_services/users/User.service';
import { User } from 'src/app/_models/Users/User';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  pageNumber = 1;
  pageSize = 6;
  messageType = 'Unread';
  constructor(private userService: UserService, private router: Router, private alertiy: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
      catchError(error => {
        this.alertiy.error('يوجد مشكلة في عرض البيانات');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
