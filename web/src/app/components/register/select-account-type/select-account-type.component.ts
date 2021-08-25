import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountType } from 'src/app/_models/Users/user-for-register';
import { AlertifyService } from 'src/app/_helpers/Alertify';

@Component({
  selector: 'app-select-account-type',
  templateUrl: './select-account-type.component.html',
  styleUrls: []
})
export class SelectAccountTypeComponent implements OnInit {
  @Input() selectedAccountType: AccountType;
  @Output() selectedAccountTypeChange: EventEmitter<any> = new EventEmitter();
  @Output() gotoNextStep: EventEmitter<boolean> = new EventEmitter();


  public formAccountType: FormGroup;
  public AccountType = AccountType;

  constructor(private fb: FormBuilder, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.formAccountType = this.fb.group({
      accountType: [this.selectedAccountType, []]
    });
  }

  gotoNext() {
    if (this.formAccountType.controls.accountType.value > 0) {
      this.gotoNextStep.emit(true);
      this.selectedAccountTypeChange.emit(this.formAccountType.controls.accountType.value);
    } else {
      this.alertify.warning('تحقق من اختيار نوع الحساب قبل المتابعة');
    }
  }
}
