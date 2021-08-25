import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { TaskServiceCard } from 'src/app/_models/Users/user-tasks';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { TasksService } from 'src/app/_services/settings/tasks.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { UserTasksService } from 'src/app/_services/users/user-tasks.service';
import { MatchUserProfile } from '../../jobs/_models/job-params';
import { TaskersParams, TasksPaginationResult } from '../_models/tasks-params';

@Component({
  selector: 'app-random-services-list',
  templateUrl: './random-services-list.component.html',
  styles: []
})
export class RandomServicesListComponent implements OnInit {
  taskers: TaskServiceCard[];
  entityCaption: string;
  isLoading = true;
  isLoadingOptions = true;
  currentUserId: number = 0;
  public tasksCategoriesOptions: KeyValuePairResource[] = []
  public citiesOptions: KeyValuePairResource[] = []
  public matchUserProfileEnum = MatchUserProfile;
  public genderEnum = Gender;;
  private readonly PAGE_SIZE = 9;
  query: TaskersParams = <TaskersParams>{ pageSize: this.PAGE_SIZE };

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    public permissions: PermissionsService,
    public authService: AuthService,
    private citiesService: LocationsService,
    private tasksService: TasksService,
    private userTasksService: UserTasksService) { }

  ngOnInit(): void {
    try { this.currentUserId = this.authService.getCurrentUserIdUsingToken(); } catch (error) { console.log('anonymous user'); }
    this.getAllDefualtsValues();
    this.getAllTaskers();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('taskersOffers.jobOfferCaption'));
  }

  getAllTaskers() {
    this.isLoading = true;
    this.userTasksService.getPagedUserTaskCards(this.query).subscribe(
      (res: TasksPaginationResult<TaskServiceCard[]>) => {
        this.taskers = res.items;
        this.query = res.pagination;
      },
      () => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)),
      () => { this.isLoading = false; }
    );
  }

  onFilterChange() {
    console.log(this.query);
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllTaskers();
  }

  resetFilter() {
    this.query = <TaskersParams>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllTaskers();
  }

  refreshData() {
    this.resetFilter();
    this.alertify.info('تم تحديث البيانات');
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllTaskers();
  }

  getAllDefualtsValues(): void {
    zip(
      this.tasksService.getTasksAsList(),
      this.citiesService.getCitiesList(),
    ).subscribe(
      ([tasksCategories, cities]) => {
        this.tasksCategoriesOptions = <KeyValuePairResource[]>tasksCategories;
        this.citiesOptions = <KeyValuePairResource[]>cities;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
      }
    );
  }

  async whatIsMatchUserProfileDo() {
    // let title = this.appTranslation.get('JobsOffers.MatchMeProfile');
    // var whatIsMatchUserProfileDoHelp = await this.appSettingsService.readHtmlFile('whatIsMatchUserProfileDo').toPromise();
    // await this.alertify.showMoreInformationAsHtml(title, whatIsMatchUserProfileDoHelp, 0, '');
  }


}