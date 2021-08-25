import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { AccountEmploymentBagsBalance, JobOffer, NewJobOffer, PrivacyJob } from '../_models/job-offer';
import { JobOffersService } from '../_services/job-offers.service';
import { zip } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { JobCategoriesService } from 'src/app/_services/settings/job-categories.service';
import { SkillsService } from 'src/app/_services/settings/skills.service';
import { TimeSpan } from 'src/app/_helpers/date-and-time/time-span';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { NgbDateCalculator, DateCalculator } from 'src/app/_helpers/date-and-time/date';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: []
})
export class AddOfferComponent implements OnInit {
  isLoadingOptions = true;
  public jobsOffersSkillsOptions: KeyValuePairResource[] = []
  public jobsCategoriesOptions: KeyValuePairResource[] = []
  public citiesOptions: KeyValuePairResource[] = []
  maxDate: any;
  minDate: any;
  @Output() addSuccessfully: EventEmitter<JobOffer> = new EventEmitter<JobOffer>();
  addJobsOfferForm: FormGroup;
  isSubmitting: boolean = false;
  totalHours: string = '';
  totalDays: number = 0;
  // أقل راتب مطالب به
  minSalaryRequirements: number = 0;
  public privacyJobEnum = PrivacyJob;
  employmentBagsBalance: AccountEmploymentBagsBalance;
  // marn Settings ------------------------
  marnMinHourPerDay: number = 3;
  marnMaxHourPerDay: number = 12;

  constructor(private appTranslation: AppTranslationService,
    private router: Router,
    public permissions: PermissionsService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private skillsService: SkillsService,
    private jobCategoriesService: JobCategoriesService,
    private citiesService: LocationsService,
    private jobOffersService: JobOffersService) {
    this.marnMinHourPerDay = 3;
    this.marnMaxHourPerDay = 12;
    this.minDate = HijriCalenderService.getToday();
    this.maxDate = HijriCalenderService.getToday(2);
    this.route.data.subscribe(data => {
      this.employmentBagsBalance = data['employmentBagsBalance'];
      console.log('employmentBagsBalance', data['employmentBagsBalance']);
    });
  }

  ngOnInit(): void {
    
    if (this.permissions.canAddJobs) {
      this.initAddForm();
      this.getAllDefualtsValues();
    } else {
      this.alertify.warning(this.appTranslation.get('Permissions.AccessDenied'));
      this.router.navigate(['']);
    }

  }

  initAddForm() {
    this.addJobsOfferForm = this.formBuilder.group({
      jobCategoryId: [{ value: '', disabled: true }, Validators.required],
      cityId: [{ value: '', disabled: true }, Validators.required],
      jobName: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      gender: [0, Validators.required],
      jobsNumber: ['1', [Validators.required, Validators.max(+this.employmentBagsBalance.remainingBalance), Validators.pattern(RegularExpression.Number)]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      startTime: [{ hour: 8, minute: 0 }, Validators.required],
      endTime: [{ hour: 12, minute: 0 }, Validators.required],
      salary: ['', [Validators.required, Validators.pattern(RegularExpression.Money)]],
      privacy: [this.privacyJobEnum.Everyone, Validators.required],
      jobsOffersSkills: [[], Validators.minLength(0)]
    }, { validator: [this.timeLessThanOrEqual, this.datesLessThan, this.timeMoreThanEight, this.timeLessThanThree, this.lessPaidCalculation] });

    this.addJobsOfferForm.controls.startTime.valueChanges.subscribe(x => {this.onStartTimeChanged(); this.onSalaryChanged();});
    this.addJobsOfferForm.controls.endTime.valueChanges.subscribe(x => {this.onEndTimeChanged(); this.onSalaryChanged();});
    this.addJobsOfferForm.controls.salary.valueChanges.subscribe(x => this.onSalaryChanged());
  }



  // يظهر فاليديشن عندما يكون وقت النهاية قبل وقت البداية
  timeLessThanOrEqual(form: FormGroup) {
    let startTime = TimeSpan.fromNgbTime(form.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(form.controls.endTime.value);
    return startTime.lessThan(endTime) === true ? null : { timeLessThan: true };
  }

  // يظهر فاليديشن عندما في حالة اختيار أكثر من ثمان ساعات
  timeMoreThanEight(form: FormGroup) {
    let startTime = TimeSpan.fromNgbTime(form.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(form.controls.endTime.value);
    let subtract = endTime.substract(startTime);
    return subtract.totalHours > 12 ? { moreThanEight: true } : null;
  }

  // يظهر فاليديشن عندما في حالة اختيار أقل من ثلاث ساعات
  timeLessThanThree(form: FormGroup) {
    let startTime = TimeSpan.fromNgbTime(form.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(form.controls.endTime.value);
    let subtract = endTime.substract(startTime);
    return subtract.totalHours < 3 ? { lessThanThree: true } : null;
  }

  // حدث يتم تفعيله عند البدأ بتعديل الوقت
  onStartTimeChanged() {
    let startTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.startTime.value);
    let startNgbTime = this.addJobsOfferForm.controls.startTime.value as NgbTime;
    let endTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.endTime.value);
    let subtract = endTime.substract(startTime);
    console.log(startNgbTime);
    // يجعل الفارق بين الوقتين دائماً ثلاث ساعات كأقل عدد ساعات متاحه
    if (subtract.totalHours < 3) {
      this.alertify.warning('يجب أن لا تقل عدد الساعات عن 3 ساعه باليوم الواحد');
      this.addJobsOfferForm.controls.endTime.setValue({ hour: startNgbTime.hour + 3, minute: startNgbTime.minute });
    }

    // يجعل الفارق بين الوقتين دائماً لا تزيد عن ثمان ساعات
    if (subtract.totalHours > 12) {
      this.alertify.warning('يجب أن لا تزيد عدد الساعات عن 12 ساعه باليوم الواحد');
      this.addJobsOfferForm.controls.endTime.setValue({ hour: startNgbTime.hour + 12, minute: startNgbTime.minute });
    }
    this.showNumberOfWorkHour();
  }

  // حدث يتم تفعيله عند البدأ بتعديل الوقت
  onEndTimeChanged() {

    let startTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.endTime.value);
    let endNgbTime = this.addJobsOfferForm.controls.endTime.value as NgbTime;
    let subtract = endTime.substract(startTime);

    // يجعل الفارق بين الوقتين دائماً ثلاث ساعات كأقل عدد ساعات متاحه
    if (subtract.totalHours < 3) {
      this.alertify.warning('يجب أن لا تقل عدد الساعات عن 3 ساعه باليوم الواحد');
      this.addJobsOfferForm.controls.startTime.setValue({ hour: Math.abs(endNgbTime.hour - 3), minute: endNgbTime.minute });
    }

    // يجعل الفارق بين الوقتين دائماً لا تزيد عن ثمان ساعات
    if (subtract.totalHours > 12) {
      this.alertify.warning('يجب أن لا تزيد عدد الساعات عن 12 ساعه باليوم الواحد');
      this.addJobsOfferForm.controls.startTime.setValue({ hour: Math.abs(endNgbTime.hour - 12), minute: endNgbTime.minute });
    }
    this.showNumberOfWorkHour();
  }

  // يقوم بطباعة عدد الساعات
  showNumberOfWorkHour(): number {
    let startTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.endTime.value);
    let subtract = endTime.substract(startTime);
    if (!subtract.equals(TimeSpan.zero)) {
      this.totalHours = subtract.toShortString();
      return subtract.totalHours;
    } else return 0;

  }


  datesLessThan(form: FormGroup) {
    let compareResult = NgbDateCalculator.compareDate(form.controls.startDate.value, form.controls.endDate.value);
    return (compareResult === -1 || compareResult === 0) ? null : { datesLessThan: true };
  }

  onDateSelect() {
    let substractDays = NgbDateCalculator.getDifferenceInDays(this.addJobsOfferForm.controls.startDate.value, this.addJobsOfferForm.controls.endDate.value);
    if (substractDays != null) {
      this.totalDays = substractDays++;
    }
  }

  // يتم تفعيله عند تغيير قيمة الراتب
  onSalaryChanged() {
    console.log('NumberOfWorkHour', this.showNumberOfWorkHour());

    this.minSalaryRequirements = +this.showNumberOfWorkHour() * +this.totalDays * 25;
  }

  lessPaidCalculation(form: FormGroup) {
    let salary = +form.controls.salary.value;
    // this.minSalaryRequirements = +this.showNumberOfWorkHour() * +this.totalDays * 25;
    // return +salary >= +this.minSalaryRequirements ? null : { salaryLessThanRequirements: true };
    return { salaryLessThanRequirements: true };
  }

  getAllDefualtsValues(): void {
    zip(
      this.skillsService.getSkillsAsList(),
      this.jobCategoriesService.getJobCategoriesAsList(),
      this.citiesService.getCitiesList(),
    ).subscribe(
      ([jobsOffersSkills, jobsCategories, cities]) => {
        this.jobsOffersSkillsOptions = <KeyValuePairResource[]>jobsOffersSkills;
        this.jobsCategoriesOptions = <KeyValuePairResource[]>jobsCategories;
        this.citiesOptions = <KeyValuePairResource[]>cities;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.enableAllControls();
        this.addJobsOfferForm.enable;
      }
    );
  }

  enableAllControls(): void {
    this.addJobsOfferForm.controls.jobsOffersSkills.enable();
    this.addJobsOfferForm.controls.jobCategoryId.enable();
    this.addJobsOfferForm.controls.cityId.enable();
  }

  get addValidator() { return this.addJobsOfferForm.controls; }

  addNewJobOffer() {
    this.addJobsOfferForm.markAllAsTouched();
    if (this.addJobsOfferForm.valid) {
      let startTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.startTime.value);
      let endTime = TimeSpan.fromNgbTime(this.addJobsOfferForm.controls.endTime.value);
      if (startTime.greaterThanOrEqual(endTime)) {
        this.alertify.warning('يجب أن يكون توقيت بداية الفترة قبل توقيت نهاية الفترة');
        return;
      }
      this.isSubmitting = true;
      this.addJobsOfferForm.disable();
      let jobOffer = {} as NewJobOffer;
      Object.assign(jobOffer, this.addJobsOfferForm.value);
      jobOffer.startDate = HijriCalenderService.tryConvertGregorianToDate(this.addJobsOfferForm.controls.startDate.value);
      jobOffer.endDate = HijriCalenderService.tryConvertGregorianToDate(this.addJobsOfferForm.controls.endDate.value);
      jobOffer.startTime = startTime.toString();
      jobOffer.endTime = endTime.toString();
      this.jobOffersService.addNew(jobOffer).subscribe(
        returnJobOffer => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.addSuccessfully.emit(returnJobOffer);
          this.router.navigate(['./jobs', 'manage']);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.addJobsOfferForm.enable(); },
        () => { this.isSubmitting = false; this.addJobsOfferForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.addJobsOfferForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }
  //public jobsOffersSkillsOptions: KeyValuePairResource[] = []

}

