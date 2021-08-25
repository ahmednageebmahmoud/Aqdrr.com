import { Gender, AccountType } from './user-for-register';
import { BusinessAccountResult } from './business-account';
import { StudentAccountResult } from './student-account';
import { UserLanguageResult } from './language';
import { UserJobCategoryResult } from './job-category';
import { UserHobbyResult } from './hobby';
import { UserSkillResult } from './user-skill';
import { TaskerAccountResult } from './tasker-account';
import { UserTask } from './user-tasks';
import { Portfolio } from 'src/app/components/profile/models/portfolio';
import { RatingAndReview } from './rating-and-review';

export interface UserProfileResult {
    id: number;
    userName: string;
    fullName: string;
    jobTitle: string;
    genderName: string;
    gender: Gender;
    cityId: number;
    cityName: string;
    accountType: AccountType;
    accountTypeName: string;
    photoURL: string;
    phoneNumber: string;
    whatsApp: string;
    email: string;
    age: number;
    displayContactInfo: boolean;

    lastActive: Date;
    createdDate: Date;

    configuration: string;
    socialMediaAccounts: SocialMediaAccountResult;
    totalRating: number;
    // photos: PhotoForDetailsDto[];

    // extendedServiceProviderAccount: ExtendedServiceProviderAccount;
    businessAccountData: BusinessAccountResult;
    studentAccountData: StudentAccountResult;
    taskerAccountData: TaskerAccountResult;

    ratingsGot: RatingAndReview[];
    languages: UserLanguageResult[];
    interestsJobs: UserJobCategoryResult[];
    generalSkills: UserSkillResult[];
    personalSkills: UserSkillResult[];
    hobbies: UserHobbyResult[];
    favoriteTasks: UserTask[];
    portfolios: Portfolio[];
}




export interface SocialMediaAccountResult {
    instagram: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    websiteUrl: string;
}

