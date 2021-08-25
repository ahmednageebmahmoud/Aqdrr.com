import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PageNotFoundComponent } from './components/custom-pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/register/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyPhoneNumberComponent } from './components/register/verify-phone-number/verify-phone-number.component';
import { PageErrorComponent } from './components/custom-pages/page-error/page-error.component';
import { AuthGuard } from './_guards/auth.guard';
import { LookingForWorkComponent } from './components/pages/looking-for-work/looking-for-work.component';
import { LookingForStaffComponent } from './components/pages/looking-for-staff/looking-for-staff.component';
import { TremsComponent } from './components/pages/trems/trems.component';
import { RandomServicesListComponent } from './components/tasks/random-services-list/random-services-list.component';
import { ResetForgottenPasswordComponent } from './components/register/reset-forgotten-password/reset-forgotten-password.component';
import { NotificationsComponent } from './components/shared/notifications/notifications.component';
import { SubscriptionPackagesBusinessesComponent } from './components/pages/subscription-packages-businesses/subscription-packages-businesses.component';
import { SubscriptionPackagesTaskersComponent } from './components/pages/subscription-packages-taskers/subscription-packages-taskers.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { JobsListComponent } from './components/pages/jobs-list/jobs-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:username', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verifyPhone', component: VerifyPhoneNumberComponent },
  { path: 'reset/forgottenPassword', component: ResetForgottenPasswordComponent },
  { path: 'looking-for-work', component: LookingForWorkComponent },
  { path: 'looking-for-staff', component: LookingForStaffComponent },
  { path: 'trems', component: TremsComponent },
  { path: 'taskers/list', component: RandomServicesListComponent },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'taskers/packages', component: SubscriptionPackagesTaskersComponent, canActivate: [AuthGuard] },
  { path: 'taskers/packages/:message', component: SubscriptionPackagesTaskersComponent, canActivate: [AuthGuard] },
  { path: 'businesses/packages', component: SubscriptionPackagesBusinessesComponent, canActivate: [AuthGuard] },
  { path: 'businesses/packages/:message', component: SubscriptionPackagesBusinessesComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  // { path: 'jobs-list', component: JobsListComponent },
  // { path: 'jobs-list/:categoryId/:categoryName', component: JobsListComponent },
  {
    path: 'profile', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'jobs', runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: 'orders', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    loadChildren: () => import('./components/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'admin', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], // data: { roles: ['Admin', 'Moderator'] },
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'settings', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule)
  },

  {
    path: 'subscription-packages', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    loadChildren: () => import('./components/subscription-packages/subscription-packages.module').then(m => m.SubscriptionPackagesModule)
  },
  {
    path: 'payments', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    loadChildren: () => import('./components/payments/payments.module').then(m => m.PaymentsModule)
  },

  { path: 'error', component: PageErrorComponent, pathMatch: 'full', data: { title: 'Common.Pages.ErrorPage' } },
  { path: '404', component: PageNotFoundComponent, pathMatch: 'full', data: { title: 'Common.Pages.PageNotFound' } },
  { path: 'tickets', loadChildren: () => import('./components/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: '**', redirectTo: '404' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'legacy',
    useHash: false,
    anchorScrolling: 'enabled',
  
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
