import { Component, OnInit } from '@angular/core';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { JobOfferRow, PrivacyJob } from '../_models/job-offer';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { JobOffersService } from '../_services/job-offers.service';
import { NgbPopover, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { JobPaginationResult, JobParams } from '../_models/job-params';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { SkillsService } from 'src/app/_services/settings/skills.service';
import { JobCategoriesService } from 'src/app/_services/settings/job-categories.service';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { zip } from 'rxjs';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { Router } from '@angular/router';
import { enterItem } from 'src/app/_helpers/animations/enter-leave';

@Component({
  selector: 'app-manage-jobs-offers',
  templateUrl: './manage-jobs-offers.component.html',
  styleUrls: [],
	animations: [enterItem]
})
export class ManageJobsOffersComponent implements OnInit {
  jobOffers: JobOfferRow[];
  entityCaption: string;
  isLoadingOptions = true;
  currentUserId: number = 0;
  maxDate: NgbDate | null = null;
  minDate: NgbDate | null = null;
  today: NgbDate | null = null;
  public jobsOffersSkillsOptions: KeyValuePairResource[] = []
  public jobsCategoriesOptions: KeyValuePairResource[] = []
  public citiesOptions: KeyValuePairResource[] = []
  public privacyJobEnum = PrivacyJob;
  public genderEnum = Gender;
  private readonly PAGE_SIZE = 10;
  query: JobParams = <JobParams>{ pageSize: this.PAGE_SIZE };

  constructor(private appTranslation: AppTranslationService,
    public permissions: PermissionsService,
    public authService: AuthService,
    private router: Router,
    private alertify: AlertifyService,
    private skillsService: SkillsService,
    private jobCategoriesService: JobCategoriesService,
    private citiesService: LocationsService,
    private jobOffersService: JobOffersService,
    private calendar: NgbCalendar) {
    this.today = calendar.getToday();
    this.minDate = HijriCalenderService.getToday();
    this.maxDate = HijriCalenderService.getToday(2);
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    if (this.permissions.canAddJobs) {
      this.getAllJobOffers();
      this.getAllDefualtsValues();
      this.currentUserId = this.authService.getCurrentUserIdUsingToken();
      this.entityCaption = this.appTranslation.get(this.appTranslation.get('JobsOffers.jobOfferCaption'));
    } else {
      this.alertify.warning(this.appTranslation.get('Permissions.AccessDenied'));
      this.router.navigate(['']);
    }

  }

  getAllDefualtsValues(): void {
    zip(
      this.skillsService.getSkillsAsList(),
      this.jobCategoriesService.getJobCategoriesAsList(),
      this.citiesService.getCitiesList(),
    ).subscribe(
      ([jobsOffersSkills, jobsCategories, cities]) => {
        this.jobsOffersSkillsOptions = <KeyValuePairResource[]>jobsOffersSkills;
        this.jobsCategoriesOptions = <KeyValuePairResource[]>jobsCategories;
        this.citiesOptions = <KeyValuePairResource[]>cities;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
      }
    );
  }

  // enableAllControls(): void {
  //   this.addJobsOfferForm.controls.jobsOffersSkills.enable();
  //   this.addJobsOfferForm.controls.jobCategoryId.enable();
  //   this.addJobsOfferForm.controls.cityId.enable();
  // }


  getAllJobOffers() {
    console.log('getAllJobOffers: ', this.query);
    this.jobOffersService.getPagedJobOffersForManage(this.query).subscribe(
      (res: JobPaginationResult<JobOfferRow[]>) => {
        this.jobOffers = res.items;
        this.query = res.pagination;
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
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

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getAllJobOffers();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllJobOffers();
  }

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    if (this.fromDate != null || this.toDate != null) {
      this.query.startDate = HijriCalenderService.tryConvertGregorianToDate(this.fromDate);
      this.query.endDate = HijriCalenderService.tryConvertGregorianToDate(this.toDate);
      this.onFilterChange();
    }
  }

  isDisabled = (date: NgbDate) => this.today != null && date.before(this.today);

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
