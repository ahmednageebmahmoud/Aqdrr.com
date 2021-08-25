import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TicketsRoutingModule } from './tickets-routing.module';

// Components
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { CreateTicketComponent } from './tickets/create-ticket/create-ticket.component';
import { ModifyTicketComponent } from './tickets/modify-ticket/modify-ticket.component';


@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailsComponent,
    CreateTicketComponent,
    ModifyTicketComponent
  ],
  imports: [
    SharedModule,
    TicketsRoutingModule
  ],
  exports:[
    CreateTicketComponent,

  ]
})
export class TicketsModule { }
