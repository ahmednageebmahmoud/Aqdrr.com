import { Component, OnInit, Input } from '@angular/core';
import { JobOfferRow } from '../_models/job-offer';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AuthService } from 'src/app/_services/users/auth.service';
import { PermissionsService } from 'src/app/_helpers/permissions.service';


@Component({
  selector: 'app-job-offer-row',
  templateUrl: './job-offer-row.component.html'
})
export class JobOfferRowComponent implements OnInit {
  @Input('JobOffer') jobOffer: JobOfferRow;
  @Input('CurrentUserId') currentUserId: number;
  @Input('isNewDesign') isNewDesign=false;
  GenderEnum = Gender;

  @Input('imageSize') imageSize=35;
  constructor(
    private appTranslation: AppTranslationService,
    public permissions: PermissionsService,
    public authService: AuthService) { }

  ngOnInit(): void {
  }

  get getGenderTitle(): string {
    if (<Gender>this.jobOffer.gender === <Gender>Gender.male) {
      return this.appTranslation.get('Common.Form.Males');
    } else if (<Gender>this.jobOffer.gender === <Gender>Gender.female) {
      return this.appTranslation.get('Common.Form.Females');
    } else if (<Gender>this.jobOffer.gender === <Gender>Gender.none) {
      return this.appTranslation.get('Common.Form.BothGender');
    }
    else { return '' }
  }

  get isOfferOwnerSameCurrentUser() {
    return this.currentUserId === +(this.jobOffer?.company?.id);
  }

  get getUserFriendlyName(): string {
    return `${this.jobOffer?.company?.firstName} ${this.jobOffer?.company?.lastName}`;
  }

}
