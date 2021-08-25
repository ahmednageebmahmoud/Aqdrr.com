import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { UserRegisteredDetails, VerifyAccount, Gender, RequestResetPassword, ResetForgottenPassword } from 'src/app/_models/Users/user-for-register';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-reset-forgotten-password',
  templateUrl: './reset-forgotten-password.component.html',
  styleUrls: ['../../../../assets/css/login.css']
})
export class ResetForgottenPasswordComponent implements OnInit {
  requestedResetPassword: RequestResetPassword;
  isSubmitting: boolean = false;
  resetForgottenPasswordForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService,
    private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    const stateUserDetails = navigation.extras.state as RequestResetPassword;
    if (stateUserDetails != undefined && stateUserDetails?.phoneNumber)
      this.requestedResetPassword = stateUserDetails;
    else
      this.router.navigate([`login`]);
  }


  ngOnInit(): void {
    if (this.requestedResetPassword?.phoneNumber == undefined)
      this.router.navigate([`error`], { state: { error: 'خطأ في العثور على بيانات حساب المستخدم ' } });
    this.createVerifyPhoneForm();
  }

  createVerifyPhoneForm() {
    this.resetForgottenPasswordForm = this.fb.group({
      phoneNumber: [this.requestedResetPassword?.phoneNumber, [Validators.required, Validators.pattern(RegularExpression.SaudiPhone)]],
      verifyCode: ['', [Validators.required, Validators.minLength(6), Validators.pattern(RegularExpression.VerifyPhoneNumberCode)]],
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20),
        Validators.pattern(RegularExpression.Password)]],
    });
  }

  get addValidator() { return this.resetForgottenPasswordForm.controls; }


  isFemaleAccount(): boolean {
    // if (this.requestedResetPassword?.gender as Gender === Gender.female as Gender) {
    //   return true;
    // } else { return false; }
    return false;
  }


  resetForgottenPasswordAccount() {
    if (this.resetForgottenPasswordForm.valid) {
      let resetForgottenPassword = {} as ResetForgottenPassword;
      Object.assign(resetForgottenPassword, this.resetForgottenPasswordForm.value);
      this.isSubmitting = true;
      this.authService.resetForgottenPasswordAccount(resetForgottenPassword).subscribe(
        result => {
          this.resetForgottenPasswordForm.reset();
          this.alertify.success(`${result.title}<br>${result.message}`);
          this.router.navigate([`login`, this.requestedResetPassword?.phoneNumber]);
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
        }
      )
    }
  }


}
