import { Gender } from './user-for-register';

export interface TaskerAccount {
    userId: number;
    about: string;
}

export interface TaskerAccountResult
{
    about: string;
}

export interface TaskerAccountUpdate
{
    id: number;
    arFirstName: string;
    arLastName: string;
    enFullName: string;
    cityId: number;
    gender: Gender;
    birthDay: Date | string;
    about: string;
    languages: number[];
    instagram: string;
    linkedin: string;
    twitter: string;
    facebook: string;
}