import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserTask } from 'src/app/_models/Users/user-tasks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { UserTasksService } from 'src/app/_services/users/user-tasks.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/_models/settings/task';
import { TasksService } from 'src/app/_services/settings/tasks.service';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';

@Component({
  selector: 'app-new-user-task-modal',
  templateUrl: './new-user-task-modal.component.html',
  styleUrls: []
})
export class NewUserTaskModalComponent implements OnInit {
  @Output() addSuccessfully: EventEmitter<UserTask> = new EventEmitter<UserTask>();
  addUserTaskForm: FormGroup;
  isSubmitting: boolean = false;
  tasksList: KeyValuePairResource[] = [];
  @Input() name;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private tasksService: TasksService,
    private userTasksService: UserTasksService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.getAllTasks();
    this.initAddForm();
  }

  getAllTasks() {
    this.tasksService.getTasksAsList().subscribe(
      (list: KeyValuePairResource[]) => { this.tasksList = list; },
      error => this.alertify.error(error)
    );
  }

  initAddForm() {
    this.addUserTaskForm = this.formBuilder.group({
      taskId: [0, Validators.required],
      price: ['', [Validators.required, Validators.pattern(RegularExpression.Money)]],
      description: ['']
    });
  }

  get addValidator() { return this.addUserTaskForm.controls; }

  addNewUserTask() {
    this.addUserTaskForm.markAllAsTouched();
    if (this.addUserTaskForm.valid) {
      this.addUserTaskForm.disable();
      this.isSubmitting = true;
      let newItem: any;
      newItem = Object.assign({}, this.addUserTaskForm.value);
      this.userTasksService.addNew(newItem).subscribe(
        returnUserTask => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.addSuccessfully.emit(returnUserTask);
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
          this.addUserTaskForm.enable();
        },
        () => { this.isSubmitting = false; });
    } else { this.alertify.success(this.appTranslation.get('Common.Data.Invalid')); }
  }
}