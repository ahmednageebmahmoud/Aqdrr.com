import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

//services
import { BusinessAccountsService } from 'src/app/_services/users/business-accounts.service';
import { MemberProfileResolver } from 'src/app/_resolvers/Users/member-profile.resolver';
import { EditMemberProfileResolver } from './resolvers/edit-member-profile.resolver';
import { MessageResolver } from 'src/app/_resolvers/chats/message.resolver';
import { JobOffersService } from '../jobs/_services/job-offers.service';

// component
import { ProfileComponent } from './profile.component';

import { MemberContactComponent } from './shared/member-contact/member-contact.component';
import { SocialMediaComponent } from './shared/member-contact/social-media/social-media.component';

import { PersonalDetailsComponent } from './shared/personal-details/personal-details.component';
import { LanguageSkillsComponent } from './shared/language-skills/language-skills.component';
import { PersonalSkillsComponent } from './jobs-searcher/skills/personal-skills/personal-skills.component';
import { GeneralSkillsComponent } from './jobs-searcher/skills/general-skills/general-skills.component';
import { HoppiesComponent } from './jobs-searcher/skills/hoppies/hoppies.component';
import { EducationDetailsComponent } from './jobs-searcher/education-details/education-details.component';

import { BusinessAccountProfileComponent } from './business/business-account-profile/business-account-profile.component';
import { BusinessAccountDetailsComponent } from './business/business-account-details/business-account-details.component';
import { JobsSearcherProfileComponent } from './jobs-searcher/jobs-searcher-profile/jobs-searcher-profile.component';
import { ProfileStarsComponent } from './shared/profile-stars/profile-stars.component';
import { ProfileImageComponent } from './shared/profile-image/profile-image.component';
import { EditBusinessAccountComponent } from './business/edit-business-account/edit-business-account.component';
import { SinceProfileComponent } from './shared/since-profile/since-profile.component';
import { BusinessCountersComponent } from './business/business-counters/business-counters.component';
import { JobsSearcherCountersComponent } from './jobs-searcher/jobs-searcher-counters/jobs-searcher-counters.component';
import { EditJobsSearcherComponent } from './jobs-searcher/edit-jobs-searcher/edit-jobs-searcher.component';
import { JobInterestsComponent } from './jobs-searcher/job-interests/job-interests.component';
import { TaskerProfileComponent } from './taskers/tasker-profile/tasker-profile.component';
import { PortfoliosListComponent } from './taskers/portfolios/portfolios-list/portfolios-list.component';
import { PortfolioDetailsComponent } from './taskers/portfolios/portfolio-details/portfolio-details.component';
import { CreatePortfolioComponent } from './taskers/portfolios/create-portfolio/create-portfolio.component';
import { ModifyTaskerProfileComponent } from './taskers/modify-tasker-profile/modify-tasker-profile.component';
import { UserTasksListComponent } from './taskers/user-tasks/user-tasks-list/user-tasks-list.component';
import { NewUserTaskModalComponent } from './taskers/user-tasks/new-user-task-modal/new-user-task-modal.component';
import { MessagesListComponent } from './shared/chats/messages-list/messages-list.component';
import { ConversationBoxComponent } from './shared/chats/conversation-box/conversation-box.component';
import { RatingsHistoryComponent } from './shared/ratings-history/ratings-history.component';
import { UserActivityComponent } from './shared/user-activity/user-activity.component';
import { ModifyMyTaskComponent } from './taskers/user-tasks/modify-my-task/modify-my-task.component';
import { ModifyPortfolioComponent } from './taskers/portfolios/modify-portfolio/modify-portfolio.component';
import { VisitorProfileComponent } from './visitor/visitor-profile/visitor-profile.component';
import { ModifyVisitorProfileComponent } from './visitor/modify-visitor-profile/modify-visitor-profile.component';
import { RatingAndReviewsListComponent } from './shared/ratings/rating-and-reviews-list/rating-and-reviews-list.component';
import { RatingRowDetailsComponent } from './shared/ratings/rating-row-details/rating-row-details.component';
import { ChangeUserPasswordComponent } from './shared/change-user-password/change-user-password.component';
import { BusinessAccountBalanceComponent } from './business/business-account-balance/business-account-balance.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalDetailsComponent,

    LanguageSkillsComponent,
    PersonalSkillsComponent,
    GeneralSkillsComponent,
    MemberContactComponent,
    HoppiesComponent,
    EducationDetailsComponent,
    SocialMediaComponent,
    BusinessAccountProfileComponent,
    BusinessAccountDetailsComponent,
    JobsSearcherProfileComponent,
    ProfileStarsComponent,
    ProfileImageComponent,
    EditBusinessAccountComponent,
    SinceProfileComponent,
    BusinessCountersComponent,
    JobsSearcherCountersComponent,
    EditJobsSearcherComponent,
    JobInterestsComponent,
    PortfoliosListComponent,
    PortfolioDetailsComponent,
    CreatePortfolioComponent,
    TaskerProfileComponent,
    ModifyTaskerProfileComponent,
    UserTasksListComponent,
    NewUserTaskModalComponent,
    MessagesListComponent,
    ConversationBoxComponent,
    RatingsHistoryComponent,
    UserActivityComponent,
    ModifyMyTaskComponent,
    ModifyPortfolioComponent,
    VisitorProfileComponent,
    ModifyVisitorProfileComponent,
    RatingAndReviewsListComponent,
    RatingRowDetailsComponent,
    ChangeUserPasswordComponent,
    BusinessAccountBalanceComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
  providers: [
    MemberProfileResolver,
    BusinessAccountsService,
    EditMemberProfileResolver,
    MessageResolver,
    JobOffersService,
  ],
})
export class ProfileModule { }
