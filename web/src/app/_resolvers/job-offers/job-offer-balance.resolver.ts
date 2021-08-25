import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { UserService } from '../../_services/users/User.service';
import { User } from 'src/app/_models/Users/User';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { JobOffersService } from 'src/app/components/jobs/_services/job-offers.service';
import { AccountEmploymentBagsBalance } from 'src/app/components/jobs/_models/job-offer';

@Injectable()
export class JobOfferBalanceResolver implements Resolve<AccountEmploymentBagsBalance> {

  constructor(private jobOffersService: JobOffersService, private router: Router, private alertiy: AlertifyService, private authService: AuthService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<AccountEmploymentBagsBalance> {
    return this.jobOffersService.getCurrentAccountJobOffersBalance().pipe(
      map((result: AccountEmploymentBagsBalance) => {
        if (result.isHasBalance === false) {
          this.router.navigate([`/businesses/packages/${result.message}`]);
          return of(null);
        }
        else {
          return result;
        }
      }),
      catchError(error => {
        this.alertiy.error('لا يوجد لديك أي رصيد كافي من حقائب التوظيف لاضافة اعلان جديد، فضلاً قم بالاشتراك بأحد العروض المتاحة');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
