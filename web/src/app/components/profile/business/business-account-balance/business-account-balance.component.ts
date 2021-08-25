import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountEmploymentBagsBalance } from 'src/app/components/jobs/_models/job-offer';
import { JobOffersService } from 'src/app/components/jobs/_services/job-offers.service';

@Component({
  selector: 'app-business-account-balance',
  templateUrl: './business-account-balance.component.html',
  styleUrls: ['./business-account-balance.component.css']
})
export class BusinessAccountBalanceComponent implements OnInit {
  @Output() changeTab: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isCurrentUserProfile: boolean;
  @Input() isShortDetails: boolean = false;
  accountBalance: AccountEmploymentBagsBalance;
  constructor(private jobOffersService :JobOffersService) { }

  ngOnInit(): void {
    this.loadAccountBalance();
  }

  loadAccountBalance() {
    this.jobOffersService.getCurrentAccountJobOffersBalance().subscribe(
      (result: AccountEmploymentBagsBalance) => {
         this.accountBalance = result;
      },
      error => {
        // this.alertify.error(error);
      }
    );
  }

  showAccountBalanceTab() {
    this.changeTab.emit(true);
  }

}
