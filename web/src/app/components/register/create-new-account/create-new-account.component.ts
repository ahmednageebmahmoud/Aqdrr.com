import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/users/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService, ConfirmResult } from 'src/app/_helpers/Alertify';
import { AppSettingsService } from 'src/app/_services/settings/app-settings.service';
import { UserForRegister } from 'src/app/_models/Users/user-for-register';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: []
})
export class CreateNewAccountComponent implements OnInit {
  @Output() backToPreviousStep: EventEmitter<boolean> = new EventEmitter();
  @Input() registerAccount: UserForRegister;
  @Output() registerAccountChange: EventEmitter<UserForRegister> = new EventEmitter();

  registerForm: FormGroup;
  acceptTrems: boolean = false;
  isSubmitting: boolean = false;
  citiesList: KeyValuePairResource[] = [];
  redirectURL: string;
  isSuucessRegister: boolean;
  constructor(private router: Router, private authService: AuthService,
    private alertify: AlertifyService,
    private appSettingsService: AppSettingsService,
    private activateRouter: ActivatedRoute,
    private fb: FormBuilder,
    private locationsService: LocationsService) { }


  ngOnInit(): void {
    this.redirectURL = this.activateRouter.snapshot.queryParams?.redirectURL;

    // this.router.navigate([`verifyPhone`], {
    //   queryParams: {
    //     redirectURL: this.redirectURL
    //   },
    //   state: {
    //     ...{
    //       email: "sezer.info.0@gmail.com",
    //       firstName: "Ahmed",
    //       fullName: "Ahmed Mahmoud",
    //       gender: 1,
    //       id: 25,
    //       lastTokenPhoneDate: "2021-08-20T10:21:02.6206195-07:00",
    //       phoneNumber: "966551025249",
    //       userName: "966551025249"
    //     } as any
    //   }
    // });




    // if (isDevMode)
    //   this.registerAccount = Object.assign(this.registerAccount, JSON.parse('{"gender":false,"firstName":"محمد","lastName":"الصيلمي","phoneNumber":"0552338234","email":"me_mo_ry_123@hotmail.com","cityId":"56","password":"password"}'));
    this.createRegisterForm();
    this.loadCitiesList();
  }

  loadCitiesList() {
    this.locationsService.getCitiesList().subscribe(
      result => { this.citiesList = result; },
      error => { this.alertify.error(error); }
    );
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      accountType: [this.registerAccount.accountType, Validators.required],
      gender: [this.registerAccount.gender],
      firstName: [this.registerAccount.firstName, [Validators.required, Validators.pattern(RegularExpression.ArOrEnLetters)]],
      lastName: [this.registerAccount.lastName, [Validators.required, Validators.pattern(RegularExpression.ArOrEnLetters)]],
      phoneNumber: [this.registerAccount.phoneNumber, [Validators.required, Validators.pattern(RegularExpression.SaudiPhone)]],
      email: [this.registerAccount.email, [Validators.required, Validators.pattern(RegularExpression.Email)]],
      cityId: [this.registerAccount.cityId, Validators.required],
      password: [this.registerAccount.password, [Validators.required, Validators.minLength(8), Validators.maxLength(20),
      Validators.pattern(RegularExpression.Password)]],
    });
  }

  get addValidator() { return this.registerForm.controls; }

  changeGender(selectedGender: boolean) {
    this.registerForm.controls.gender.setValue(selectedGender);
  }

  register() {
    if (this.registerForm.valid) {
      if (!this.acceptTrems) {
        this.acceptTheTrems();
        return;
      }
      this.registerAccount = Object.assign({}, this.registerForm.value);
      this.isSubmitting = true;
      this.authService.register(this.registerAccount).subscribe(
        userRegisteredDetails => {
          this.alertify.success('تم الإشتراك بنجاح');
          this.registerForm.reset();

          this.isSuucessRegister = true;
          setTimeout(() => {
            this.router.navigate([`verifyPhone`], {
              state: { ...userRegisteredDetails }, queryParams: {
                redirectURL: this.redirectURL
              }
            });
          }, (3 * 1000));
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
        },
        // () => {
        //   this.authService.login(this.registerAccount).subscribe(
        //     () => { this.router.navigate(['/members']); }
        //   )
        // }
      )
    }
  }

  acceptTheTremsChange(values: any) {
    this.acceptTrems = values.currentTarget.checked;
  }

  async acceptTheTrems() {
    var trems = await this.appSettingsService.readHtmlFile('terms').toPromise();
    const confirm = await this.alertify.tremsConfirm('الشروط والأحكام', trems);
    if (confirm === ConfirmResult.Ok) {
      this.acceptTrems = true;
    } else {
      this.acceptTrems = false;
    }
  }

  cancel() {
    this.registerAccountChange.emit(Object.assign(this.registerAccount, this.registerForm.value));
    this.backToPreviousStep.emit(false);
  }

}
