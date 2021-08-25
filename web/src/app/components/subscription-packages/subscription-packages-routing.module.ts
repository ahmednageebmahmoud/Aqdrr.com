import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SubscriptionPackageListComponent } from './subscription-package-list/subscription-package-list.component';
import { SubscriptionPackageDetailsComponent } from './subscription-package-details/subscription-package-details.component';


const routes: Routes = [
  { path: '', component: SubscriptionPackageListComponent },
  { path: ':subscriptionPackageId/details', component: SubscriptionPackageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionPackagesRoutingModule { }
