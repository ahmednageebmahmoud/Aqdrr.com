import { ChargeReturn, ChargeStatus } from "../payments/tab-company";
import { SubscriptionPackageReturn } from "../settings/subscription-package";
import { UserIdAndNameDto } from "../Users/User";

export class Invoice {
}


export interface PaymentInvoice {
  id: number;
  updatedDate: Date | string;
  createdDate: Date | string;
  subscriptionPackageId: number;
  subscriptionPackage: SubscriptionPackageReturn;
  packagePrice: number;
  employmentBags: number;
  employmentBagsBalance: number;
  totalDays: number;
  isExpiry: boolean;
  expiryDate: Date | string;
  amount: number;
  currency: string;
  paymentDate: Date | string;
  description: string;
  status: PaymentStatus;
  statusDescription: string;
  chargeId: string;
  redirectUrl: string;
  receiptUrl: string;
  chargeStatus: ChargeStatus;
  chargeStatusDescription: string;
  isPaid: boolean;
  userId: number;
  subscriber: UserIdAndNameDto;
  chargeResponsiveCode: string;
  chargeResponsiveMessage: string;
}

export class SubscriptionPackageInvoice {
  id: number;
  subscriptionPackageId: number;
  subscriptionPackage: SubscriptionPackageReturn;
  employmentBags: number;
  employmentBagsBalance: number;
  totalDays: number;
  isExpiry: boolean;
  expiryDate: Date | string;
  paymentDate: Date | string;
  description: string;
  status: PaymentStatus;
  statusDescription: string;
  chargeStatus: ChargeStatus;
  chargeStatusDescription: string;
  chargeStatusName: string;
  isPaid: boolean;
  userId: number;
  chargeResponsiveCode: string;
  chargeResponsiveMessage: string;
}

export interface PaymentsResult {
  chargeReturn: ChargeReturn;
  paymentInvoice: PaymentInvoice;

}

export enum PaymentStatus {
    None = 0,
    Waiting = 1,
    Confirmed = 2,
    Failed = 3,
}
