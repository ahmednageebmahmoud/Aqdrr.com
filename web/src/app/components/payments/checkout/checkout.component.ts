import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { UserService } from 'src/app/_services/users/User.service';
import { SubscriptionPackageReturn } from 'src/app/_models/settings/subscription-package';
import { SubscriptionPackagesService } from 'src/app/_services/settings/subscription-packages.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { PaymentsService } from 'src/app/_services/invoices/payments.service';
import { SubscriptionPackageInvoice, PaymentsResult, PaymentStatus } from 'src/app/_models/invoices/Invoice';
import { ChargeStatus } from 'src/app/_models/payments/tab-company';
import { InvoicesService } from 'src/app/_services/invoices/invoices.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy, AfterViewInit {
  // Card Declare
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  successPaid: boolean = false;
  cardFormLoader: boolean = true;

  // Page Declare
  title: string = '';
  @Output() viewedSuccessfully: EventEmitter<SubscriptionPackageReturn> = new EventEmitter<SubscriptionPackageReturn>();
  isLoadingData = true;
  isSubmitting = false;
  previousUrl: any;
  subscriptionPackage: SubscriptionPackageReturn;
  paramPackageId: number = 0;
  currentUserId: number = 0;
  ChargeStatusEnum = ChargeStatus;

  constructor(private cd: ChangeDetectorRef, private paymentsService: PaymentsService,
    public authService: AuthService, private location: Location, private route: ActivatedRoute,
    private urlService: UrlService, private subscriptionPackagesService: SubscriptionPackagesService,
    private activatedRoute: ActivatedRoute, private router: Router, private alertify: AlertifyService,
    private appTranslation: AppTranslationService, private appTitle: AppTitleService, private invoicesService: InvoicesService) {
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      if (previousUrl != null)
        this.previousUrl = [`${previousUrl}`];
      else
        this.previousUrl = ['']
    });
  }

  ngAfterViewInit() {

    var style = {
      base: {
        color: '#535353',
        lineHeight: '18px',
        fontFamily: 'sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: 'rgba(0, 0, 0, 0.26)',
          fontSize: '15px'
        }
      },
      invalid: {
        color: 'red'
      }
    };

    var labels = {
      cardNumber: "رقم البطاقة",
      expirationDate: "MM/YY | الشهر/السنة",
      cvv: "CVV الرمز",
      cardHolder: "اسم حامل البطاقة"
    };

    //payment options
    var paymentOptions = {
      currencyCode: ["SAR"],
      labels: labels,
      TextDirection: 'rtl'
    }

    //create element, pass style and payment options
    this.card = elements.create('card', { style: style }, paymentOptions);
    //mount element
    this.card.mount('#card-info');
    // this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler, true);


  }

  ngOnDestroy() {
    try {
      // this.card.removeEventListener('change', this.cardHandler, true);
      this.card.destroy();
    } catch (error) {

    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('packageId') || +paramMap.get('packageId') == 0) {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.router.navigate([this.previousUrl]);
        return;
      }
      this.paramPackageId = +paramMap.get('packageId');
      this.getSubscriptionPackageDetails();
    });
  }


  getSubscriptionPackageDetails() {
    this.isLoadingData = true;
    this.subscriptionPackagesService.getSubscriptionPackage(this.paramPackageId).subscribe(
      (subscriptionPackageResult: SubscriptionPackageReturn) => {
        this.subscriptionPackage = subscriptionPackageResult;
        if (subscriptionPackageResult.isFree)
          this.cardFormLoader = false;
      },
      error => {
        this.alertify.error(error);
        this.isLoadingData = false;
        this.router.navigate([this.previousUrl]);
      },
      () => {
        this.title = `الاشتراك في ${this.subscriptionPackage.arTitle} (${this.subscriptionPackage.categoryDescription})`;
        setTimeout(() => {
          this.appTitle.changeNavigationTitle(`الاشتراك في ${this.subscriptionPackage.arTitle}`, ``);
          this.appTitle.changeTabTitle(`الاشتراك في العرض ${this.subscriptionPackage.arTitle}`);
        }, 0);
        this.isLoadingData = false;
      }
    );
  }

  //card change event listener
  onChange({ error }) {
    this.cardFormLoader = false;
    if (error) {
      if (error.key === 'error_invalid_cvv_characters')
        this.error = ""
      else if (error.key === "error_invalid_card_characters")
        this.error = "رقم بطاقتك غير صحيح"
      else if (error.key === "Your card's security code is incomplete.")
        this.error = "تاريخ إنتهاء البطاقة غير صحيح"
      else if (error.key === "card_number_required")
        this.error = "قُم بملئ بيانات البطاقة الخاصه بك قبل الارسال"
      else if (error.key === "error_invalid_card")
        this.error = "تحقق من صحة بيانات البطاقة الخاصة بك"
      else
        this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit() {
    this.isSubmitting = true;
    if (this.subscriptionPackage.isFree === true) {
      this.onFreeSubscriptionPackage();
    } else {
      this.onCreditCardSubscriptionPackage();
    }
  }

  // عند الاشتراك بخدمة مجانية بدون استخدام بوابة الدفع
  async onFreeSubscriptionPackage() {
    this.invoicesService.freeSubscription(this.paramPackageId).subscribe(
      (invoice: SubscriptionPackageInvoice) => {
        if (invoice.isPaid === true)
          this.router.navigate(['/payments', 'checkout', 'free-subscription', invoice.id]);
        else
          this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
      },
      error => {
        this.alertify.error(error);
        this.isSubmitting = false;
      },
      () => { this.isSubmitting = false; }
    );
  }

  // عند الاشتراك بخدمة باستخدام بوابة الدفع
  async onCreditCardSubscriptionPackage() {
    const result = await tap.createToken(this.card);
    if (result.error) {
      this.error = `حدث خطأ في السداد: \n ${result.error.message}`;
      this.isSubmitting = false;
    } else {
      // console.log('success token: ', result.id);
      this.error = '';
      this.paymentsService.charge(this.authService.currentUser.id, result.id.toString(), this.paramPackageId).subscribe(
        (res: PaymentsResult) => {
          console.log(res);
          if (<ChargeStatus>res.paymentInvoice.chargeStatus === <ChargeStatus>this.ChargeStatusEnum.INITIATED)
            window.location.href = res.chargeReturn.transaction.url;
          else if (<ChargeStatus>res.paymentInvoice.chargeStatus === <ChargeStatus>this.ChargeStatusEnum.CAPTURED)
            this.router.navigate(['/payments', 'checkout', 'gateway-result',  res.chargeReturn.id]);
          else if (<ChargeStatus>res.paymentInvoice.chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Free)
            this.router.navigate(['/payments', 'checkout', 'free-subscription', res.paymentInvoice.id]);
          else if (<ChargeStatus>res.paymentInvoice.chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Other) {
            this.alertify.error(`Error: ${res.paymentInvoice.chargeResponsiveCode} <br>${res.paymentInvoice.chargeResponsiveMessage}`);
            this.error = `Error: ${res.paymentInvoice.chargeResponsiveCode} <br>${res.paymentInvoice.chargeResponsiveMessage}`;
            this.isSubmitting = false;
          }
          else {
            this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
            this.isSubmitting = false;
          }
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
          // this.router.navigate(['']);
        },
      )
    }
  }

}
