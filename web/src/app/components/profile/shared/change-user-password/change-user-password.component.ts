import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { ChangeUserPassword } from 'src/app/_models/Users/user-for-register';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: []
})
export class ChangeUserPasswordComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef
  @Output() updatedSuccessfully: EventEmitter<boolean> = new EventEmitter<boolean>();
  changeUserPasswordForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService, private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initCreateForm();
  }

  initCreateForm() {
    this.changeUserPasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(RegularExpression.Password)]],
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(RegularExpression.Password)]],
    });
  }

  get addValidator() { return this.changeUserPasswordForm.controls; }

  updateCurrentUserPassword() {

    if (this.changeUserPasswordForm.valid) {
      this.isSubmitting = true;
      this.changeUserPasswordForm.disable();
      let changeUserPassword = {} as ChangeUserPassword;
      Object.assign(changeUserPassword, this.changeUserPasswordForm.value);
      if (changeUserPassword.currentPassword === changeUserPassword.newPassword) {
        this.isSubmitting = false;
        this.changeUserPasswordForm.enable();
        this.alertify.warning('فضلاً تحقق من أن كلمة المرور الحالية والجديدة غير متطابقتين');
        return;
      }
      this.authService.changeCurrentUserPassword(changeUserPassword).subscribe(
        returnMessage => {
          this.alertify.success(returnMessage.message);
          this.updatedSuccessfully.emit(true);
          this.closeModal.nativeElement.click();
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
          this.changeUserPasswordForm.enable();
          this.updatedSuccessfully.emit(false);
        },
        () => { this.isSubmitting = false; this.changeUserPasswordForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.changeUserPasswordForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }
}