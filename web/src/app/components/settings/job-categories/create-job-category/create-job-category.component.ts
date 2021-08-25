import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { UploadHandlerResult, UploadStatus } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { JobCategory } from 'src/app/_models/settings/job-category';
import { JobCategoriesService } from 'src/app/_services/settings/job-categories.service';
import { Utilities } from 'src/app/_services/utilities.service';

@Component({
  selector: 'app-create-job-category',
  templateUrl: './create-job-category.component.html',
  styleUrls: []
})
export class CreateJobCategoryComponent implements OnInit {
  @Output() addSuccessfully: EventEmitter<JobCategory> = new EventEmitter<JobCategory>();
  addJobCategoryForm: FormGroup;
  isSubmitting: boolean = false;
  uploadResponse: UploadHandlerResult<JobCategory>;
  uploadStatusEnum = UploadStatus;
  allowTypeToUpload = ['application/msword', 'application/pdf', 'Image/png', 'Image/jpeg', 'Image/jpg', 'Image/gif', 'Image/bmp', 'image/svg+xml'];
  selectedFiles: File[] = [];
  @ViewChild('labelImport') labelImport: ElementRef;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private jobCategoriesService: JobCategoriesService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initAddForm();
  }


  initAddForm() {
    this.addJobCategoryForm = this.formBuilder.group({
      icon: [''],
      arName: ['', Validators.required],
      enName: ['', Validators.required]
    });
  }

  get addValidator() { return this.addJobCategoryForm.controls; }

  addNewJobCategory() {
    if (this.addJobCategoryForm.valid) {
      this.isSubmitting = true;
      this.addJobCategoryForm.disable();
      let jobCategory = {} as JobCategory;
      Object.assign(jobCategory, this.addJobCategoryForm.getRawValue());
      this.jobCategoriesService.addNew(jobCategory).subscribe(
        returnJobCategory => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.addSuccessfully.emit(returnJobCategory);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.addJobCategoryForm.enable(); },
        () => { this.isSubmitting = false; this.addJobCategoryForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.addJobCategoryForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  onFileChange(event, files: FileList) {
    const maxFilesAllowed = 3;
    const maxFileSize = 1; // MB
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        if (!this.allowTypeToUpload.find(fn => fn.trim().toLowerCase() === event.target.files[i].type.trim().toLowerCase())) {
          this.alertify.alert(`تحقق من نوع الملف الذي قمت باختياره ، يسمح فقط بأحد انواع الملفات التالية <br >
								${this.allowTypeToUpload.join('<br >')}`);
          continue;
        }
        if (this.selectedFiles && this.selectedFiles.length >= maxFilesAllowed) {
          this.alertify.warning(`اقصى عدد مسموح لك برفعه هو ${maxFilesAllowed} ملف،<br >بامكانك حذف بعض الملفات واستبدالها بالملف الجديد`);
          continue;
        }
        if (event.target.files[i].size > (maxFileSize * 1024 * 1024)) {
          this.alertify.warning(`${event.target.files[i].name} <br > يجب أن لا يتجاوز حجم الملف ${maxFileSize} ميقا بايت.`);
          continue;
        }
        if ((Array.from(this.selectedFiles).map(f => f.name)).indexOf(event.target.files[i].name) === -1) {
          this.selectedFiles.push(event.target.files[i]);
        } else {
          this.alertify.warning(`${event.target.files[i].name} <br > قمت باختيار هذا الملف مسبقاً.`);
        }
      }
      if (event.target.files.length === 1) {
        this.labelImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(' ');
      } else {
        this.labelImport.nativeElement.innerText = `عدد الملفات (${this.selectedFiles.length})`;
      }
    } else { this.selectedFiles = null; }
    event.target.value = null;
  }


  removeFileFromSelectedFile(index) {
    this.selectedFiles.splice(index, 1);
    this.labelImport.nativeElement.innerText = `عدد الملفات (${this.selectedFiles.length})`;
  }


  resetUploadFields() {
    this.selectedFiles = null;
    this.labelImport.nativeElement.innerText = null;
  }


  addNewJobCategoryWithFile() {
    if (this.addJobCategoryForm.valid) {
      const formData = this.toJobCategoryFormData(this.addJobCategoryForm.getRawValue());
      if (formData == null) { return; }
      this.jobCategoriesService.addNewWithFile(formData).subscribe(
        returnJobCategory => {
          this.uploadResponse = returnJobCategory;
          if (<UploadStatus>returnJobCategory.status === <UploadStatus>UploadStatus.success ||
            <UploadStatus>returnJobCategory.status === <UploadStatus>UploadStatus.successWithSomeFailure) {
            this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
            this.resetUploadFields();
            if (<UploadStatus>returnJobCategory.status === <UploadStatus>UploadStatus.successWithSomeFailure) {
              this.alertify.info(returnJobCategory.message);
            }
            //this.jobCategoryDetials.attachments.push(...returnJobCategory.files);
            this.addSuccessfully.emit(returnJobCategory.data);
          } else if (<UploadStatus>returnJobCategory.status === <UploadStatus>UploadStatus.failure) {
            this.alertify.error(returnJobCategory.message);
          }
        },
        error => { this.alertify.error(error); },
        () => { });
    } else { this.alertify.warning(this.appTranslation.get('Common.Data.Invalid')); }
  }


  public toJobCategoryFormData<T>(formValue: T) {
    if (!this.selectedFiles || this.selectedFiles.length <= 0) {
      this.alertify.alert('فضلا قم باختيار بعض الملفات قبل الرفع');
      this.addJobCategoryForm.controls.icon.setErrors({ required: true });
      return null;
    }
    const formData = new FormData();
    Utilities.convertModelToFormData(formValue, formData);
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      this.selectedFiles.forEach(file => {
        formData.append('files', file, file.name);
      });
    }
    return formData;
  }



}