import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { JobOffer, JobOfferDetails, NewJobOffer, PrivacyJob } from '../_models/job-offer';
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
import { UrlService } from 'src/app/_helpers/url.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modify-offer',
  templateUrl: './modify-offer.component.html',
  styleUrls: []
})
export class ModifyOfferComponent implements OnInit {
  isLoadingData = true;
  isLoadingOptions = true;
  public jobsOffersSkillsOptions: KeyValuePairResource[] = []
  public jobsCategoriesOptions: KeyValuePairResource[] = []
  public citiesOptions: KeyValuePairResource[] = []
  maxDate: NgbDate;
  minDate: NgbDate;
  @Output() updateSuccessfully: EventEmitter<JobOffer> = new EventEmitter<JobOffer>();
  updateJobsOfferForm: FormGroup;
  isSubmitting: boolean = false;
  totalHours: string = '';
  totalDays: string = '';
  public privacyJobEnum = PrivacyJob;
  previousUrl: any;
  jobOffer: JobOfferDetails;
  paramJobOfferId: number = 0;

  constructor(private appTranslation: AppTranslationService,
    private router: Router, private activatedRoute: ActivatedRoute, private urlService: UrlService,
    public permissions: PermissionsService, private appTitle: AppTitleService,
    private alertify: AlertifyService, private formBuilder: FormBuilder,
    private skillsService: SkillsService, private jobCategoriesService: JobCategoriesService,
    private citiesService: LocationsService, public authService: AuthService,
    private jobOffersService: JobOffersService) {
    // تحديد مدى بين تاريخين للاختيار بينهما
    // تاريخ اليوم الحالي
    this.minDate = HijriCalenderService.getToday();
    // نهاية أخر تاريخ يكون بعد سنتين من اليوم الحالي
    this.maxDate = HijriCalenderService.getToday(2);
    // اخذ بيانات الصفحة القادم منها لارجاعه عليها في حالة حصول خطأ ما
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      if (previousUrl != null)
        this.previousUrl = [`${previousUrl}`];
      else
        // اذا كان قادم من خلال ادخال الرابط بشكل يدوي يتم ارجاعه الى الصفحة الافتراضية
        this.previousUrl = ['/jobs', 'manage']
    });
  }

  ngOnInit(): void {
    // try { this.jobOffer. = this.authService.getCurrentUserIdUsingToken(); } catch (error) { console.log('anonymous user'); }
    // فحص هل لديه صلاحية اضافة وظيفة او ارجاعه للشاشة الاساسية
    if (this.permissions.canAddJobs) {
      // أخذ رقم العرض المراد تعديله من الرابط
      this.activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('offerId') || +paramMap.get('offerId') == 0) {
          this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
          this.router.navigate([this.previousUrl]);
          return;
        }
        this.paramJobOfferId = +paramMap.get('offerId');
        // يتم تهيئة نموذج الادخال
        this.initUpdateForm();
        // جلب بيانات القوائم من السيرفر وملئها بالبيانات
        this.getAllDefaultsValues();
      });
    } else {
      this.alertify.warning(this.appTranslation.get('Permissions.AccessDenied'));
      this.router.navigate(['']);
    }

  }

  // يتم تهيئة حقول نموذج الادخال
  initUpdateForm() {
    this.updateJobsOfferForm = this.formBuilder.group({
      id: [0, Validators.required],
      jobCategoryId: [{ value: null, disabled: true }, Validators.required],
      cityId: [{ value: null, disabled: true }, Validators.required],
      jobName: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      gender: [0, Validators.required],
      jobsNumber: ['1', [Validators.required, Validators.pattern(RegularExpression.Number)]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      startTime: [{ hour: 8, minute: 0 }, Validators.required],
      endTime: [{ hour: 12, minute: 0 }, Validators.required],
      salary: ['', [Validators.required, Validators.pattern(RegularExpression.Money)]],
      privacy: [this.privacyJobEnum.Everyone, Validators.required],
      jobsOffersSkills: [{ value: [], disabled: true }]
    }, {
      validator: [this.timeLessThanOrEqual, this.datesLessThan, this.timeMoreThanEight, this.timeLessThanThree,
      this.startDateIsBeforeToday, this.endDateIsBeforeToday]
    });

    // عند تعديل الوقت يتم استدعاء فكشن للفحص و المقارنة
    this.updateJobsOfferForm.controls.startTime.valueChanges.subscribe(x => this.onStartTimeChanged());
    this.updateJobsOfferForm.controls.endTime.valueChanges.subscribe(x => this.onEndTimeChanged());
  }


  // يجب أن يكون تاريخ بداية الفترة أكبر من تاريخ اليوم الحالي
  startDateIsBeforeToday(form: FormGroup) {
    const dateStruct: NgbDateStruct = form.controls.startDate.value;
    if (!dateStruct || !dateStruct.year || !dateStruct.month || !dateStruct.day) {
      return null;
    }
    const date = new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today ? { selectedDateIsBeforeToday: true } : null;

  }

  // يجب أن يكون تاريخ نهاية الفترة أكبر من تاريخ اليوم الحالي
  endDateIsBeforeToday(form: FormGroup) {
    const dateStruct: NgbDateStruct = form.controls.endDate.value;
    if (!dateStruct || !dateStruct.year || !dateStruct.month || !dateStruct.day) {
      return null;
    }
    const date = new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today ? { selectedDateIsBeforeToday: true } : null;
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
    return subtract.totalHours > 8 ? { moreThanEight: true } : null;
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
    let startTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.startTime.value);
    let startNgbTime = this.updateJobsOfferForm.controls.startTime.value as NgbTime;
    let endTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.endTime.value);
    let subtract = endTime.substract(startTime);
    // يجعل الفارق بين الوقتين دائماً ثلاث ساعات كأقل عدد ساعات متاحه
    if (subtract.totalHours < 3) {
      this.updateJobsOfferForm.controls.endTime.setValue({ hour: startNgbTime.hour + 3, minute: startNgbTime.minute });
    }

    // يجعل الفارق بين الوقتين دائماً لا تزيد عن ثمان ساعات
    if (subtract.totalHours > 8) {
      this.updateJobsOfferForm.controls.endTime.setValue({ hour: startNgbTime.hour + 8, minute: startNgbTime.minute });
    }

    this.showNumberOfWorkHour();

  }

  // حدث يتم تفعيله عند البدأ بتعديل الوقت
  onEndTimeChanged() {
    let startTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.endTime.value);
    let endNgbTime = this.updateJobsOfferForm.controls.endTime.value as NgbTime;
    let subtract = endTime.substract(startTime);

    // يجعل الفارق بين الوقتين دائماً ثلاث ساعات كأقل عدد ساعات متاحه
    if (subtract.totalHours < 3) {
      this.updateJobsOfferForm.controls.startTime.setValue({ hour: Math.abs(endNgbTime.hour - 3), minute: endNgbTime.minute });
    }

    // يجعل الفارق بين الوقتين دائماً لا تزيد عن ثمان ساعات
    if (subtract.totalHours > 8) {
      this.updateJobsOfferForm.controls.startTime.setValue({ hour: Math.abs(endNgbTime.hour - 8), minute: endNgbTime.minute });
    }
    this.showNumberOfWorkHour();
  }

  // يقوم بطباعة عدد الساعات
  showNumberOfWorkHour() {
    let startTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.startTime.value);
    let endTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.endTime.value);
    let subtract = endTime.substract(startTime);
    if (!subtract.equals(TimeSpan.zero)) {
      this.totalHours = subtract.toShortString();
    }
  }

  // التحقق في حالة كان تاريخ نهاية الفترة أكبر من تاريخ بداية الفترة
  datesLessThan(form: FormGroup) {
    let compareResult = NgbDateCalculator.compareDate(form.controls.startDate.value, form.controls.endDate.value);
    return (compareResult === -1 || compareResult === 0) ? null : { datesLessThan: true };
  }

  onDateSelect() {
    let substractDays = NgbDateCalculator.getDifferenceInDays(this.updateJobsOfferForm.controls.startDate.value, this.updateJobsOfferForm.controls.endDate.value);
    if (substractDays != null) {
      this.totalDays = `${substractDays++}`;
    }
  }

  // تحميل القروائم و تعبئتها من  خلال الاتصال بالسيرفر و جلب البيانات
  getAllDefaultsValues(): void {
     
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
        this.getJobOfferDetails();
      }
    );
  }

  // تفعيل الاختيار من القوائم بعد تعبئتها
  enableAllControls(): void {
    this.updateJobsOfferForm.controls.jobsOffersSkills.enable();
    this.updateJobsOfferForm.controls.jobCategoryId.enable();
    this.updateJobsOfferForm.controls.cityId.enable();
  }

  // جلب البيانات المراد تعديلها من السيرفر
  getJobOfferDetails() {
    this.isLoadingData = true;
    this.jobOffersService.getJobOffer(this.paramJobOfferId).subscribe((jobOfferResult: JobOfferDetails) => {
      debugger
      this.jobOffer = jobOfferResult;
      // اذا كان تم التقديم على هذه الوظيفه أو انتهاء وقتها فانه لا يسمح بالتعديل
      if (jobOfferResult?.applicantsNumber > 0 || jobOfferResult?.isPassStartDate == true) {
        this.alertify.error('لا يمكنك تعديل تفاصيل وظيفة تم التقديم عليها من قبل أحد الباحثين عن عمل');
        this.router.navigate(['/jobs', 'manage']);
      }
      if (jobOfferResult) {
        // console.log(TimeSpan.tryConvert(jobOfferResult.startTime).toNgbTime())
        this.updateJobsOfferForm.patchValue(jobOfferResult);
        // حقول لابد من معالجة القيمة قبل اسنادها للحقل
        this.updateJobsOfferForm.controls.jobsOffersSkills.setValue(jobOfferResult.requiredSkills.map(({ skillId }) => skillId) as [] ?? []);
        this.updateJobsOfferForm.controls.startDate.setValue(HijriCalenderService.dateToNgbDateOrNull(jobOfferResult.startDate) ?? null);
        this.updateJobsOfferForm.controls.endDate.setValue(HijriCalenderService.dateToNgbDateOrNull(jobOfferResult.endDate) ?? null);
        this.updateJobsOfferForm.controls.startTime.setValue(TimeSpan.tryConvert(jobOfferResult.startTime).toNgbTime() ?? null);
        this.updateJobsOfferForm.controls.endTime.setValue(TimeSpan.tryConvert(jobOfferResult.endTime).toNgbTime() ?? null);
      }
      // بعد التأكد من صول كل البيانات اتاحة العمل على نموذج التعديل
      this.enableAllControls();
      this.updateJobsOfferForm.enable;
    },
      error => {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.isLoadingData = false;
        this.router.navigate([this.previousUrl]);
      },
      () => {
        setTimeout(() => {
          // تغيير اسم التاب باسم الوظيفه الحالية
          this.appTitle.changeNavigationTitle(`${this.jobOffer.jobName}`, ``);
          this.appTitle.changeTabTitle(`${this.jobOffer.jobName}`);
        }, 0);
        this.isLoadingData = false;
      }
    );
  }

  get updateValidator() { return this.updateJobsOfferForm.controls; }

  // عند الضغط على زر تحديث
  updateNewJobOffer() {
    // console.log(this.updateJobsOfferForm.value);
    // console.log("Invalid Controls:", this.findInvalidControls());
    this.updateJobsOfferForm.markAllAsTouched();
    if (this.updateJobsOfferForm.valid) {
      let startTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.startTime.value);
      let endTime = TimeSpan.fromNgbTime(this.updateJobsOfferForm.controls.endTime.value);
      if (startTime.greaterThanOrEqual(endTime)) {
        this.alertify.warning('يجب أن يكون توقيت بداية الفترة قبل توقيت نهاية الفترة');
        return;
      }
      this.isSubmitting = true;
      this.updateJobsOfferForm.disable();
      let jobOffer = {} as NewJobOffer;
      Object.assign(jobOffer, this.updateJobsOfferForm.value);
      jobOffer.startDate = HijriCalenderService.tryConvertGregorianToDate(this.updateJobsOfferForm.controls.startDate.value);
      jobOffer.endDate = HijriCalenderService.tryConvertGregorianToDate(this.updateJobsOfferForm.controls.endDate.value);
      jobOffer.startTime = startTime.toString();
      jobOffer.endTime = endTime.toString();
      this.jobOffersService.updateJobOffer(jobOffer).subscribe(
        returnJobOffer => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.updateSuccessfully.emit(returnJobOffer);
          this.router.navigate(['./jobs', 'manage']);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.updateJobsOfferForm.enable(); },
        () => { this.isSubmitting = false; this.updateJobsOfferForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.updateJobsOfferForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  // console.log("Invalid Controls:", this.findInvalidControls());
  public findInvalidControls() {
    const invalid = [];
    const controls = this.updateJobsOfferForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}

