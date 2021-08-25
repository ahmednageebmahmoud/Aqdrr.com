import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { ExecuteResult } from 'src/app/_models/data/actions-result';
import { SMSBalance } from 'src/app/_models/settings/sms';
import { SmsService } from 'src/app/_services/settings/sms.service';

@Component({
  selector: 'app-sms-balance',
  templateUrl: './sms-balance.component.html',
  styleUrls: []
})
export class SmsBalanceComponent implements OnInit {
  balance: SMSBalance;
  isSubmitting: boolean = false;
  phoneNumber: string;
  constructor(private smsService: SmsService, private alertify: AlertifyService, private appTranslation: AppTranslationService) { }

  ngOnInit(): void {
    this.getSmsBalance();
  }

  sendTestSMS() {
    this.isSubmitting = true;
    this.smsService.sendSMSFromYamamahAsTestMessage(this.phoneNumber).subscribe(
      (result: ExecuteResult) => {
        this.phoneNumber = '';
        this.alertify.info(result.message);
        this.isSubmitting = false;
      },
      error => {
        this.alertify.error(`${error}`);
        this.isSubmitting = false;
      }
    );
  }

  getSmsBalance() {
    this.smsService.getYamamahSMSBalance().subscribe(
      (result: SMSBalance) => {
        this.balance = result;
      },
      error => this.alertify.error('فشل في جلب رصيد الرسائل فضلاً تحقق من الربط مع منصة الرسائل أو أن منصة الرسائل معطله')
    );
  }


}
