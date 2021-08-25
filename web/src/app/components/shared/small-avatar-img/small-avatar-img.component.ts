import { Component, Input, OnInit } from '@angular/core';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-small-avatar-img',
  templateUrl: './small-avatar-img.component.html',
  styleUrls: []
})
export class SmallAvatarImgComponent implements OnInit {
  @Input('ImageName') imageName: String = '';
  @Input('Gender') gender: Gender;
  @Input('Size') size: Number ;
  @Input('heightWidthSameSize') heightWidthSameSize: boolean = true;
  @Input('height') height: string = '';
  @Input('width') width: string = ''
  @Input('ImgClass') class: string = 'job-details-avatar mr-2';

  constructor() { }

  ngOnInit(): void {
    if (this.heightWidthSameSize === true) {
      this.height = `${this.size}`;
      this.width = `${this.size}`;
    }
  }

   getHeight() {
    return this.height;
  }

   getWidth() {
    return this.width;
  }

  get imageUrl() {

    if (this.imageName != '' && this.imageName != null) {
      return `https://res.cloudinary.com/${environment.CloudinaryAccountName}/image/upload/c_fill,h_${+this.size + 5},w_${+this.size + 5}/v1596887327/${this.imageName}.jpg`;
    }
    else
      if (<Gender>this.gender === <Gender>Gender.male) {
        return 'assets/img/team/m-avatar.jpg';
      } else if (<Gender>this.gender === <Gender>Gender.female) {
        return 'assets/img/team/w-avatar.jpg';
      }
    return 'assets/img/team/m-avatar.jpg';
  }

}
