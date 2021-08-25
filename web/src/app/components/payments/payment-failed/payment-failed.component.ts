import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.component.html',
  styleUrls: []
})
export class PaymentFailedComponent implements OnInit {
  @Input() errorMessage: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
