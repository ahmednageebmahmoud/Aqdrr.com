import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//services
import { MemberProfileResolver } from 'src/app/_resolvers/Users/member-profile.resolver';
import { EditMemberProfileResolver } from './resolvers/edit-member-profile.resolver';


//Components
import { ProfileComponent } from './profile.component';
import { EditBusinessAccountComponent } from './business/edit-business-account/edit-business-account.component';
import { EditJobsSearcherComponent } from './jobs-searcher/edit-jobs-searcher/edit-jobs-searcher.component';
import { ModifyTaskerProfileComponent } from './taskers/modify-tasker-profile/modify-tasker-profile.component';
import { CreatePortfolioComponent } from './taskers/portfolios/create-portfolio/create-portfolio.component';
import { MessagesListComponent } from './shared/chats/messages-list/messages-list.component';
import { MessageResolver } from 'src/app/_resolvers/chats/message.resolver';
import { PortfolioDetailsComponent } from './taskers/portfolios/portfolio-details/portfolio-details.component';
import { ModifyPortfolioComponent } from './taskers/portfolios/modify-portfolio/modify-portfolio.component';
import { ModifyVisitorProfileComponent } from './visitor/modify-visitor-profile/modify-visitor-profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, resolve: { user: MemberProfileResolver } },
  { path: 'messages', component: MessagesListComponent, resolve: { messagesList: MessageResolver }  },
  { path: ':userId', component: ProfileComponent, resolve: { user: MemberProfileResolver } },
  { path: 'business/edit', component: EditBusinessAccountComponent, resolve: { user: EditMemberProfileResolver } },
  { path: 'searcher/edit', component: EditJobsSearcherComponent, resolve: { user: EditMemberProfileResolver } },
  { path: 'tasker/edit', component: ModifyTaskerProfileComponent, resolve: { user: EditMemberProfileResolver } },
  { path: 'visitor/edit', component: ModifyVisitorProfileComponent, resolve: { user: EditMemberProfileResolver } },
  { path: 'portfolio/new', component: CreatePortfolioComponent},
  { path: 'portfolio/:portfolioId', component: PortfolioDetailsComponent},
  { path: 'portfolio/edit/:portfolioId', component: ModifyPortfolioComponent},
  { path: 'portfolio/:portfolioId/:title', component: PortfolioDetailsComponent},
  { path: ':userId/portfolio/:portfolioId', component: PortfolioDetailsComponent},
  { path: ':userId/portfolio/:portfolioId/:title', component: PortfolioDetailsComponent},
  { path: ':userId/:username', component: ProfileComponent, resolve: { user: MemberProfileResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
