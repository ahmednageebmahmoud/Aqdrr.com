import { AccountType, Gender } from 'src/app/_models/Users/user-for-register';
import { SocialMediaAccountResult } from 'src/app/_models/Users/user-profile-result';

export interface VisitorAccountForEdit
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
}