import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { VerifyAccount, UserRegisteredDetails, Gender } from 'src/app/_models/Users/user-for-register';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-verify-phone-number',
  templateUrl: './verify-phone-number.component.html',
  styleUrls: ['../../../../assets/css/login.css']
})
export class VerifyPhoneNumberComponent implements OnInit {

  userRegisteredDetails: UserRegisteredDetails;
  verifyAccount: VerifyAccount;
  isSubmitting: boolean = false;
  verifyPhoneForm: FormGroup;


  sendCodeTimer = 0;
  constructor(private authService: AuthService, private alertify: AlertifyService,
    private activateRouter: ActivatedRoute,
    private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    const stateUserDetails = navigation.extras.state as UserRegisteredDetails;
    if (stateUserDetails != undefined && stateUserDetails?.id)
      this.userRegisteredDetails = stateUserDetails;
    else
      this.router.navigate([`login`]);

  }


  ngOnInit(): void {
    if (this.userRegisteredDetails?.id == undefined)
      this.router.navigate([`error`], { state: { error: 'خطأ في العثور على بيانات حساب المستخدم الحالي' } });
    this.createVerifyPhoneForm();

    this.runTimerToResendMessage()
  }

  createVerifyPhoneForm() {
    this.verifyPhoneForm = this.fb.group({
      userId: [this.userRegisteredDetails?.id, [Validators.required, Validators.pattern(RegularExpression.Number)]],
      verifyCode: ['', [Validators.required, Validators.minLength(6), Validators.pattern(RegularExpression.VerifyPhoneNumberCode)]],
    });
  }

  get addValidator() { return this.verifyPhoneForm.controls; }


  isFemaleAccount(): boolean {
    if (this.userRegisteredDetails?.gender as Gender === Gender.female as Gender) {
      return true;
    } else { return false; }
  }


  activateUserAccount() {
    if (this.verifyPhoneForm.valid) {
      this.verifyAccount = Object.assign({}, this.verifyPhoneForm.value);
      this.isSubmitting = true;
      this.authService.activeUserAccountViaPhone(this.verifyAccount).subscribe(
        result => {
          this.verifyPhoneForm.reset();
          this.alertify.success(`${result.title}<br>${result.message}`);
          this.router.navigate([`login`, this.userRegisteredDetails.userName], {
            queryParams:
              this.activateRouter.snapshot.queryParams?.redirectURL
          });
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
        }
      )
    }
  }

  /** Run Timer */

  runTimerToResendMessage() {
    this.sendCodeTimer = 60;
    let newInterv = setInterval(() => {
      this.sendCodeTimer--;
      if (this.sendCodeTimer == 0)
        clearInterval(newInterv)
    }, 1000)
  }


  resendVerifyCode() {
    this.authService.resendVerifyCode(this.verifyAccount.userId).subscribe(
      result => {
        this.alertify.success("تم ارسال كود التفعيل بنجاح")
        this.runTimerToResendMessage();
      },
      error => {
        this.alertify.error(error);
        this.isSubmitting = false;
      }
    )
   
  }
}
