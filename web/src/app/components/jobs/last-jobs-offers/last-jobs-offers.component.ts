import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { JobOfferRow } from '../_models/job-offer';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { JobOffersService } from '../_services/job-offers.service';
import { JobPaginationResult, JobParams } from '../_models/job-params';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { enterItem } from 'src/app/_helpers/animations/enter-leave';

@Component({
  selector: 'app-last-jobs-offers',
  templateUrl: './last-jobs-offers.component.html',
  styleUrls: [],
  animations: [enterItem]
})
export class LastJobsOffersComponent implements OnInit {
  jobOffers: JobOfferRow[];
  entityCaption: string;
  isLoadingOptions = true;
  public genderEnum = Gender;
  @Input('isShowTitleBar') isShowTitleBar = false;
  @Input('query') appendQuery = {};

  @Input('getAllJobOffers')getAllJobOffersEvent=new EventEmitter();

 readonly PAGE_SIZE = 6;
  
  query: JobParams = <JobParams>{ pageSize: this.PAGE_SIZE  };

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    public permissions: PermissionsService,
    public authService: AuthService,
    private jobOffersService: JobOffersService) { }

  ngOnInit(): void {
    this.getAllJobOffersEvent.subscribe((newQuery)=>{
  this.query = <JobParams>{ pageSize: this.PAGE_SIZE };
  this.jobOffers=[];
  this.appendQuery=newQuery;
      this.getAllJobOffers();      
    });
    this.getAllJobOffers();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('JobsOffers.jobOfferCaption'));
  }

  getAllJobOffers() {
    this.query=Object.assign(this.query,this.appendQuery)

    this.jobOffersService.getPagedJobOffers(this.query).subscribe(
      (res: JobPaginationResult<JobOfferRow[]>) => {
        this.jobOffers = res.items;
        this.query = res.pagination;
      },
      () => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }

  onFilterChange() {
    console.log(this.query);
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllJobOffers();
  }

  resetFilter() {
    this.query = <JobParams>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllJobOffers();
  }

  refreshData() {
    this.resetFilter();
    this.alertify.info('تم تحديث البيانات');
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllJobOffers();
  }


}