import { Component, OnInit } from '@angular/core';
import { Portfolio, PortfolioPhoto } from '../../../models/portfolio';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { PortfoliosService } from 'src/app/_services/users/portfolios.service';
import { FileUploaderOneRequest } from 'src/app/_helpers/uploader/FileUploader';
import { UploadStatus } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { Utilities } from 'src/app/_services/utilities.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modify-portfolio',
  templateUrl: './modify-portfolio.component.html',
  styleUrls: ['./modify-portfolio.component.css']
})
export class ModifyPortfolioComponent implements OnInit {
  portfolioId: number = 0;
  userId: any;
  portfolio: Portfolio;
  currentMainPhoto: PortfolioPhoto;
  uploader: FileUploaderOneRequest;
  hasBaseDropZoneOver = false;
  editPortfolioForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private alertify: AlertifyService, private formBuilder: FormBuilder,
    private appTranslation: AppTranslationService, private appTitle: AppTitleService, private portfoliosService: PortfoliosService) { }

  ngOnInit(): void {
    this.initeditForm();
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('portfolioId') || +paramMap.get('portfolioId') == 0) {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.router.navigate(['./profile/', paramMap.get('userId') ?? '']);
        return;
      }
      this.userId = paramMap.get('userId') ?? null;
      this.portfolioId = +paramMap.get('portfolioId');
      this.portfoliosService.getPortfolio(this.portfolioId).subscribe(
        (result: Portfolio) => {
          this.portfolio = result;
          if (result) { this.editPortfolioForm.patchValue(result); }
        },
        (error: any) => {
          this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
          this.router.navigate(['./profile/', paramMap.get('userId') ?? '']);
        }
      );
      console.log(this.portfolioId);
      this.initializeUploader();

      // تم اضافة ال setTimeout لحل مشكلة ال Expression has changed after it was checked.
      // setTimeout(() => {
      //   this.appTitle.changeNavgationTitle(`تذكرة رقم #${this.ticket?.id}`, ``);
      //   this.appTitle.changeTabTitle(`تذكرة رقم #${this.ticket?.id}`);
      // }, 0);
    });
  }

  getImageUrl(imageName: string, size: number): string {
    return `${this.portfoliosService.portfoliosUrl}/images/${size ?? 200}/${imageName}`;
  }

  get currentUrl(): string {
    return window.location.href;
  }

  initeditForm() {
    this.editPortfolioForm = this.formBuilder.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
    });
  }

  get editValidator() { return this.editPortfolioForm.controls; }

  updatePortfolio() {
    this.editPortfolioForm.markAllAsTouched();
    if (this.editPortfolioForm.valid) {
      this.editPortfolioForm.disable();
      this.isSubmitting = true;
      this.portfoliosService.updatePortfolio(this.editPortfolioForm.value).subscribe(
        returnPortfolio => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          if (returnPortfolio) {
            this.portfolio.title = returnPortfolio.title;
            this.portfolio.description = returnPortfolio.description;
          }
        },
        error => { this.alertify.error(error); },
        () => { });
      this.editPortfolioForm.enable();
      this.isSubmitting = false;
    }
  }

  // تجهيز رافع الملفات
  initializeUploader() {
    const maxFileSize = 1 * 1024 * 1024;
    const queueLimit = 5;

    this.uploader = new FileUploaderOneRequest({
      url: `${this.portfoliosService.portfoliosUrl}/${this.portfolioId}/images`,
      itemAlias: 'file',
      authToken: `Bearer ${localStorage.getItem('token')}`,
      queueLimit: queueLimit,
      isHTML5: true,
      allowedFileType: ['image'], //, 'pdf', 'doc', 'docx'
      additionalParameter: { portfolioId: `${this.portfolioId}` },
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: maxFileSize,
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
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
            this.portfolio.photos.push(returnPortfolio?.data);
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
    };

    this.uploader.onWhenAddingFileFailed = (item, filter) => {
      switch (filter.name) {
        case 'queueLimit':
          this.alertify.alert(this.appTranslation.getWithValue('Common.Upload.QueueLimit', queueLimit.toString()));
          break;
        case 'fileSize':
          this.alertify.alert(`${this.appTranslation.getWithValue('Common.Upload.FailureFileName', item.name)} ${Utilities.formatBytes(item.size)}، ${this.appTranslation.getWithValue('Common.Upload.FailureFileSize', Utilities.formatBytes(maxFileSize))}`);
          break;
        case 'fileType':
          this.alertify.alert(`${this.appTranslation.getWithValue('Common.Upload.FailureFileType', item.name)}`);
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

  setMainPhoto(photo: PortfolioPhoto) {
    this.portfoliosService.setMainPhoto(this.portfolioId, photo.id).subscribe(
      () => {
        this.currentMainPhoto = this.portfolio.photos.filter(p => p.isMain === true)[0];
        this.currentMainPhoto.isMain = false;
        photo.isMain = true;
      },
      () => { this.alertify.error('يوجد مشكلة في الصورة الأساسية'); }
    );
  }

  delete(id: number) {
    this.alertify.confirm("هل تريد حذف تلك الصورة", () => {
      this.portfoliosService.deletePhoto(this.portfolioId, id).subscribe(
        () => {
          this.portfolio.photos.splice(this.portfolio.photos.findIndex(p => p.id === id), 1);
          this.alertify.success("تم حذف الصورة بنجاح");
        },
        error => { this.alertify.error("حدث خطأ أثناء حذف الصورة"); }
      );
    });
  }


}
