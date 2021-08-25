import { Component, OnInit } from "@angular/core";
import { NgbPopover } from "@ng-bootstrap/ng-bootstrap";
import { AlertifyService } from "src/app/_helpers/Alertify";
import { enterItem } from "src/app/_helpers/animations/enter-leave";
import { AppTranslationService } from "src/app/_helpers/app-translation";
import { QueryStringBuilder } from "src/app/_helpers/url/query-string-builder";
import { Column, Pagination, PaginationResult } from "src/app/_models/data/Pagination";
import { Invoice, PaymentInvoice, PaymentStatus } from "src/app/_models/invoices/Invoice";
import { ChargeStatus } from "src/app/_models/payments/tab-company";
import { PackageCategory } from "src/app/_models/settings/subscription-package";
import { InvoicesService } from "src/app/_services/invoices/invoices.service";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: [],
  animations: [enterItem]
})
export class InvoiceListComponent implements OnInit {
  isLoadingData = true;
  invoices: Invoice[];
  PackageCategoryEnum = PackageCategory;
  PaymentStatusEnum = PaymentStatus;
  ChargeStatusEnum = ChargeStatus;

  columns: Column[] = <Column[]>[
    { title: this.appTranslation.get('Invoices.Id'), align: 'center', key: 'id' },
    { title: this.appTranslation.get('Invoices.Description'), align: 'center', key: 'description' },
    { title: this.appTranslation.get('Invoices.ChargeId'), align: 'center', key: 'chargeId' },
    { title: this.appTranslation.get('Invoices.PackagePrice'), align: 'center', key: 'packagePrice' },
    { title: this.appTranslation.get('Invoices.ExpiryDate'), align: 'center', key: 'totalDays' },
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private invoicesService: InvoicesService,
    private queryStringBuilder: QueryStringBuilder<Pagination>) {

    queryStringBuilder.getQueryParams(this.query);
  }

  ngOnInit(): void {
    this.getAllInvoices();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Invoices.invoiceCaption'));
  }

  getChargeStatusEnumIconStyle(chargeStatus: ChargeStatus) {
    if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.CAPTURED || <ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Free) {
      return 'fa fa-check-circle text-success';
    } else if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Other) {
      return 'fa fa-ban text-warning';
    } else if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.Waiting) {
      return 'fa fa-clock-o text-primary';
    } else if (<ChargeStatus>chargeStatus === <ChargeStatus>this.ChargeStatusEnum.INITIATED) {
      return 'fa fa-retweet text-primary';
    }
    else { return 'fa fa-info text-info' }
  }

  getPaymentStatusIconStyle(status: PaymentStatus) {
    if (<PaymentStatus>status === <PaymentStatus>this.PaymentStatusEnum.Confirmed) {
      return 'fa fa-check-circle text-success';
    } else if (<PaymentStatus>status === <PaymentStatus>this.PaymentStatusEnum.Failed) {
      return 'fa fa-ban text-danger';
    } else if (<PaymentStatus>status === <PaymentStatus>this.PaymentStatusEnum.Waiting) {
      return 'fa fa-clock-o text-primary';
    }
    else { return 'fa fa-info text-info' }
  }

  getAllInvoices() {
    this.queryStringBuilder.setQueryParams(this.query);
    this.isLoadingData = true;
    this.invoicesService.getPagedInvoices(this.query).subscribe((res: PaginationResult<PaymentInvoice[]>) => {
      this.invoices = res.items;
      this.query = res.pagination;
    },
      error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; },
      () => { this.isLoadingData = false; }
    );
  }
  onFilterChange() {
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllInvoices();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllInvoices();
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
    this.getAllInvoices();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllInvoices();
  }


  checkPaymentGatewayForThisCharge(chargeStatus: ChargeStatus, chargeId: string,) {

  }

}
