import { Gender, AccountType } from 'src/app/_models/Users/user-for-register';
import { SocialMediaAccountResult } from 'src/app/_models/Users/user-profile-result';
import { StudentAccountResult } from 'src/app/_models/Users/student-account';
import { BusinessAccountResult } from 'src/app/_models/Users/business-account';
import { TaskerAccountResult } from 'src/app/_models/Users/tasker-account';

export interface TaskerAccountForEdit
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
     
    configuration: string;
    socialMediaAccounts: SocialMediaAccountResult;

    studentAccountData: StudentAccountResult;
    businessAccountData: BusinessAccountResult;
    taskerAccountData: TaskerAccountResult;
}