export interface Charge {
  id: string;
  object: string;
  liveMode: boolean;
  apiVersion: string;
  method: string;
  status: string;
  amount: number;
  currency: string;
  threeDSecure: boolean;
  cardThreeDSecure: boolean;
  saveCard: boolean;
  merchantId: string;
  product: string;
  statementDescriptor: string;
  description: string;
  metadata: MetadataInfo;
  transaction: TransactionInfo;
  reference: ReferenceInfo;
  response: ResponseInfo;
  card: CreditCardInfo;
  receipt: ReceiptInfo;
  customer: CustomerInfo;
  merchant: MerchantInfo;
  source: SourceInfo;
  redirect: RedirectInfo;
  post: PostInfo;
}

export interface CreditCardInfo {
  object: string;
  firstSix: number;
  lastFour: number;
}

export interface CustomerInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: PhoneInfo;
}

export interface ExpiryInfo {
  period: number;
  type: string;
}

export interface MerchantInfo {
  id: string;
}

export interface MetadataInfo {
  udf1: string;
  udf2: string;
}

export interface PhoneInfo {
  countryCode: string;
  number: string;
}

export interface PostInfo {
  status: string;
  url: string;
}

export interface ReceiptInfo {
  email: boolean;
  sms: boolean;
}

export interface RedirectInfo {
  status: string;
  url: string;
}

export interface ReferenceInfo {
  transaction: string;
  order: string;
}

export interface ResponseInfo {
  code: number;
  message: string;
}

export interface SourceInfo {
  object: string;
  id: string;
}

export interface TransactionInfo {
  timezone: string;
  created: string;
  url: string;
  expiry: ExpiryInfo;
  asynchronous: boolean;
  amount: number;
  currency: string;
}

export class ChargeReturn {
    id: string;
    response: ResponseInfo;
    status: string;
    amount: number;
    currency: string;
    description: string;
    transaction: TransactionInfo;
    reference: ReferenceInfo;
    card: CreditCardInfo;
}



export enum ChargeStatus {
    Waiting = 0,
    Free = 1,
    INITIATED = 2,
    CAPTURED = 3,
    Other = 4,
}

