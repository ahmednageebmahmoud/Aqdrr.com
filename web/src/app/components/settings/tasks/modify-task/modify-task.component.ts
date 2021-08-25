import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { Task } from 'src/app/_models/settings/task';
import { TasksService } from 'src/app/_services/settings/tasks.service';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: []
})
export class ModifyTaskComponent implements OnInit {
  @Output() updatedSuccessfully: EventEmitter<Task> = new EventEmitter<Task>();
  edtTaskForm: FormGroup;
  isSubmitting: boolean = false;
  task: Task;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private tasksService: TasksService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initEdtForm();
  }

  initEdtForm() {
    this.edtTaskForm = this.formBuilder.group({
      id: [''],
      arName: ['', Validators.required],
      enName: ['', Validators.required],
      description: ['', Validators.maxLength(300)]
    });
    if (this.task) { this.edtTaskForm.patchValue(this.task); }
  }
  get updateValidator() { return this.edtTaskForm.controls; }
  editTask() {
    if (this.edtTaskForm.valid) {
      this.isSubmitting = true;
      this.edtTaskForm.disable();
      Object.assign(this.task, this.edtTaskForm.getRawValue());
      this.tasksService.updateTask(this.task).subscribe(
        returnTask => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.updatedSuccessfully.emit(returnTask);
        },
        error => { this.alertify.error(error); },
        () => { this.isSubmitting = false; this.edtTaskForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.edtTaskForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }



}