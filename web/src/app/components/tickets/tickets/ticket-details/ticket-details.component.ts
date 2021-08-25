import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ticket, TicketStatus, TicketCategory } from 'src/app/_models/tickets/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: []
})
export class TicketDetailsComponent implements OnInit {
	isLoadingData = true;
	isSubmitting = false;
	showMoreMessageContent = false;
	ticket: Ticket;
  CategoryEnum = TicketCategory;
  StatusEnum = TicketStatus;
	constructor(public activeModal: NgbActiveModal) {

	}


	ngOnInit(): void {

  }

   // Actions
   getCategoryStyle(category: TicketCategory) {
    if (<TicketCategory>category === <TicketCategory>this.CategoryEnum.General) {
      return 'bg-primary';
    } else if (<TicketCategory>category === <TicketCategory>this.CategoryEnum.Error) {
      return 'bg-danger';
    } else if (<TicketCategory>category === <TicketCategory>this.CategoryEnum.Help) {
      return 'bg-info';
    }
    else { return '' }
  }

  getCategoryIconStyle(category: TicketCategory) {
    if (<TicketCategory>category === <TicketCategory>this.CategoryEnum.General) {
      return 'fa fa-question-circle';
    } else if (<TicketCategory>category === <TicketCategory>this.CategoryEnum.Error) {
      return 'fa fa-bug';
    } else if (<TicketCategory>category === <TicketCategory>this.CategoryEnum.Help) {
      return 'fa fa-info-circle';
    }
    else { return '' }
  }

  getStatusStyle(status: TicketStatus) {
    if (<TicketStatus>status === <TicketStatus>this.StatusEnum.New) {
      return 'badge-primary';
    } else if (<TicketStatus>status === <TicketStatus>this.StatusEnum.Replied) {
      return 'badge-info';
    } else if (<TicketStatus>status === <TicketStatus>this.StatusEnum.Responded) {
      return 'badge-warning';
    }
    else { return '' }
  }

  getStatusIconStyle(status: TicketStatus) {
    if (<TicketStatus>status === <TicketStatus>this.StatusEnum.New) {
      return 'fa fa-asterisk';
    } else if (<TicketStatus>status === <TicketStatus>this.StatusEnum.Replied) {
      return 'fa fa-reply';
    } else if (<TicketStatus>status === <TicketStatus>this.StatusEnum.Responded) {
      return 'fa fa-commenting-o';
    }
    else { return '' }
  }
}
