import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Utilities } from 'src/app/_services/utilities.service';
import { UploadStatus, UploadHandlerResult } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { Portfolio } from '../../../models/portfolio';
import { PortfoliosService } from 'src/app/_services/users/portfolios.service';
import { Photo } from 'src/app/_models/Users/Photo';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/Users/User';
import { KeyValuePairResource, KeyValueResource } from 'src/app/_models/data/key-value-pair-resource';
import { Key } from 'protractor';
import { FileUploaderOneRequest } from 'src/app/_helpers/uploader/FileUploader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent implements OnInit {
  @Output() addSuccessfully: EventEmitter<Portfolio> = new EventEmitter<Portfolio>();
  addPortfolioForm: FormGroup;
  isSubmitting: boolean = false;

  @Input() photos: Photo[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploaderOneRequest;
  hasBaseDropZoneOver = false;
  currentMain: Photo;
  user: User;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private portfoliosService: PortfoliosService,
    private router: Router) { }

  ngOnInit() {
    this.initializeUploader();
    this.initAddForm();
  }


  initAddForm() {
    this.addPortfolioForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
    });
  }

  get addValidator() { return this.addPortfolioForm.controls; }

  addNewPortfolio() {
    if (this.addPortfolioForm.valid && this.uploader.queue.length > 0) {
      this.isSubmitting = true;
      this.addPortfolioForm.disable();
      this.uploader.uploadAllFiles();
    } else {
      if (this.uploader.queue.length <= 0)
        this.alertify.error('اختر صورة واحده على الأقل');
      else
        this.alertify.error(this.appTranslation.get('Common.Data.Invalid'));
      this.addPortfolioForm.enable();
      this.addPortfolioForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  // تجهيز رافع الملفات
  initializeUploader() {
    const maxFileSize = 1 * 1024 * 1024;
    const queueLimit = 5;

    this.uploader = new FileUploaderOneRequest({
      url: `${this.portfoliosService.portfoliosUrl}/images`,
      itemAlias: 'file',
      authToken: `Bearer ${localStorage.getItem('token')}`,
      queueLimit: queueLimit,
      isHTML5: true,
      allowedFileType: ['image'], //, 'pdf', 'doc', 'docx'
      // additionalParameter: {  replyId: '0' },
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: maxFileSize,
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onBuildItemForm = (fileItem, form) => {
      const formData: KeyValueResource[] = [];
      Utilities.convertModelToKeyValue(this.addPortfolioForm.value, formData);
      formData.forEach(data => { form.append(data.key, data.value); });
    };

    this.uploader.onErrorItem = (item, Response, status, headers) => {
      this.alertify.alert(this.appTranslation.getWithValue('Common.Upload.UnknownError', item._file.name));
    };

    this.uploader.onProgressItem = (fileItem, progress) => {
      console.log(`onProgressItem ${fileItem._file.name}`);
    };

    this.uploader.onProgressAll = (progress) => {
      console.log('onProgressAll');
    };

    this.uploader.onSuccessItem = (item, Response, status, headers) => {
      console.log('onSuccessItem');
      if (Response) {
        var returnPortfolio = JSON.parse(Response);
        if (Response) {
          if (<UploadStatus>returnPortfolio.status === <UploadStatus>UploadStatus.success ||
            <UploadStatus>returnPortfolio.status === <UploadStatus>UploadStatus.successWithSomeFailure) {
            this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
            this.router.navigate(['./profile']);
            if (<UploadStatus>returnPortfolio.status === <UploadStatus>UploadStatus.successWithSomeFailure) {
              this.alertify.info(returnPortfolio.message);
            }
          } else if (<UploadStatus>returnPortfolio.status === <UploadStatus>UploadStatus.failure) {
            this.alertify.error(returnPortfolio.message);
          }
        }
      }
    };

    this.uploader.onCompleteAll = () => {
      console.log('onCompleteAll');
      this.addPortfolioForm.reset();
      this.addPortfolioForm.enable();
      this.isSubmitting = false;
    };

    this.uploader.onWhenAddingFileFailed = (item, filter) => {
      debugger;
      switch (filter.name) {
        case 'queueLimit':
          this.alertify.alert(this.appTranslation.getWithValue('Common.Upload.QueueLimit', queueLimit.toString()));
          break;
        case 'fileSize':
          this.alertify.alert(`${this.appTranslation.getWithValue('Common.Upload.FailureFileName', item.name)} ${Utilities.formatBytes(item.size)}، ${this.appTranslation.getWithValue('Common.Upload.FailureFileSize', Utilities.formatBytes(maxFileSize))}`);
          break;
        case 'fileType':
          this.alertify.alert(this.appTranslation.getWithValue('Common.Upload.FailureFileType', item.name));
          break;
        default:
          this.alertify.alert(this.appTranslation.getWithValue('Common.Upload.UnknownError', item.name));
          break;
      }
    };

    this.uploader.onErrorItem = (item, response: string, status, headers) => {
      this.alertify.alert(response);
    };
  }



  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


}
