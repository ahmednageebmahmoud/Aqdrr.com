import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TestPaymentGateComponent } from './test-payment-gate/test-payment-gate.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './invoices/invoice-details/invoice-details.component';
import { PaymentResultComponent } from './payment-result/payment-result.component';
import { FreeSubscriptionResultComponent } from './free-subscription-result/free-subscription-result.component';


const routes: Routes = [
  { path: 'test', component: TestPaymentGateComponent },
  { path: 'invoices/list', component: InvoiceListComponent },
  { path: 'invoices/:invoiceId/details', component: InvoiceDetailsComponent },
  { path: 'checkout/free-subscription/:invoiceId', component: FreeSubscriptionResultComponent },
  { path: 'checkout/gateway-result', component: PaymentResultComponent },
  { path: 'checkout/:packageId', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
