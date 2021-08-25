import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { PaymentsResult, SubscriptionPackageInvoice } from 'src/app/_models/invoices/Invoice';
import { ChargeReturn } from 'src/app/_models/payments/tab-company';
import { PaymentsService } from 'src/app/_services/invoices/payments.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: []
})
export class PaymentSuccessComponent implements OnInit {
  isLoadingData = true;
  isSubmitting = false;
  previousUrl: any;
  paramTapId: string = '';
  currentUserId: number = 0;

  constructor(private paymentsService: PaymentsService, public authService: AuthService, private route: ActivatedRoute,
    private urlService: UrlService, private activatedRoute: ActivatedRoute, private router: Router, private alertify: AlertifyService,
    private appTranslation: AppTranslationService, private appTitle: AppTitleService, private permissions: PermissionsService) {
    this.route.queryParams.subscribe(params => {
      this.paramTapId = params['tap_id'];
    });
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (this.paramTapId) {
        console.log(this.paramTapId);
        this.paymentsService.confirmAfterRedirectFromPaymentGateway(this.authService.currentUser.id, this.paramTapId).subscribe(
          (result: any) => {

            console.log('the Object  :', result);

            if (this.isSubscriptionPackageInvoice(result)) {
              console.log('invoice :', result);
            }
            if (this.isChargeReturn(result)) {
              console.log('Charge :', result);
            }


          },
          error => {
            this.alertify.error(error);
            this.isLoadingData = false;
          },
          () => { this.isLoadingData = false; }
        );
      }


    });
  }


  isSubscriptionPackageInvoice(obj: any): obj is SubscriptionPackageInvoice {
    return typeof obj.subscriptionPackageId === 'number';
  }

  isChargeReturn(obj: any): obj is ChargeReturn {
    return typeof obj.status === 'string';
  }


  startNow() {
    if (this.authService.loggedIn()) {
      if (this.permissions.canApplyToTheJobs)
        this.router.navigate(['/jobs']);
      else if (this.permissions.canManageOrders)
        this.router.navigate(['/profile']);
      else if (this.permissions.canManageJobs)
        this.router.navigate(['/jobs/new']);
      else if (this.permissions.canOrderService)
        this.router.navigate(['/taskers/list']);
      else
        this.router.navigate(['/']);
    } else {
      this.router.navigate(['/register']);
    }
  }

}


