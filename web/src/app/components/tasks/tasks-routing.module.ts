import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderManageComponent } from './order-manage/order-manage.component';
import { OrdersListComponent } from './orders-list/orders-list.component';


const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'orders', component: OrdersListComponent },
  { path: 'manage', component: OrderManageComponent },
  { path: ':orderId/details', component: OrderDetailsComponent },
  // { path: 'taskers/list', component: RandomServicesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
