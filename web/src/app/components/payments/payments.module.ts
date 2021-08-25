import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PaymentsRoutingModule } from './payments-routing.module';

// Components
import { TestPaymentGateComponent } from './test-payment-gate/test-payment-gate.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './invoices/invoice-details/invoice-details.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentResultComponent } from './payment-result/payment-result.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { FreeSubscriptionResultComponent } from './free-subscription-result/free-subscription-result.component';

@NgModule({
  declarations: [
    TestPaymentGateComponent,
    CheckoutComponent,
    InvoiceListComponent,
    InvoiceDetailsComponent,
    PaymentSuccessComponent,
    PaymentResultComponent,
    PaymentFailedComponent,
    FreeSubscriptionResultComponent,
  ],
  imports: [
    SharedModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
