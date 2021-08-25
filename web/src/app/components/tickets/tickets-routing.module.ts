import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: '', component: TicketListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
