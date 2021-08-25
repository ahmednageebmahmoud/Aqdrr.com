import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { Task } from 'src/app/_models/settings/task';
import { TasksService } from 'src/app/_services/settings/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: []
})
export class CreateTaskComponent implements OnInit {
  @Output() addSuccessfully: EventEmitter<Task> = new EventEmitter<Task>();
  addTaskForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private tasksService: TasksService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initAddForm();
  }


  initAddForm() {
    this.addTaskForm = this.formBuilder.group({
      arName: ['', Validators.required],
      enName: ['', Validators.required],
      description: ['', Validators.maxLength(300)]
    });
  }

  get addValidator() { return this.addTaskForm.controls; }

  addNewTask() {
    if (this.addTaskForm.valid) {
      this.isSubmitting = true;
      this.addTaskForm.disable();
      let task = {} as Task;
      Object.assign(task, this.addTaskForm.getRawValue());
      this.tasksService.addNew(task).subscribe(
        returnTask => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.addSuccessfully.emit(returnTask);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.addTaskForm.enable(); },
        () => { this.isSubmitting = false; this.addTaskForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.addTaskForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }



}