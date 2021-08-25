import { Gender, AccountType } from 'src/app/_models/Users/user-for-register';
import { SocialMediaAccountResult } from 'src/app/_models/Users/user-profile-result';
import { BusinessAccountResult } from 'src/app/_models/Users/business-account';
import { StudentAccountResult } from 'src/app/_models/Users/student-account';

export interface StudentAccountForEdit
{
    id: number;
    userName: string;
    fullName: string;

    firstName: string;
    lastName: string;
    enFullName: string;

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
    birthDay: Date | string;

    languages: number[];
    interestsJobs: number[];
    generalSkills: number[];
    personalSkills: number[];
    hobbies: number[];
     
    configuration: string;
    socialMediaAccounts: SocialMediaAccountResult;

    studentAccountData: StudentAccountResult;
    businessAccountData: BusinessAccountResult;
    // serviceProviderAccountData: ServiceProviderAccount;
}