import { Component, OnInit, Input } from '@angular/core';
import { UserTask } from 'src/app/_models/Users/user-tasks';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService, ConfirmResult } from 'src/app/_helpers/Alertify';
import { UserTasksService } from 'src/app/_services/users/user-tasks.service';
import { NgbPopover, NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/users/auth.service';
import { NewUserTaskModalComponent } from '../new-user-task-modal/new-user-task-modal.component';
import { ModifyMyTaskComponent } from '../modify-my-task/modify-my-task.component';
import { OrderTaskerModalComponent } from 'src/app/components/tasks/order-tasker-modal/order-tasker-modal.component';

@Component({
  selector: 'app-user-tasks-list',
  templateUrl: './user-tasks-list.component.html',
  styleUrls: []
})
export class UserTasksListComponent implements OnInit {
  @Input('UserTasksPrices') userTasks: UserTask[];
  @Input('CityName') cityName: string;
  @Input('CurrentUserId') currentUserId: number;
  addModalRef: NgbModalRef | null;
  edtModalRef: NgbModalRef | null;
  orderModalRef: NgbModalRef | null;

  columns: Column[] = <Column[]>[
    { title: this.appTranslation.get('Tasks.Type'), align: 'center', key: 'taskId' },
    { title: this.appTranslation.get('Tasks.Price'), align: 'center', key: 'price' },
    // { title: this.appTranslation.get('Tasks.IsEnabled'), align: 'center', key: 'isEnabled' },
    {}
  ];

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private userTasksService: UserTasksService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  changeUserTaskStatus(userTask: any, checkboxInput: any) {
    this.userTasksService.changeUserTaskStatus(userTask.id, checkboxInput.currentTarget.checked).subscribe(
      result => {
        this.alertify.info('تم تغيير الحالة بنجاح');
        userTask.isEnabled = result;
      },
      error => { this.alertify.error(error); }
    );
  }

  async removeUserTask(id: number) {
    const confirm = await this.alertify.promisifyConfirm(`تنبيه على أنت على وشك حذف سجل`, `هل أنت متأكد من الحذف؟`);
    if (confirm === ConfirmResult.Ok) {
      this.userTasksService.removeUserTask(id).subscribe(
        () => {
          this.alertify.info('تم الحذف بنجاح');
          this.userTasks.splice(this.userTasks.findIndex(e => e.id === id), 1);
        },
        error => { this.alertify.error(error); }
      );
    }
  }

  toggleMoreInfo(popover: NgbPopover, vUserTask: UserTask) {
    if (popover.isOpen()) { popover.close(); } else {
      popover.placement = 'auto';
      popover.open({ vUserTask });
    }
  }

  get isCurrentUserProfile(): boolean {
    return this.authService.isCurrentUserProfile(this.currentUserId);
  }

  showUserTaskAddModal() {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.addModalRef = this.modalService.open(NewUserTaskModalComponent, config);
    this.addModalRef.componentInstance.name = 'World';
    this.addModalRef.componentInstance.addSuccessfully.subscribe((newUserTask: UserTask) => {
      this.addNewUserTaskToUserTasksList(newUserTask);
      this.addModalRef.close();
    });
  }

  addNewUserTaskToUserTasksList(newUserTask: UserTask) {
    if (newUserTask) {
      this.userTasks.unshift(newUserTask);
    }
  }

  getUserTaskToEdit(currentUserTask: UserTask) {
    this.userTasksService.getUserTask(currentUserTask.id).subscribe(
      (result: UserTask) => {
        this.showUserTaskEditModal(currentUserTask, result);
      },
      error => this.alertify.error(error)
    );
  }

  showUserTaskEditModal(currentUserTask: UserTask, apiUserTask: UserTask) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.edtModalRef = this.modalService.open(ModifyMyTaskComponent, config);
    this.edtModalRef.componentInstance.userTask = apiUserTask;
    this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedUserTask: UserTask) => {
      this.edtModalRef.close();
      this.applyChangedUserTask(currentUserTask, updatedUserTask);
    });
  }

  applyChangedUserTask(currentUserTask: UserTask, updatedUserTask: UserTask) {
    if (updatedUserTask) {
      Object.assign(currentUserTask, updatedUserTask);
    }
  }


  showUserTaskOrderModal(apiUserTask: UserTask) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.orderModalRef = this.modalService.open(OrderTaskerModalComponent, config);
    this.orderModalRef.componentInstance.userTask = apiUserTask;
    this.orderModalRef.componentInstance.cityName = this.cityName;
    this.orderModalRef.componentInstance.orderSuccessfully.subscribe((updatedUserTask: UserTask) => {
      this.orderModalRef.close();
    });
  }



}