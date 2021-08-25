import { Gender } from 'src/app/_models/Users/user-for-register';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { TimeSpan } from 'src/app/_helpers/date-and-time/time-span';
import { JobCategoryResult, JobCategoryWithIcon } from 'src/app/_models/Users/job-category';
import { UserCompany, UserNameAndMainImage } from 'src/app/_models/Users/User';
import { OfferSkillResult } from 'src/app/_models/Users/user-skill';
import { ApplicantResult } from './applicant';

export interface JobOffer {
  jobCategoryId: number;
  jobName: string;
  description: string;
  gender: Gender;
  jobsNumber: number;
  startDate: Date | string;
  endDate: Date | string;
  startTime: TimeSpan | string;
  endTime: TimeSpan | string;
  salary: number;
  cityId: number;
  privacy: PrivacyJob;
  jobsOffersSkills: KeyValuePairResource[];
}


export interface NewJobOffer {
    jobCategoryId: number;
    jobName: string;
    description: string;
    gender: Gender;
    jobsNumber: number;
    startDate: Date | string;
    endDate: Date | string;
    startTime: TimeSpan | string;
    endTime: TimeSpan | string;
    salary: number;
    cityId: number;
    privacy: PrivacyJob;
    jobsOffersSkills: KeyValuePairResource[];
}

export interface JobOfferCard
{
    id: number;
    jobCategoryId: number;
    cityId: number;
    jobName: string;
    description: string;
    jobsNumber: number;
    startDate: Date | string;
    endDate: Date | string;
    totelDays: number;
    startTime: TimeSpan;
    endTime: TimeSpan;
    totelHours: TimeSpan;
    salary: number;
    companyId: number;
    company: UserNameAndMainImage;
    isClosed: boolean;
    isPassStartDate: boolean;
    isPassEndDate: boolean;
    isCountCompleted: boolean;
}

export interface JobOfferReturn
{
    id: number;
    jobCategoryId: number;
    cityId: number;
    jobName: string;
    description: string;
    gender: number;
    jobsNumber: number;
    startDate: Date | string;
    endDate: Date | string;
    totelDays: number;
    startTime: TimeSpan;
    endTime: TimeSpan;
    totelHours: TimeSpan;
    salary: number;
    jobsOffersSkills: KeyValuePairResource[];
    isClosed: boolean;
    updatedDate: Date | string;
    createdDate: Date | string;
}

export interface JobOfferRow {
    id: number;
   
    jobCategoryId: number;
    
    jobCategory: JobCategoryWithIcon;
    cityId: number;
    city: KeyValuePairResource;
    jobName: string;
    gender: Gender;
    genderDescription: string;
    jobsNumber: number;
    startDate: Date | string;
    endDate: Date | string;
    totelDays: number;
    startTime: TimeSpan | string;
    endTime: TimeSpan | string;
    totelHours: string;
    salary: number;
    createdDate: Date | string;
    company: UserNameAndMainImage;
    applicants: number;
    isPassStartDate: boolean;
    isPassEndDate: boolean;
    isClosed: boolean;
    isCountCompleted: boolean;
}

export interface JobOfferDetails {
    id: number;
    jobCategoryId: number;
    jobCategory: JobCategoryResult;
    cityId: number;
    city: KeyValuePairResource;
    jobName: string;
    gender: Gender;
    genderDescription: string;
    jobsNumber: number;
    startDate: Date | string;
    endDate: Date | string;
    totelDays: number;
    startTime: TimeSpan;
    endTime: TimeSpan;
    totelHours: TimeSpan;
    salary: number;
    createdDate: Date | string;
    companyId: number;
    company: UserCompany;
    privacy: PrivacyJob;
    requiredSkills: OfferSkillResult[];
    isContentFilterSkill: boolean;
    isPassStartDate: boolean;
    isPassEndDate: boolean;
    isClosed: boolean;
    description: string;
    applicantsNumber: number;
    applicants: ApplicantResult[];
    isRegistedBefore: boolean;
    isCountCompleted: boolean;
}

export interface AccountEmploymentBagsBalance {
    /**هل لديه رصيد حقائب */
    isHasBalance: boolean;
    /**حالة الاشتراك الخاص به و الرصيد */
    balanceStatus: BalanceStatus;
    /**وصف حالة الرصيد بشكل نصي */
    message: string;
    /** عدد الحقائب كامله في الاشتراكات الخاصه بالمستخدم*/
    employmentBags: number;
    /**الرصيد المتبقي من الحقائب */
    remainingBalance: number;
    /**رصيد محجوز في العروض الوظيفيه ولم يتم قبول أي طلب عليه لخصمه */
    lockedBalance: number;
    /**تواريخ انتهاء الاشتراكات الخاصه به */
    expireAt: Date | string[];
}

export enum BalanceStatus {
    NoActiveSubscriptions = 0,
    NoBalanceLeft = 1,
}

export enum PrivacyJob {
    None = 0,
    OnlyInvitation = 1,
    Everyone = 2
}
