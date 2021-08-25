import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';

// Components
import { TaskerCardComponent } from './tasker-card/tasker-card.component';
import { RandomTaskerComponent } from './random-tasker/random-tasker.component';
import { OrderTaskerModalComponent } from './order-tasker-modal/order-tasker-modal.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderManageComponent } from './order-manage/order-manage.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { RandomServicesListComponent } from './random-services-list/random-services-list.component';
import { RatingTheTaskerModalComponent } from './rating-the-tasker-modal/rating-the-tasker-modal.component';
import { DisplayRatingDetailsComponent } from './display-rating-details/display-rating-details.component';


@NgModule({
  declarations: [
  TaskerCardComponent,
  RandomTaskerComponent,
  OrderTaskerModalComponent,
  OrdersListComponent,
  OrderManageComponent,
  OrderDetailsComponent,
  ServiceCardComponent,
  RandomServicesListComponent,
  RatingTheTaskerModalComponent,
  DisplayRatingDetailsComponent,
],
  imports: [
    SharedModule,
    TasksRoutingModule,
  ],
  exports:[
    TaskerCardComponent,
    RandomTaskerComponent,
    OrderTaskerModalComponent,
    RandomServicesListComponent,
  ]
})
export class TasksModule { }
