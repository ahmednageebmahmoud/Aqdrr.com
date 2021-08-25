import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AccountType, UserForRegister } from 'src/app/_models/Users/user-for-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../assets/css/login.css'],
  animations: [
    // trigger('EnterLeave', [
    //   state('flyIn', style({ transform: 'translateX(0)' })),
    //   transition(':enter', [
    //     style({ transform: 'translateX(-100%)' }),
    //     animate('0.5s 300ms ease-in')
    //   ]),
    //   transition(':leave', [
    //     animate('0.2s ease-out', style({ transform: 'translateX(100%)' }))
    //   ])
    // ])
    trigger('EnterLeave', [
      state('void', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(':enter', animate(500))
    ])
  ]
})
export class RegisterComponent implements OnInit {
  showCreateAccountForm: boolean = false;
  public registerAccountFill = <UserForRegister>{ accountType: AccountType.visitorAccount, gender: false, cityId: 0 };

  ngOnInit(): void {
    this.showCreateAccountForm = false;
  }

  toggleCreateAccount(status: boolean) {
    this.showCreateAccountForm = status;
  }

  // cancelRegister(mode: boolean) {
  //   this.showCreateAcount = mode;
  // }


}
