import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';

// Components
import { SettingsComponent } from './settings-home/settings.component';
import { JobCategoryListComponent } from './job-categories/job-category-list/job-category-list.component';
import { JobCategoryDetailsComponent } from './job-categories/job-category-details/job-category-details.component';
import { CreateJobCategoryComponent } from './job-categories/create-job-category/create-job-category.component';
import { ModifyJobCategoryComponent } from './job-categories/modify-job-category/modify-job-category.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { ModifyTaskComponent } from './tasks/modify-task/modify-task.component';
import { CityListComponent } from './cities/city-list/city-list.component';
import { CityDetailsComponent } from './cities/city-details/city-details.component';
import { ModifyCityComponent } from './cities/modify-city/modify-city.component';
import { SmsBalanceComponent } from './sms/sms-balance/sms-balance.component';
import { SendSmsComponent } from './sms/send-sms/send-sms.component';
import { SmsHomeComponent } from './sms/sms-home/sms-home.component';


@NgModule({
  declarations: [
    SettingsComponent,
    JobCategoryListComponent,
    JobCategoryDetailsComponent,
    CreateJobCategoryComponent,
    ModifyJobCategoryComponent,
    TaskListComponent,
    TaskDetailsComponent,
    CreateTaskComponent,
    ModifyTaskComponent,
    CityListComponent,
    CityDetailsComponent,
    ModifyCityComponent,
    SmsBalanceComponent,
    SendSmsComponent,
    SmsHomeComponent
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
