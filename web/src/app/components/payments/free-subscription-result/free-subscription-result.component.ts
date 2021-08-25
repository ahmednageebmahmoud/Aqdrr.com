import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { SubscriptionPackageInvoice, PaymentStatus, PaymentInvoice } from 'src/app/_models/invoices/Invoice';
import { ChargeReturn } from 'src/app/_models/payments/tab-company';
import { InvoicesService } from 'src/app/_services/invoices/invoices.service';
import { PaymentsService } from 'src/app/_services/invoices/payments.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-free-subscription-result',
  templateUrl: './free-subscription-result.component.html',
  styleUrls: []
})
export class FreeSubscriptionResultComponent implements OnInit {
  isLoadingData = true;
  isSubmitting = false;
  previousUrl: any;
  paramInvoiceId: number = 0;
  currentUserId: number = 0;
  isPaidSucceeded = null;
  message = null;
  invoice: PaymentInvoice;

  constructor(private invoicesService: InvoicesService, public authService: AuthService, private route: ActivatedRoute,
    private urlService: UrlService, private activatedRoute: ActivatedRoute, private router: Router, private alertify: AlertifyService,
    private appTranslation: AppTranslationService, private appTitle: AppTitleService, private permissions: PermissionsService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('invoiceId') || +paramMap.get('invoiceId') == 0) {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.router.navigate(['']);
        return;
      }
      this.paramInvoiceId = +paramMap.get('invoiceId');
      this.getInvoiceDetails();
    });
  }


  getInvoiceDetails() {
    this.isLoadingData = true;
    this.invoicesService.getInvoice(this.paramInvoiceId).subscribe((invoiceResult: PaymentInvoice) => {
      if (invoiceResult.status === PaymentStatus.Confirmed)
        this.isPaidSucceeded = true;
      else {
        this.isPaidSucceeded = false;
        this.message = `${invoiceResult.chargeResponsiveCode} - ${invoiceResult.chargeResponsiveMessage}`;
      }
    },
      error => {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.isLoadingData = false;
      },
      () => {
        this.isLoadingData = false;
      }
    );
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



