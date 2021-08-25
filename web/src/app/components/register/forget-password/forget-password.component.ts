import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { RequestResetPassword, UserForRegister, UserRegisteredDetails, VerifyAccount } from 'src/app/_models/Users/user-for-register';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { AuthService } from 'src/app/_services/users/auth.service';
declare var $: any;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../../../../assets/css/login.css' ]
})
export class ForgetPasswordComponent implements OnInit {
  requestResetPasswordForm: FormGroup;
  isSubmitting: boolean = false;
  citiesList: KeyValuePairResource[] = [];
  @Output('onBackToLogin') onBackToLogin=new EventEmitter();

  constructor(private router: Router, private authService: AuthService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private locationsService: LocationsService) { }


  ngOnInit(): void {
    this.createResetPasswordForm();
    this.loadCitiesList();
  }

  loadCitiesList() {
    this.locationsService.getCitiesList().subscribe(
      result => { this.citiesList = result; },
      error => { this.alertify.error(error); }
    );
  }

  createResetPasswordForm() {
    this.requestResetPasswordForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(RegularExpression.SaudiPhone)]],
      cityId: [null, Validators.required],
    });
  }

  get addValidator() { return this.requestResetPasswordForm.controls; }


  requestResetPassword() {
    if (this.requestResetPasswordForm.valid) {
      let requestResetPassword = {} as RequestResetPassword;
      Object.assign(requestResetPassword, this.requestResetPasswordForm.value);
      this.isSubmitting = true;
      this.authService.restoreAccount(requestResetPassword).subscribe(
        message => {
          this.alertify.info(message.message);
          this.requestResetPasswordForm.reset();
          this.router.navigate([`reset`, 'forgottenPassword'], { state: { ...requestResetPassword } });
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
        },
      )
    }
  }

  flipCard() {
    this.onBackToLogin.emit();
    // const flipCard = $('.flip-card');
    // var className = '';
    // if (flipCard.hasClass('flipped')) {
    //   className = '.flip-card-front div';
    //   $('.flip-card-back').css({ 'pointer-events': 'none', 'opacity': '0' });
    //   $('.flip-card-front').css({ 'pointer-events': 'auto', 'opacity': '1' });
    // } else {
    //   className = '.flip-card-back div';
    //   $('.flip-card-front').css({ 'pointer-events': 'none', 'opacity': '0' });
    //   $('.flip-card-back').css({ 'pointer-events': 'auto', 'opacity': '1' });
    // }

    // flipCard.toggleClass('flipped')
    // const top = $(className).offset().top;
    // const bottom = top + $(className).outerHeight();
    // console.log(bottom);
    // $('#login').css('min-height', bottom + 'px');
  }


}
