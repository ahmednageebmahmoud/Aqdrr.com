import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from 'src/app/_services/settings/locations.service';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { HobbiesService } from 'src/app/_services/settings/hobbies.service';
import { SkillsService } from 'src/app/_services/settings/skills.service';
import { LanguagesService } from 'src/app/_services/settings/languages.service';
import { JobCategoriesService } from 'src/app/_services/settings/job-categories.service';
import { EducationDegreesService } from 'src/app/_services/settings/education-degrees.service';
import { MajorsService } from 'src/app/_services/settings/majors.service';
import { UniversitiesService } from 'src/app/_services/settings/universities.service';
import { forkJoin, zip } from 'rxjs';
import { JobCategoryResult } from 'src/app/_models/Users/job-category';
import { KeyValuePairResource, KeyValueChildsPairResource } from 'src/app/_models/data/key-value-pair-resource';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { StudentAccountForEdit } from '../../models/student-account';
import { SkillForListDto, SkillType } from 'src/app/_models/Users/user-skill';
import { StudentAccountsService } from 'src/app/_services/users/student-accounts.service';
import { StudentAccountUpdate } from 'src/app/_models/Users/student-account';
import { HijriCalenderService } from 'src/app/_helpers/date-and-time/hijri-calender.service';
import { GregorianCalenderFormatterProvider } from 'src/app/_helpers/gregorian-calender.service';

@Component({
  selector: 'app-edit-jobs-searcher',
  templateUrl: './edit-jobs-searcher.component.html',
  styleUrls: []
})
export class EditJobsSearcherComponent implements OnInit {
  isLoadingOptions = true;
  citiesOptions: KeyValuePairResource[] = [];
  hobbiesOptions: KeyValuePairResource[] = [];
  generalSkillsOptions: SkillForListDto[] = [];
  personalSkillsOptions: SkillForListDto[] = [];
  languagesOptions: KeyValuePairResource[] = [];
  jobCategoriesOptions: JobCategoryResult[] = [];
  educationDegreesOptions: KeyValueChildsPairResource[] = [];
  educationLevelsOptions: KeyValuePairResource[] = [];
  certificatesOptions: KeyValuePairResource[] = [];
  majorsOptions: KeyValueChildsPairResource[] = [];
  subMajorsOptions: KeyValuePairResource[] = [];
  universitiesOptions: KeyValuePairResource[] = [];

  studentAccount: StudentAccountForEdit;
  maxDate: any;
  public GenderEnum = Gender;
  edtStudentAccountForm: FormGroup;
  isSubmitting: boolean = false;
  citiesList: KeyValuePairResource[] = [];

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private locationsService: LocationsService,
    private hobbiesService: HobbiesService,
    private skillsService: SkillsService,
    private languagesService: LanguagesService,
    private jobCategoriesService: JobCategoriesService,
    private educationDegreesService: EducationDegreesService,
    private majorsService: MajorsService,
    private universitiesService: UniversitiesService,
    private router: Router,
    private studentAccountsService: StudentAccountsService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.studentAccount = data['user'];
    });
    this.initEdtForm();
    this.getAllDefualtsValues();
    this.maxDate = HijriCalenderService.getToday(-17);

  }

  getAllDefualtsValues() {
    zip(
      this.locationsService.getCitiesList(),
      this.hobbiesService.getHobbiesAsList(),
      this.skillsService.getSkillsAsList(),
      this.languagesService.getLanguagesAsList(),
      this.educationDegreesService.getEducationDegreesAsList(),
      this.educationDegreesService.getCertificatesAsList(),
      this.majorsService.getMajorsAsList(),
      this.universitiesService.getUniversitiesAsList(),
      this.jobCategoriesService.getJobCategoriesAsList(),
    ).subscribe(
      ([locations, hobbies, skills, languages, educationDegrees, certificates, majors, universities, jobCategories]) => {
        this.citiesOptions = locations;
        this.hobbiesOptions = hobbies;
        this.generalSkillsOptions = [...(<SkillForListDto[]>skills).filter(s => s.type === SkillType.General)];
        this.personalSkillsOptions = [...(<SkillForListDto[]>skills).filter(s => s.type === SkillType.Personal)];
        this.languagesOptions = languages;
        this.jobCategoriesOptions = jobCategories;
        this.universitiesOptions = universities;
        this.certificatesOptions = certificates;
        this.educationDegreesOptions = <KeyValueChildsPairResource[]>educationDegrees;
        this.majorsOptions = <KeyValueChildsPairResource[]>majors;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.onChangeLoadSubMajors(+this.selectedMajor?.majorId ?? 0);
        this.onChangeLoadEducationLevels(+this.selectedEducationsDegree?.educationDegreeId ?? 0);
        this.enableAllControls();
      }
    );
  }

  enableAllControls() {
    this.edtStudentAccountForm.controls.cityId.enable();
    this.edtStudentAccountForm.controls.jobCategories.enable();
    this.edtStudentAccountForm.controls.languages.enable();
    this.edtStudentAccountForm.controls.generalSkills.enable();
    this.edtStudentAccountForm.controls.personalSkills.enable();
    this.edtStudentAccountForm.controls.hobbies.enable();
  }

  initEdtForm() {
    this.edtStudentAccountForm = this.formBuilder.group({
      id: [this.studentAccount.id, Validators.required],
      arFirstName: [this.studentAccount.firstName ?? '', Validators.required],
      arLastName: [this.studentAccount.lastName ?? '', Validators.required],
      enFullName: [this.studentAccount.enFullName ?? '', [Validators.required]],
      gender: [this.studentAccount.gender ?? '', Validators.required],
      cityId: [{ value: this.studentAccount.cityId ?? '', disabled: true }, Validators.required],
      birthDay: [HijriCalenderService.dateToNgbDateOrNull(this.studentAccount.birthDay) ?? null],
      socialStatus: [this.studentAccount.studentAccountData?.socialStatus ?? 0],
      about: [this.studentAccount.studentAccountData?.about ?? '', Validators.maxLength(500)],
      dayAvailability: [this.studentAccount.studentAccountData?.dayAvailability ?? 0],
      jobCategories: [{ value: this.studentAccount.interestsJobs ?? [], disabled: true }],
      universityId: [this.studentAccount.studentAccountData?.universityId ?? 0],
      certificateId: [this.studentAccount.studentAccountData?.certificate ?? 0],
      educationsDegreeId: [this.selectedEducationsDegree?.educationDegreeId ?? 0],
      educationLevelId: [this.studentAccount.studentAccountData?.educationLevelId ?? 0],
      majorId: [this.selectedMajor?.majorId ?? 0],
      subMajorId: [this.studentAccount.studentAccountData?.subMajorId ?? 0],
      languages: [{ value: this.studentAccount.languages ?? [], disabled: true }],
      generalSkills: [{ value: this.studentAccount.generalSkills ?? [], disabled: true }],
      personalSkills: [{ value: this.studentAccount.personalSkills ?? [], disabled: true }],
      hobbies: [{ value: this.studentAccount.hobbies ?? [], disabled: true }],
      // status: [''],
      instagram: [this.studentAccount.socialMediaAccounts?.instagram, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      linkedin: [this.studentAccount.socialMediaAccounts?.linkedin, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      twitter: [this.studentAccount.socialMediaAccounts?.twitter, Validators.pattern(RegularExpression.SocialMediaAccounts)],
      facebook: [this.studentAccount.socialMediaAccounts?.facebook, Validators.pattern(RegularExpression.SocialMediaAccounts)]
    });
  }

  get selectedEducationsDegree() { return this.studentAccount.studentAccountData?.educationLevel; }
  get selectedMajor() { return this.studentAccount.studentAccountData?.subMajor; }

  onChangeLoadEducationLevels(eduDegreeId: number) {
    console.log('eduDegreeId:', eduDegreeId);
    this.educationLevelsOptions = [];
    if (eduDegreeId > 0)
      this.educationLevelsOptions = [...(this.educationDegreesOptions.find(ed => ed.id == +eduDegreeId)?.childs)];
  }

  onChangeLoadSubMajors(majorId: number) {
    console.log('majorId:', majorId);
    this.subMajorsOptions = [];
    if (majorId > 0)
      this.subMajorsOptions = [...(this.majorsOptions.find(ed => ed.id == +majorId)?.childs)];
  }

  get updateValidator() { return this.edtStudentAccountForm.controls; }

  editStudentAccount() {
    this.edtStudentAccountForm.valid;
    console.log(this.edtStudentAccountForm.value);
    console.log("Invalid Controls:", this.findInvalidControls());
    let birthDay = HijriCalenderService.tryConvertGregorianToDate(this.edtStudentAccountForm.controls.birthDay.value);
    if (this.edtStudentAccountForm.valid) {
      this.isSubmitting = true;
      this.edtStudentAccountForm.disable();
      let updatedStudentAccount = {} as StudentAccountUpdate;
      Object.assign(updatedStudentAccount, this.edtStudentAccountForm.value);
      updatedStudentAccount.birthDay = birthDay;
      this.studentAccountsService.updateStudentAccount(this.studentAccount.id, updatedStudentAccount).subscribe(
        returnStudentAccount => {
          this.alertify.success(this.appTranslation.get('Common.Messages.UpdatedSuccessfully'));
          this.router.navigate(['/profile']);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.edtStudentAccountForm.enable(); },
        () => { });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.edtStudentAccountForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }

  // console.log("Invalid Controls:", this.findInvalidControls());
  public findInvalidControls() {
    const invalid = [];
    const controls = this.edtStudentAccountForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

}
