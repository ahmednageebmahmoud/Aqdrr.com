import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';
import { AuthService } from 'src/app/_services/users/auth.service';
import { Photo } from 'src/app/_models/Users/Photo';
import { UploadHandlerResult, UploadStatus } from 'src/app/_helpers/uploader/uploadHandlerResult';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { UserService } from 'src/app/_services/users/User.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styles: [`
  .picture-container {
    position: relative;
    cursor: pointer;
    text-align: center;
  }
  
  .picture input[type="file"] {
    cursor: pointer;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0 !important;
    position: absolute;
    top: 0;
    width: 100%;
  }
  `]
})
export class ProfileImageComponent implements OnInit {
  photoUrl: string;
  @Input('UserProfileData') userProfile: UserProfileResult;
  @Output() addSuccessfully: EventEmitter<Photo> = new EventEmitter<Photo>();
  isUploading: boolean = false;
  uploadResponse: UploadHandlerResult<Photo>;
  uploadStatusEnum = UploadStatus;
  allowTypeToUpload = ['Image/png', 'Image/jpeg', 'Image/jpg', 'Image/gif', 'Image/bmp'];
  allowTypeToUploadNames = ['png', 'jpeg', 'jpg', 'gif', 'bmp'];


  constructor(public authService: AuthService,
    private appTranslation: AppTranslationService, private alertify: AlertifyService,
    private userService: UserService) { }

  ngOnInit(): void {
    if (this.isCurrentUserProfile)
      this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
    else
      this.photoUrl = this.userProfile.photoURL;
  }

  get isCurrentUserProfile(): boolean {
    return this.authService.isCurrentUserProfile(this.userProfile.id);
  }

  isFemaleAccount(): boolean {
    if (this.userProfile?.gender as Gender === Gender.female as Gender) {
      return true;
    } else { return false; }
  }

  onFileChange(event, files: FileList) {
    if (this.isUploading) {
      this.alertify.warning(`يتم رفع صور الرجاء الانتظار لحين الانتهاء`);
      return;
    }
    const maxFileSize = 2; // MB
    if (event.target.files.length == 1) {
      let file: File = <File>files[0];
      if (!this.allowTypeToUpload.find(fn => fn.trim().toLowerCase() === file.type.trim().toLowerCase())) {
        this.alertify.alert(`تحقق من نوع الملف الذي قمت باختياره ، يسمح فقط بالصور احد الأنواع التالية <br >
                ${this.allowTypeToUploadNames.join(' , ')}`);
        return;
      }
      if (file.size > (maxFileSize * 1024 * 1024)) {
        this.alertify.warning(`${event.target.files.name} <br > يجب أن لا يتجاوز حجم الصورة ${maxFileSize} ميقا بايت.`);
        return;
      }
      this.isUploading = true;
      this.startUploadProfilePhoto(file);
    }
  }
  //     
  startUploadProfilePhoto(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.userService.updateProfilePhoto(formData, +this.authService.getCurrentUserIdUsingToken()).subscribe(
      returnPhoto => {
        this.uploadResponse = returnPhoto;
        if (<UploadStatus>returnPhoto.status === <UploadStatus>UploadStatus.success ||
          <UploadStatus>returnPhoto.status === <UploadStatus>UploadStatus.successWithSomeFailure) {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.authService.refreshUserProfilePhoto(returnPhoto.data);
          this.addSuccessfully.emit(returnPhoto.data);
        } else if (<UploadStatus>returnPhoto.status === <UploadStatus>UploadStatus.failure) {
          this.alertify.error(returnPhoto.message);
        }
      },
      error => {
        this.alertify.error(error);
        this.isUploading = false;
      },
      () => { this.isUploading = false; });
  }



}
