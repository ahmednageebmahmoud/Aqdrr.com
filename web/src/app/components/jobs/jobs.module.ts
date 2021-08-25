import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JobsRoutingModule } from './jobs-routing.module';

//services
import { JobOffersService } from './_services/job-offers.service';
import { JobOfferBalanceResolver } from 'src/app/_resolvers/job-offers/job-offer-balance.resolver';

// component
import { JobsOffersComponent } from './jobs-offers/jobs-offers.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ModifyOfferComponent } from './modify-offer/modify-offer.component';
import { LastJobsOffersComponent } from './last-jobs-offers/last-jobs-offers.component';
import { JobOfferRowComponent } from './job-offer-row/job-offer-row.component';
import { ManageJobsOffersComponent } from './manage-jobs-offers/manage-jobs-offers.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplicantRowComponent } from './applicants/applicant-row/applicant-row.component';
import { SuggestApplicantRowComponent } from './applicants/suggest-applicant-row/suggest-applicant-row.component';
import { ListOfApplicantsComponent } from './list-of-applicants/list-of-applicants.component';
import { UserJobsRequestsComponent } from './user-jobs-requests/user-jobs-requests.component';
import { RatingTheWorkerComponent } from './rating/rating-the-worker/rating-the-worker.component';
import { RatingTheEmployerComponent } from './rating/rating-the-employer/rating-the-employer.component';

@NgModule({
  declarations: [
    JobsOffersComponent,
    AddOfferComponent,
    ModifyOfferComponent,
    LastJobsOffersComponent,
    JobOfferRowComponent,
    ManageJobsOffersComponent,
    JobDetailsComponent,
    ApplicantRowComponent,
    SuggestApplicantRowComponent,
    ListOfApplicantsComponent,
    UserJobsRequestsComponent,
    RatingTheWorkerComponent,
    RatingTheEmployerComponent,
  ],
  imports: [
    SharedModule,
    JobsRoutingModule
  ],
  providers: [
    JobOffersService,
    JobOfferBalanceResolver,
  ],
  exports: [
    LastJobsOffersComponent,
  ],
})
export class JobsModule { }
