import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { AuthService } from 'src/app/_services/users/auth.service';
import { TaskerAccountsService } from 'src/app/_services/users/tasker-accounts.service';
import { TaskerCard } from '../_models/tasker-card';
import { TaskersParams, TasksPaginationResult } from '../_models/tasks-params';

@Component({
  selector: 'app-random-tasker',
  templateUrl: './random-tasker.component.html',
  styleUrls: []
})
export class RandomTaskerComponent implements OnInit {
  taskers: TaskerCard[];
  entityCaption: string;
  isLoadingOptions = true;
  isLoading = true;
  public genderEnum = Gender;
  private readonly PAGE_SIZE = 3;
  query: TaskersParams = <TaskersParams>{ pageSize: this.PAGE_SIZE };

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    public permissions: PermissionsService,
    public authService: AuthService,
    private taskersService: TaskerAccountsService) { }

  ngOnInit(): void {
    this.getAllTaskers();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('taskersOffers.jobOfferCaption'));
  }

  getAllTaskers() {
    this.isLoading = true; 
    this.taskersService.getPagedTaskerCard(this.query).subscribe(
      (res: TasksPaginationResult<TaskerCard[]>) => {
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


}