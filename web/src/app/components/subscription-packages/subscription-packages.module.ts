import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionPackagesRoutingModule } from './subscription-packages-routing.module';

//Component
import { SubscriptionPackageListComponent } from './subscription-package-list/subscription-package-list.component';
import { SubscriptionPackageDetailsComponent } from './subscription-package-details/subscription-package-details.component';
import { ModifySubscriptionPackageComponent } from './modify-subscription-package/modify-subscription-package.component';

@NgModule({
  declarations: [
    SubscriptionPackageListComponent,
    SubscriptionPackageDetailsComponent,
    ModifySubscriptionPackageComponent,
  ],
  imports: [
    SharedModule,
    SubscriptionPackagesRoutingModule
  ]
})
export class SubscriptionPackagesModule { }
