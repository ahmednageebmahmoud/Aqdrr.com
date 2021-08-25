import { AccountType } from 'src/app/_models/Users/user-for-register';
import { SocialMediaAccountResult } from 'src/app/_models/Users/user-profile-result';
import { BusinessAccountResult } from 'src/app/_models/Users/business-account';

export interface UserBusinessProfile {
    id: number;
    fullName: string;
    arFullName: string;
    enFullName: string;
    cityId: number;
    accountType: AccountType;
    socialMediaAccounts: SocialMediaAccountResult;
    businessAccountData: BusinessAccountResult;
}
