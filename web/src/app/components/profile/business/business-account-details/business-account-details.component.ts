import { Component, OnInit, Input } from '@angular/core';
import { BusinessAccountResult } from 'src/app/_models/Users/business-account';

@Component({
  selector: 'app-business-account-details',
  templateUrl: './business-account-details.component.html',
  styleUrls: []
})
export class BusinessAccountDetailsComponent implements OnInit {
  @Input('BusinessAccountData') accountData: BusinessAccountResult;
  constructor() { }

  ngOnInit(): void {
  }

}
