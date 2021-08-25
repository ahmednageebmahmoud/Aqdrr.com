import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// npm package
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  NgbRatingModule, NgbNavModule, NgbTimepickerModule,
  NgbDatepickerModule, NgbModalModule, NgbPopoverModule, NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileUploadModule } from 'ng2-file-upload';

// helper
import { ErrorInterceptorProvider } from './../../_helpers/error.interceptor';
import { AppTranslationService, TranslateLanguageLoader } from './../../_helpers/app-translation';
import { AuthGuard } from './../../_guards/auth.guard';
import { TimeAgoPipe } from './../../_pipes/time-ago.pipe';
import { HijriDatePipe } from './../../_pipes/hijri-date.pipe';
import { GroupByPipe } from './../../_pipes/group-by-pipe.pipe';
import { ArabicTimepickerProvider } from 'src/app/_helpers/date-and-time/timepicker-provider';
import { TimespanPipe } from 'src/app/_pipes/Timespan.pipe';
import { LocalStoreManager } from './../../_helpers/local-store-manager.service';
import { AlertifyService } from './../../_helpers/Alertify';
import { AppTitleService } from './../../_helpers/app-title.service';
//import { HijriCalenderProvider } from './../../_helpers/hijri-calender.service';
import { AutofocusDirective } from './../../_directives/autofocus.directive';
import { NgbdSortableHeader } from './../../_directives/ngbd-sortable-header.directive';
import { HasPermissionDirective } from './../../_directives/has-permission.directive';
import { HasRoleDirective } from './../../_directives/has-role.directive';
import { ShowPasswordDirective } from './../../_directives/show-password.directive';
import { TextareaAutoResizeDirective } from 'src/app/_directives/textarea-auto-resize.directive';

//Services
import { AccountService } from './../../_services/users/account.service';
import { AuthService } from './../../_services/users/auth.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { UserService } from './../../_services/users/User.service';
import { AccountEndpointService } from './../../_services/users/account-endpoint.service';
import { EndpointFactory } from 'src/app/_services/users/endpoint-factory.service';

// Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgxSwitchComponent } from './ngx-switch/ngx-switch.component';
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { SpinnerContainerComponent } from './spinner/spinner-container/spinner-container.component';
import { ArticleSpinnerComponent } from './spinner/article-spinner/article-spinner.component';
import { SmallAvatarImgComponent } from './small-avatar-img/small-avatar-img.component';
import { DisplayRatingStarsComponent } from './display-rating-stars/display-rating-stars.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewApplicantApplyComponent } from './notifications/notification-typies/new-applicant-apply/new-applicant-apply.component';
import { DefaultNotificationComponent } from './notifications/notification-typies/default-notification/default-notification.component';
import { ApplicantChangeStatusComponent } from './notifications/notification-typies/applicant-change-status/applicant-change-status.component';
import { InviteToWorkWithCompanyComponent } from './notifications/notification-typies/invite-to-work-with-company/invite-to-work-with-company.component';
import { RespondToServiceRequestComponent } from './notifications/notification-typies/respond-to-service-request/respond-to-service-request.component';
import { ServiceHasBeenRequestedComponent } from './notifications/notification-typies/service-has-been-requested/service-has-been-requested.component';
import { ThumbnailDirective } from 'src/app/_directives/thumbnail.directive';
import { EllipsisPipe } from 'src/app/_pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AutofocusDirective,
    TextareaAutoResizeDirective,
    NgbdSortableHeader,
    HasPermissionDirective,
    HasRoleDirective,
    ShowPasswordDirective,
    HijriDatePipe,
    TimeAgoPipe,
    GroupByPipe,
    TimespanPipe,

    ThumbnailDirective,
    BreadcrumbsComponent,
    NgxSwitchComponent,
    SpinnerComponent,
    ArticleSpinnerComponent,
    SmallAvatarImgComponent,
    DisplayRatingStarsComponent,
    SpinnerContainerComponent,
    NotificationsComponent,
    NewApplicantApplyComponent,
    DefaultNotificationComponent,
    ApplicantChangeStatusComponent,
    InviteToWorkWithCompanyComponent,
    RespondToServiceRequestComponent,
    EllipsisPipe,
    ServiceHasBeenRequestedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbNavModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbTimepickerModule,
    NgbPopoverModule,
    NgbPaginationModule,
    NgSelectModule,
    TranslateModule.forRoot({
      useDefaultLang: true,
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    FileUploadModule,
  ],
  providers: [
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    AccountService,
    AccountEndpointService,
    EndpointFactory,
    LocalStoreManager,
    AppTranslationService,
    // AppTitleService,
    //HijriCalenderProvider,
    ArabicTimepickerProvider,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbNavModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbTimepickerModule,
    NgbPopoverModule,
    NgbPaginationModule,
    NgSelectModule,
    TranslateModule,
    FileUploadModule,

    AutofocusDirective,
    NgbdSortableHeader,
    HasPermissionDirective,
    HasRoleDirective,
    ShowPasswordDirective,
    HijriDatePipe,
    TimeAgoPipe,
    GroupByPipe,
    TimespanPipe,
    EllipsisPipe,
    ThumbnailDirective,
    TextareaAutoResizeDirective,

    BreadcrumbsComponent,
    NgxSwitchComponent,
    SpinnerComponent,
    SpinnerContainerComponent,
    ArticleSpinnerComponent,
    SmallAvatarImgComponent,
    DisplayRatingStarsComponent,
    NotificationsComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      // الفكرة من الاضافة هنا انشاء بروفايدر موحد على مستوى المشروع ومنع انشاء بروفايدر لكل موديل
      providers: [AuthService, UrlService, AppTitleService]
    };
  }
}
