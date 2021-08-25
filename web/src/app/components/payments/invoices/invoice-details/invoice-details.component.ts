import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { Invoice, PaymentInvoice, PaymentStatus, SubscriptionPackageInvoice } from 'src/app/_models/invoices/Invoice';
import { ChargeReturn, ChargeStatus } from 'src/app/_models/payments/tab-company';
import { PackageCategory } from 'src/app/_models/settings/subscription-package';
import { InvoicesService } from 'src/app/_services/invoices/invoices.service';
import { PaymentsService } from 'src/app/_services/invoices/payments.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: []
})
export class InvoiceDetailsComponent implements OnInit {
	isLoadingData = true;
	isSubmitting = false;
	currentUserId: number = 0;
	previousUrl: any;
	@Output() viewedSuccessfully: EventEmitter<Invoice> = new EventEmitter<Invoice>();
	invoice: PaymentInvoice;
	paramInvoiceId: number = 0;
  PackageCategoryEnum = PackageCategory;
  PaymentStatusEnum = PaymentStatus;
  ChargeStatusEnum = ChargeStatus;


	constructor(private appTranslation: AppTranslationService,
		private router: Router, private activatedRoute: ActivatedRoute, private urlService: UrlService,
		public authService: AuthService, public permissions: PermissionsService,
		private appTitle: AppTitleService, private alertify: AlertifyService,
		private invoicesService: InvoicesService, private paymentsService: PaymentsService) {
		this.urlService.previousUrl$.subscribe((previousUrl: string) => {
		if (previousUrl != null)
			this.previousUrl = [`${previousUrl}`];
		else
			this.previousUrl = ['/invoices']
		});
	}

	ngOnInit(): void {
		try { this.currentUserId = this.authService.getCurrentUserIdUsingToken(); } catch (error) { console.log('anonymous user'); }
		this.activatedRoute.paramMap.subscribe(paramMap => {
			if (!paramMap.has('invoiceId') || +paramMap.get('invoiceId') == 0) {
				this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
				this.router.navigate([this.previousUrl]);
				return;
			}
			this.paramInvoiceId = +paramMap.get('invoiceId');
			this.getInvoiceDetails();
		});
	}

	getInvoiceDetails() {
		this.isLoadingData = true;
		this.invoicesService.getInvoice(this.paramInvoiceId).subscribe((invoiceResult: PaymentInvoice) => {
			this.invoice = invoiceResult;
		},
			error => {
				this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
				this.isLoadingData = false;
				this.router.navigate([this.previousUrl]);
			},
			() => {
				setTimeout(() => {
					this.appTitle.changeNavigationTitle(`السجل رقم #${this.paramInvoiceId}`, ``);
					this.appTitle.changeTabTitle(`السجل رقم #${this.paramInvoiceId}`);
				}, 0);
				this.isLoadingData = false;
			}
		);
	}


  getChargeStatusEnumIconStyle(chargeStatus: ChargeStatus) {
    if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.CAPTURED || <ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Free) {
      return 'fa fa-check-circle text-success';
    } else if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Other) {
      return 'fa fa-ban text-warning';
    } else if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Waiting) {
      return 'fa fa-clock-o text-primary';
    } else if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.INITIATED) {
      return 'fa fa-retweet text-primary';
    }
    else { return 'fa fa-info text-info' }
  }

  getPaymentStatusIconStyle(status: PaymentStatus) {
    if (<PaymentStatus>status === <PaymentStatus>this.PaymentStatusEnum.Confirmed) {
      return 'fa fa-check-circle text-success';
    } else if (<PaymentStatus>status === <PaymentStatus>this.PaymentStatusEnum.Failed) {
      return 'fa fa-ban text-danger';
    } else if (<PaymentStatus>status === <PaymentStatus>this.PaymentStatusEnum.Waiting) {
      return 'fa fa-clock-o text-primary';
    }
    else { return 'fa fa-info text-info' }
  }


  checkPaymentGatewayForThisCharge(chargeStatus: ChargeStatus, chargeId: string,) {
			this.isSubmitting = true;
      this.paymentsService.confirmAfterRedirectFromPaymentGateway(this.authService.currentUser.id, chargeId).subscribe(
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
          this.isSubmitting = false;
        },
        () => { this.isSubmitting = false; }
      );
  }


  isSubscriptionPackageInvoice(obj: any): obj is SubscriptionPackageInvoice {
    return typeof obj.subscriptionPackageId === 'number';
  }

  isChargeReturn(obj: any): obj is ChargeReturn {
    return typeof obj.status === 'string';
  }

}
