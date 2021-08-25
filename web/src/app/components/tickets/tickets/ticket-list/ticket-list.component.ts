import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService, ConfirmResult } from 'src/app/_helpers/Alertify';
import { enterItem } from 'src/app/_helpers/animations/enter-leave';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { QueryStringBuilder } from 'src/app/_helpers/url/query-string-builder';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { Ticket, TicketCategory, TicketStatus } from 'src/app/_models/tickets/ticket';
import { TicketsService } from 'src/app/_services/tickets/tickets.service';
import { ModifyTicketComponent } from '../modify-ticket/modify-ticket.component';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: [],
  animations: [enterItem]
})
export class TicketListComponent implements OnInit {
  edtModalRef: NgbModalRef | null;
  viwModalRef: NgbModalRef | null;
  CategoryEnum = TicketCategory;
  StatusEnum = TicketStatus;
  isLoadingData = true;
  tickets: Ticket[];
  columns: Column[] = <Column[]>[
    { title: '#', align: 'center', key: 'id' },
    { title: this.appTranslation.get('Tickets.Category'), align: 'center', key: 'category' },
    { title: this.appTranslation.get('Tickets.Title'), align: 'center', key: 'title' },
    { title: this.appTranslation.get('Tickets.Sender'), align: 'center', key: 'fullName' },
    { title: this.appTranslation.get('Tickets.Phone'), align: 'center', key: 'phone' },
    {}
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private ticketsService: TicketsService,
    private queryStringBuilder: QueryStringBuilder<Pagination>) {

    queryStringBuilder.getQueryParams(this.query);
  }

  ngOnInit(): void {
    this.getAllTickets();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Tickets.ticketCaption'));
  }

  getAllTickets() {
    this.queryStringBuilder.setQueryParams(this.query);
    this.isLoadingData = true;
    this.ticketsService.getPagedTickets(this.query).subscribe((res: PaginationResult<Ticket[]>) => {
      this.tickets = res.items;
      this.query = res.pagination;
    },
      error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; },
      () => { this.isLoadingData = false; }
    );
  }

  onFilterChange() {
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllTickets();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllTickets();
  }

  refreshData() {
    this.resetFilter();
    this.alertify.info('تم تحديث البيانات');
  }

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getAllTickets();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllTickets();
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

  async removeTicket(id: number) {
    const confirm = await this.alertify.promisifyConfirm(`تنبيه على أنت على وشك حذف سجل`, `هل أنت متأكد من الحذف؟`);
    if (confirm === ConfirmResult.Ok) {
      this.ticketsService.removeTicket(id).subscribe(
        () => {
          this.alertify.info('تم الحذف بنجاح');
          this.tickets.splice(this.tickets.findIndex(e => e.id === id), 1);
        },
        error => { this.alertify.error(error); }
      );
    }
  }

  // modify Ticket
  getTicketToEdit(currentTicket: Ticket) {
    this.ticketsService.getTicket(currentTicket.id).subscribe(
      (result: Ticket) => {
        this.showTicketEditModal(currentTicket, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }


  showTicketEditModal(currentTicket: Ticket, apiTicket: Ticket) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.edtModalRef = this.modalService.open(ModifyTicketComponent, config);
    this.edtModalRef.componentInstance.ticket = apiTicket;
    this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedTicket: Ticket) => {
      this.applyChangedTicket(currentTicket, updatedTicket);
      this.edtModalRef.close();
    });
  }


  applyChangedTicket(currentTicket: Ticket, updatedTicket: Ticket) {
    if (updatedTicket) {
      Object.assign(currentTicket, updatedTicket);
    }
  }

  // View Ticket
  getTicketToViewDetails(currentTicket: Ticket) {
    this.ticketsService.getTicket(currentTicket.id).subscribe(
      (result: Ticket) => {
        this.showTicketViewModal(currentTicket, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }

  showTicketViewModal(currentTicket: Ticket, apiTicket: Ticket) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.viwModalRef = this.modalService.open(TicketDetailsComponent, config);
    this.viwModalRef.componentInstance.ticket = apiTicket;
  }


}
