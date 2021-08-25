import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { JobsModule } from './components/jobs/jobs.module';
import { TasksModule } from './components/tasks/tasks.module';
import { TicketsModule } from './components/tickets/tickets.module';

// npm package
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

//helper
import { DbKeysService } from './_helpers/db-keys';
import { environment } from 'src/environments/environment';

// Components
import { AppComponent } from './components/app.component';

import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';


import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { NavGlowButtonsComponent } from './components/home/nav-glow-buttons/nav-glow-buttons.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ClientsComponent } from './components/home/clients/clients.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { OurServicesComponent } from './components/home/our-services/our-services.component';
import { AboutCountComponent } from './components/home/about-count/about-count.component';
import { LoginComponent } from './components/register/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectAccountTypeComponent } from './components/register/select-account-type/select-account-type.component';
import { CreateNewAccountComponent } from './components/register/create-new-account/create-new-account.component';
import { VerifyPhoneNumberComponent } from './components/register/verify-phone-number/verify-phone-number.component';
import { TranslateLanguageLoader } from './_helpers/app-translation';
import { LookingForWorkComponent } from './components/pages/looking-for-work/looking-for-work.component';
import { LookingForStaffComponent } from './components/pages/looking-for-staff/looking-for-staff.component';
import { TremsComponent } from './components/pages/trems/trems.component';
import { ForgetPasswordComponent } from './components/register/forget-password/forget-password.component';
import { ResetForgottenPasswordComponent } from './components/register/reset-forgotten-password/reset-forgotten-password.component';
import { LazyImgDirective } from './_directives/lazy-img.directive';
import { PricingPreviewTaskersComponent } from './components/home/pricing-preview-taskers/pricing-preview-taskers.component';
import { SubscriptionPackagesTaskersComponent } from './components/pages/subscription-packages-taskers/subscription-packages-taskers.component';
import { SubscriptionPackagesBusinessesComponent } from './components/pages/subscription-packages-businesses/subscription-packages-businesses.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AqdrrComponent } from './components/home/aqdrr/aqdrr.component';
import { AppRoutingModule } from './app-routing.module';
import { PricingPreviewsComponent } from './components/home/pricing-previews/pricing-previews.component';
import { PricingPreviewBusinessesComponent } from './components/home/pricing-preview-businesses/pricing-preview-businesses.component';
import { JobsListComponent } from './components/pages/jobs-list/jobs-list.component';
import { EllipsisPipe } from './_pipes/ellipsis.pipe';



export function tokenGetter() {
  return localStorage.getItem(DbKeysService.ACCESS_TOKEN);
}


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomeComponent,
    HeroComponent,
    ContactComponent,
    AboutUsComponent,
    NavGlowButtonsComponent,
    FaqComponent,
    ClientsComponent,
    FeaturesComponent,
    OurServicesComponent,
    AboutCountComponent,
    LoginComponent,
    RegisterComponent,
    SelectAccountTypeComponent,
    CreateNewAccountComponent,
    VerifyPhoneNumberComponent,
    LookingForWorkComponent,
    LookingForStaffComponent,
    TremsComponent,
    ForgetPasswordComponent,
    ResetForgottenPasswordComponent,
    LazyImgDirective,
    PricingPreviewTaskersComponent,
    PricingPreviewBusinessesComponent,
    SubscriptionPackagesTaskersComponent,
    SubscriptionPackagesBusinessesComponent,
    ContactUsComponent,
    PricingPreviewsComponent,
    AqdrrComponent,
    JobsListComponent,
    
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [environment.HostUrl, "aqdrr.com"],
        blacklistedRoutes: [`${environment.HostUrl}/api/auth`, "aqdrr.com/api/auth"]
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    JobsModule,
    TicketsModule,
    TasksModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
