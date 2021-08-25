import { Gender } from './user-for-register';

export interface VisitorAccountUpdate
{
    id: number;
    arFirstName: string;
    arLastName: string;
    enFullName: string;
    cityId: number;
    gender: Gender;
    birthDay: Date | string;
    languages: number[];
    instagram: string;
    linkedin: string;
    twitter: string;
    facebook: string;
}