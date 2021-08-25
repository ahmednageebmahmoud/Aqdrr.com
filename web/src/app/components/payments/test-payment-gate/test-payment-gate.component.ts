import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { UserService } from 'src/app/_services/users/User.service';
import { PaymentsService } from 'src/app/_services/invoices/payments.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { ChargeReturn } from 'src/app/_models/payments/tab-company';
import { AppTranslationService } from 'src/app/_helpers/app-translation';

@Component({
  selector: 'app-test-payment-gate',
  templateUrl: './test-payment-gate.component.html',
  styleUrls: ['./test-payment-gate.component.css']
})
export class TestPaymentGateComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  successPaid: boolean = false;

  // Page Declare
  isLoadingData: boolean = true;
  isSubmitting = false;


  constructor(private cd: ChangeDetectorRef, private paymentsService: PaymentsService, private appTranslation: AppTranslationService,
    public authService: AuthService, private location: Location, private route: ActivatedRoute, private alertify: AlertifyService,
    private router: Router) { }

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

    // input labels/placeholders
    var labels = {
      cardNumber: "Card Number | رقم البطاقة",
      expirationDate: "MM/YY | الشهر/السنة",
      cvv: "CVV | الرمز",
      cardHolder: "Card Holder Name | اسم حامل البطاقة"
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
      this.card.destroy();
    } catch (error) {

    }
  }

  ngOnInit(): void {

  }

  //card change event listener
  onChange({ error }) {
    this.isLoadingData = false;
    if (error) {
      if (error.key === 'error_invalid_cvv_characters')
        this.error = "كود الحماية غير صحيح"
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
    const result = await tap.createToken(this.card);
    if (result.error) {
      this.error = `حدث خطأ في السداد: \n ${result.error.message}`;
      this.isSubmitting = false;
    } else {
      console.log('success token: ', result.id);
      this.paymentsService.chargeTest(this.authService.currentUser.id, result.id.toString()).subscribe(
        (res: ChargeReturn) => {
          console.log(res);
          if (res.status === 'INITIATED')
            window.location.href = res.transaction.url;
          else if (res.status === 'CAPTURED')
            this.router.navigate(['payments/checkout/success']);
          else
            this.alertify.error(`Error: ${res.response.code} <br>${res.response.message}`);
          this.isSubmitting = false;
          // this.isSubmitting = false;
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
