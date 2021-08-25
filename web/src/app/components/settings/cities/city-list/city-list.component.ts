import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { enterItem } from 'src/app/_helpers/animations/enter-leave';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { QueryStringBuilder } from 'src/app/_helpers/url/query-string-builder';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { City } from 'src/app/_models/settings/city';
import { CitiesService } from 'src/app/_services/settings/cities.service';
import { CityDetailsComponent } from '../city-details/city-details.component';
import { ModifyCityComponent } from '../modify-city/modify-city.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: [],
	animations: [enterItem]
})
export class CityListComponent implements OnInit {
  edtModalRef: NgbModalRef | null;
  viwModalRef: NgbModalRef | null;
  isLoadingData = true;
  cities: City[];
  columns: Column[] = <Column[]>[
    { title: this.appTranslation.get('Common.Form.Id'), align: 'center', key: 'id' },
    { title: this.appTranslation.get('Cities.Code'), align: 'center', key: 'code' },
    { title: this.appTranslation.get('Cities.ArName'), align: 'left', key: 'arName' },
    { title: this.appTranslation.get('Cities.EnName'), align: 'right', key: 'enName' },
    { title: this.appTranslation.get('Cities.IsEnabled'), align: 'center', key: 'isEnabled' },
    { title: this.appTranslation.get('Cities.RegionId'), align: 'center', key: 'regionId' },
    { title: this.appTranslation.get('Cities.UpdatedDate'), align: 'center', key: 'updatedDate' },
    {}
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private citiesService: CitiesService,
    private queryStringBuilder: QueryStringBuilder<Pagination>) {

    queryStringBuilder.getQueryParams(this.query);
  }

  ngOnInit(): void {
    this.getAllCities();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Cities.cityCaption'));
  }



  changeCityStatus(city: any, checkboxInput: any) {
    this.citiesService.changeCityStatus(city.id, checkboxInput.currentTarget.checked).subscribe(
      result => {
        this.alertify.info('تم تغيير الحالة بنجاح');
        city.isEnabled = result;
      },
      error => { this.alertify.error(error); }
    );
  }
  getAllCities() {
    this.queryStringBuilder.setQueryParams(this.query);
    this.isLoadingData = true;
    this.citiesService.getPagedCities(this.query).subscribe((res: PaginationResult<City[]>) => {
      this.cities = res.items;
      this.query = res.pagination;
    },
      error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; },
      () => { this.isLoadingData = false; }
    );
  }
  onFilterChange() {
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllCities();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllCities();
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
    this.getAllCities();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllCities();
  }


  getCityToEdit(currentCity: City) {
    this.citiesService.getCity(currentCity.id).subscribe(
      (result: City) => {
        this.showCityEditModal(currentCity, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }


  showCityEditModal(currentCity: City, apiCity: City) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.edtModalRef = this.modalService.open(ModifyCityComponent, config);
    this.edtModalRef.componentInstance.city = apiCity;
    this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedCity: City) => {
      this.applyChangedCity(currentCity, updatedCity);
      this.edtModalRef.close();
    });
  }


  applyChangedCity(currentCity: City, updatedCity: City) {
    if (updatedCity) {
      Object.assign(currentCity, updatedCity);
    }
  }


  getCityToViewDetails(currentCity: City) {
    this.citiesService.getCity(currentCity.id).subscribe(
      (result: City) => {
        this.showCityViewModal(currentCity, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }


  showCityViewModal(currentCity: City, apiCity: City) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.viwModalRef = this.modalService.open(CityDetailsComponent, config);
    this.viwModalRef.componentInstance.city = apiCity;
  }


}
