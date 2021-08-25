import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOfferBalanceResolver } from 'src/app/_resolvers/job-offers/job-offer-balance.resolver';

import { AddOfferComponent } from './add-offer/add-offer.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsOffersComponent } from './jobs-offers/jobs-offers.component';
import { ListOfApplicantsComponent } from './list-of-applicants/list-of-applicants.component';
import { ManageJobsOffersComponent } from './manage-jobs-offers/manage-jobs-offers.component';
import { ModifyOfferComponent } from './modify-offer/modify-offer.component';
import { UserJobsRequestsComponent } from './user-jobs-requests/user-jobs-requests.component';



const routes: Routes = [
  { path: '', component: JobsOffersComponent },
  { path: 'new', component: AddOfferComponent, resolve: { employmentBagsBalance: JobOfferBalanceResolver } },
  { path: 'manage', component: ManageJobsOffersComponent },
  { path: 'all', component: JobsOffersComponent },
  { path: 'applicants', component: ListOfApplicantsComponent },
  { path: 'my/requests', component: UserJobsRequestsComponent },
  { path: 'details/:offerId', component: JobDetailsComponent },
  { path: 'details/:offerId/:title', component: JobDetailsComponent },
  { path: 'edit/:offerId', component: ModifyOfferComponent, resolve: { jobOfferBalance: JobOfferBalanceResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
