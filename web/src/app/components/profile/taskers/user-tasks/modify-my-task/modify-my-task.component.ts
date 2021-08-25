import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserTask } from 'src/app/_models/Users/user-tasks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { UserTasksService } from 'src/app/_services/users/user-tasks.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';

@Component({
  selector: 'app-modify-my-task',
  templateUrl: './modify-my-task.component.html',
  styleUrls: []
})
export class ModifyMyTaskComponent implements OnInit {
  @Output() updatedSuccessfully: EventEmitter<UserTask> = new EventEmitter<UserTask>();
  edtUserTaskForm: FormGroup;
  isSubmitting: boolean = false;
  userTask: UserTask;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private userTasksService: UserTasksService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initEdtForm();
  }

  initEdtForm() {
    this.edtUserTaskForm = this.formBuilder.group({
      id: ['', Validators.required],
      price: [0, [Validators.required, Validators.pattern(RegularExpression.Money)]],
      description: [''],
      isEnabled: [this.userTask?.isEnabled ?? false],
    });
    if (this.userTask) { this.edtUserTaskForm.patchValue(this.userTask); }
  }

  get updateValidator() { return this.edtUserTaskForm.controls; }

  editUserTask() {
    this.edtUserTaskForm.markAllAsTouched();
    if (this.edtUserTaskForm.valid) {
      this.edtUserTaskForm.disable();
      this.isSubmitting = true;
      Object.assign(this.userTask, this.edtUserTaskForm.value);
      this.userTasksService.updateUserTask(this.userTask).subscribe(
        returnUserTask => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.updatedSuccessfully.emit(returnUserTask);
        },
        error => {
          this.alertify.error(error);
          this.isSubmitting = false;
          this.edtUserTaskForm.enable();
        },
        () => { this.isSubmitting = false; });
    } else { this.alertify.success(this.appTranslation.get('Common.Data.Invalid')); }
  }



}