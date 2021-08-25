import { Component, OnInit } from '@angular/core';
import { PackageCategory, SubscriptionPackage, SubscriptionPackageReturn } from 'src/app/_models/settings/subscription-package';
import { SubscriptionPackagesService } from 'src/app/_services/settings/subscription-packages.service';

@Component({
  selector: 'app-pricing-preview-businesses',
  templateUrl: './pricing-preview-businesses.component.html'
})
export class PricingPreviewBusinessesComponent implements OnInit {
  isLoadingData = true;
  subscriptionPackages: SubscriptionPackage[];

  constructor(private subscriptionPackagesService: SubscriptionPackagesService) { }

  ngOnInit(): void {
    this.getAllSubscriptionPackages();
  }

  getAllSubscriptionPackages() {
    this.isLoadingData = true;
    this.subscriptionPackagesService.getSubscriptionPackages(PackageCategory.Business).subscribe(
      (res: SubscriptionPackageReturn[]) => {
        this.subscriptionPackages = res;
      },
      error => {
        // this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption));
        this.isLoadingData = false;
      },
      () => { this.isLoadingData = false; }
    );
  }

  refreshData() {
    this.getAllSubscriptionPackages();
    // this.alertify.info('تم تحديث البيانات');
  }


}
