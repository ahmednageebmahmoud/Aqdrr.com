export class SubscriptionPackage {
  id: number;
  createdBy: number;
  updatedBy: number;
  updatedDate: Date | string;
  createdDate: Date | string;
  orderNumber: number;
  category: PackageCategory;
  categoryDescription: string;
  arTitle: string;
  enTitle: string;
  description: string;
  isFree: boolean;
  oldPrice: number;
  price: number;
  priceSaudiRiyal: number;
  totalDays: number;
  employmentBags: number;
  color: PackageColor;
  colorDescription: string;
  isEnabled: boolean;
}

export interface SubscriptionPackageUpdate {
    id: number;
    color: number;
    arTitle: string;
    enTitle: string;
    description: string;
    isFree: boolean;
    oldPrice: number;
    price: number;
    priceSaudiRiyal: number;
    totalDays: number;
    employmentBags: number;
    isEnabled: boolean;
}


export interface SubscriptionPackageReturn {
  id: number;
  createdBy: number;
  updatedBy: number;
  updatedDate: Date | string;
  createdDate: Date | string;
  orderNumber: number;
  category: PackageCategory;
  categoryDescription: string;
  title: string;
  arTitle: string;
  enTitle: string;
  description: string;
  isFree: boolean;
  oldPrice: number;
  price: number;
  priceSaudiRiyal: number;
  totalDays: number;
  employmentBags: number;
  color: PackageColor;
  colorDescription: string;
  colorClass: string;
  isEnabled: boolean;
}



export enum PackageCategory {
  None = 0,
  ServiceProvider = 1,
  Business = 2,
}

export enum PackageColor {
  None = 0,
  Green = 1,
  Blue = 2,
  Pink = 3,
  Yellow = 4,
}
