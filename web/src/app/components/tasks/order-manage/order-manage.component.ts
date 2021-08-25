import { Component, OnInit } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { OrderService, OrderStage } from '../_models/order-service';
import { OrderServicesService } from '../_services/order-services.service';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: []
})
export class OrderManageComponent implements OnInit {
  isLoading: boolean = true;
  orderServices: OrderService[];
  columns: Column[] = <Column[]>[
    { title: '#', align: 'center', key: 'id' },
    { title: this.appTranslation.get('OrdersServices.UserTaskId'), align: 'center', key: 'userTaskId' },
    { title: this.appTranslation.get('OrdersServices.OrderStatus'), align: 'left', key: 'orderStage' },
    // {}
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private orderServicesService: OrderServicesService) { }

  ngOnInit(): void {
    this.getAllOrderServices();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('OrdersServices.orderServiceCaption'));
  }

  getAllOrderServices() {
    this.orderServicesService.getPagedOrders(this.query).subscribe((res: PaginationResult<OrderService[]>) => {
      this.orderServices = res.items;
      this.query = res.pagination;
    },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)),
      () => { this.isLoading = false; }
    );
  }

  onFilterChange() {
    this.query.pageNumber = 1;
    this.getAllOrderServices();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllOrderServices();
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
    this.getAllOrderServices();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event.page;
    this.getAllOrderServices();
  }

  toggleMoreInfo(popover: NgbPopover, vOrderService: OrderService) {
    if (popover.isOpen()) { popover.close(); } else {
      popover.placement = 'auto';
      popover.open({ vOrderService });
    }
  }

  getOrderStatusStyle(orderStage: OrderStage) {
    if (<OrderStage>orderStage === <OrderStage>OrderStage.TheRequestApproval) {
      return 'text-success';
    } else if (<OrderStage>orderStage === <OrderStage>OrderStage.TheRequestRejected) {
      return 'text-warning';
    }
    else { return 'text-info' }
  }

  getOrderStatusIconStyle(orderStage: OrderStage) {
    if (<OrderStage>orderStage === <OrderStage>OrderStage.TheRequestApproval) {
      return 'fa fa-check-circle';
    } else if (<OrderStage>orderStage === <OrderStage>OrderStage.TheRequestRejected) {
      return 'fa fa-ban';
    }
    else { return 'fa fa-info-circle' }
  }

}