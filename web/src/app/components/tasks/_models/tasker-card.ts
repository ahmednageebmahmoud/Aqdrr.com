import { Gender } from 'src/app/_models/Users/user-for-register';
import { SocialMediaAccountResult } from 'src/app/_models/Users/user-profile-result';
import { UserTask } from 'src/app/_models/Users/user-tasks';

export interface TaskerCard
{
    id: number;
    photoUrl: string;
    publicId: string;
    fullName: string;
    cityId: number;
    cityName: string;
    gender: Gender;
    totalDoneTasks: number;
    totalRating: number;
    memberSince: Date | string;
    favoriteTasks: UserTask[];
    socialMediaAccounts: SocialMediaAccountResult;
    about: string;
}