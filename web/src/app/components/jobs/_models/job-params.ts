import { Gender } from 'src/app/_models/Users/user-for-register';
import { PaginationResult, Pagination } from 'src/app/_models/data/Pagination';
import { PrivacyJob } from './job-offer';

export interface JobParams {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    sortBy: string;
    filterText: string;
    isSortAscending: boolean;
    refreshCounter: boolean;
    userId: number;
    cityId: number;
    categories: number[];
    skills: number[];
    gender: Gender;
    privacy: PrivacyJob;
    startDate: Date;
    endDate: Date;
    matchUserProfile: MatchUserProfile;
    isCountCompleted:boolean;
    isPassStartDate:boolean;
}

export class JobPaginationResult<T>  {
    items: T;
    pagination: JobParams;
}

export enum MatchUserProfile {
    AnyThing = 0,
    MatchMyProfile = 1,
}