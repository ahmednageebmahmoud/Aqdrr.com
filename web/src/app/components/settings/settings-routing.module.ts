import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { SettingsComponent } from './settings-home/settings.component';
import { JobCategoryListComponent } from './job-categories/job-category-list/job-category-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { CityListComponent } from './cities/city-list/city-list.component';
import { SmsHomeComponent } from './sms/sms-home/sms-home.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'JobCategory', component: JobCategoryListComponent , data: { title: 'JobCategories.Title' }},
  { path: 'tasks', component: TaskListComponent , data: { title: 'Tasks.Services' }},
  { path: 'cities', component: CityListComponent , data: { title: 'Cities.Title' }},
  { path: 'sms', component: SmsHomeComponent , data: { title: 'Sms.Title' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
