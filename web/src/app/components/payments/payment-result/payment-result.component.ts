import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { PaymentStatus, SubscriptionPackageInvoice } from 'src/app/_models/invoices/Invoice';
import { ChargeReturn } from 'src/app/_models/payments/tab-company';
import { PaymentsService } from 'src/app/_services/invoices/payments.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: []
})
export class PaymentResultComponent implements OnInit {
  isLoadingData = true;
  isSubmitting = false;
  previousUrl: any;
  paramTapId: string = '';
  currentUserId: number = 0;
  isPaidSucceeded = null;
  message = null;

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
              const subscriptionPackageInvoice = result as SubscriptionPackageInvoice
              if (subscriptionPackageInvoice.status === PaymentStatus.Confirmed)
                this.isPaidSucceeded = true;
              else {
                this.isPaidSucceeded = false;
                this.message = `${subscriptionPackageInvoice.chargeResponsiveCode} - ${subscriptionPackageInvoice.chargeResponsiveMessage}`;
              }
            }
            if (this.isChargeReturn(result)) {
              const chargeReturn = result as ChargeReturn
              if (chargeReturn.status === 'CAPTURED')
                this.isPaidSucceeded = true;
              else {
                this.isPaidSucceeded = false;
                this.message = `${chargeReturn.response.code} - ${chargeReturn.response.message}`;
              }
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


