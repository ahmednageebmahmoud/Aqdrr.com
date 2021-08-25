import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { enterItem } from 'src/app/_helpers/animations/enter-leave';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { QueryStringBuilder } from 'src/app/_helpers/url/query-string-builder';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { SubscriptionPackage } from 'src/app/_models/settings/subscription-package';
import { SubscriptionPackagesService } from 'src/app/_services/settings/subscription-packages.service';
import { ModifySubscriptionPackageComponent } from '../modify-subscription-package/modify-subscription-package.component';

@Component({
  selector: 'app-subscription-package-list',
  templateUrl: './subscription-package-list.component.html',
  animations: [enterItem]
})
export class SubscriptionPackageListComponent implements OnInit {
  edtModalRef: NgbModalRef | null;
  isLoadingData = true;
  subscriptionPackages: SubscriptionPackage[];
  columns: Column[] = <Column[]>[
    { title: this.appTranslation.get('SubscriptionPackages.Id'), align: 'center', key: 'id' },
    { title: this.appTranslation.get('SubscriptionPackages.Category'), align: 'center', key: 'category' },
    { title: this.appTranslation.get('SubscriptionPackages.ArTitle'), align: 'center', key: 'arTitle' },
    { title: this.appTranslation.get('SubscriptionPackages.EnTitle'), align: 'center', key: 'enTitle' },
    { title: this.appTranslation.get('SubscriptionPackages.IsFree'), align: 'center', key: 'isFree' },
    { title: this.appTranslation.get('SubscriptionPackages.OldPrice'), align: 'center', key: 'oldPrice' },
    { title: this.appTranslation.get('SubscriptionPackages.Price'), align: 'center', key: 'price' },
    { title: this.appTranslation.get('SubscriptionPackages.PriceSaudiRiyal'), align: 'center', key: 'priceSaudiRiyal' },
    { title: this.appTranslation.get('SubscriptionPackages.TotalDays'), align: 'center', key: 'TotalDays' },
    { title: this.appTranslation.get('SubscriptionPackages.EmploymentBags'), align: 'center', key: 'employmentBags' },
    { title: this.appTranslation.get('SubscriptionPackages.Color'), align: 'center', key: 'color' },
    { title: this.appTranslation.get('SubscriptionPackages.IsEnabled'), align: 'center', key: 'isEnabled' },
    {}
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private subscriptionPackagesService: SubscriptionPackagesService,
    private modalService: NgbModal,
    private queryStringBuilder: QueryStringBuilder<Pagination>) {

    queryStringBuilder.getQueryParams(this.query);
  }

  ngOnInit(): void {
    this.getAllSubscriptionPackages();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('SubscriptionPackages.subscriptionPackageCaption'));
  }



  changeSubscriptionPackageStatus(subscriptionPackage: any, checkboxInput: any) {
    this.subscriptionPackagesService.changeSubscriptionPackageStatus(subscriptionPackage.id, checkboxInput.currentTarget.checked).subscribe(
      result => {
        this.alertify.info('تم تغيير الحالة بنجاح');
        subscriptionPackage.isEnabled = result;
      },
      error => { this.alertify.error(error); }
    );
  }
  getAllSubscriptionPackages() {
    this.queryStringBuilder.setQueryParams(this.query);
    this.isLoadingData = true;
    this.subscriptionPackagesService.getPagedSubscriptionPackages(this.query).subscribe((res: PaginationResult<SubscriptionPackage[]>) => {
      this.subscriptionPackages = res.items;
      this.query = res.pagination;
    },
      error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; },
      () => { this.isLoadingData = false; }
    );
  }
  onFilterChange() {
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllSubscriptionPackages();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllSubscriptionPackages();
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
    this.getAllSubscriptionPackages();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllSubscriptionPackages();
  }


  getSubscriptionPackageToEdit(currentSubscriptionPackage: SubscriptionPackage) {
    this.subscriptionPackagesService.getSubscriptionPackage(currentSubscriptionPackage.id).subscribe(
      (result: SubscriptionPackage) => {
        this.showSubscriptionPackageEditModal(currentSubscriptionPackage, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }


  showSubscriptionPackageEditModal(currentSubscriptionPackage: SubscriptionPackage, apiSubscriptionPackage: SubscriptionPackage) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.edtModalRef = this.modalService.open(ModifySubscriptionPackageComponent, config);
    this.edtModalRef.componentInstance.subscriptionPackage = apiSubscriptionPackage;
    this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedSubscriptionPackage: SubscriptionPackage) => {
      this.applyChangedSubscriptionPackage(currentSubscriptionPackage, updatedSubscriptionPackage);
      this.edtModalRef.close();
    });
  }

  applyChangedSubscriptionPackage(currentSubscriptionPackage: SubscriptionPackage, updatedSubscriptionPackage: SubscriptionPackage) {
    if (updatedSubscriptionPackage) {
      Object.assign(currentSubscriptionPackage, updatedSubscriptionPackage);
    }
  }

}
