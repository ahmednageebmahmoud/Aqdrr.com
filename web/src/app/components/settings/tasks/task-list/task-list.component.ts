import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbModal, NgbModalOptions, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { QueryStringBuilder } from 'src/app/_helpers/url/query-string-builder';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { Task } from 'src/app/_models/settings/task';
import { TasksService } from 'src/app/_services/settings/tasks.service';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { ModifyTaskComponent } from '../modify-task/modify-task.component';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: []
})
export class TaskListComponent implements OnInit {
  addModalRef: NgbModalRef | null;
  edtModalRef: NgbModalRef | null;
  viwModalRef: NgbModalRef | null;
  isLoadingData = true;
  tasks: Task[];
  columns: Column[] = <Column[]>[
    { title: this.appTranslation.get('Tasks.Id'), align: 'center', key: 'id' },
    { title: this.appTranslation.get('Tasks.ArName'), align: 'left', key: 'arName' },
    { title: this.appTranslation.get('Tasks.EnName'), align: 'right', key: 'enName' },
    { title: this.appTranslation.get('Tasks.IsEnabled'), align: 'center', key: 'isEnabled' },
    { title: this.appTranslation.get('Tasks.UpdatedDate'), align: 'center', key: 'updatedDate' },
    {}
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private tasksService: TasksService,
    private queryStringBuilder: QueryStringBuilder<Pagination>) {

    queryStringBuilder.getQueryParams(this.query);
  }

  ngOnInit(): void {
    this.getAllTasks();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Tasks.taskCaption'));
  }



  showTaskAddModal() {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.addModalRef = this.modalService.open(CreateTaskComponent, config);
    this.addModalRef.componentInstance.addSuccessfully.subscribe((newTask: Task) => {
      this.addNewTaskToTasksList(newTask);
      this.addModalRef.close();
    });
  }

  addNewTaskToTasksList(newTask: Task) {
    if (newTask) {
      this.tasks.unshift(newTask);
    }
  }

  changeTaskStatus(task: any, checkboxInput: any) {
    this.tasksService.changeTaskStatus(task.id, checkboxInput.currentTarget.checked).subscribe(
      result => {
        this.alertify.info('تم تغيير الحالة بنجاح');
        task.isEnabled = result;
      },
      error => { this.alertify.error(error); }
    );
  }
  getAllTasks() {
    this.queryStringBuilder.setQueryParams(this.query);
    this.isLoadingData = true;
    this.tasksService.getPagedTasks(this.query).subscribe((res: PaginationResult<Task[]>) => {
      this.tasks = res.items;
      this.query = res.pagination;
    },
      error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; },
      () => { this.isLoadingData = false; }
    );
  }
  onFilterChange() {
    this.query.pageNumber = 1;
    this.query.refreshCounter = true;
    this.getAllTasks();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      refreshCounter: true,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllTasks();
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
    this.getAllTasks();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllTasks();
  }


  getTaskToEdit(currentTask: Task) {
    this.tasksService.getTask(currentTask.id).subscribe(
      (result: Task) => {
        this.showTaskEditModal(currentTask, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }


  showTaskEditModal(currentTask: Task, apiTask: Task) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.edtModalRef = this.modalService.open(ModifyTaskComponent, config);
    this.edtModalRef.componentInstance.task = apiTask;
    this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedTask: Task) => {
      this.applyChangedTask(currentTask, updatedTask);
      this.edtModalRef.close();
    });
  }


  applyChangedTask(currentTask: Task, updatedTask: Task) {
    if (updatedTask) {
      Object.assign(currentTask, updatedTask);
    }
  }


  getTaskToViewDetails(currentTask: Task) {
    this.tasksService.getTask(currentTask.id).subscribe(
      (result: Task) => {
        this.showTaskViewModal(currentTask, result);
      },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }


  showTaskViewModal(currentTask: Task, apiTask: Task) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.viwModalRef = this.modalService.open(TaskDetailsComponent, config);
    this.viwModalRef.componentInstance.task = apiTask;
  }



}
