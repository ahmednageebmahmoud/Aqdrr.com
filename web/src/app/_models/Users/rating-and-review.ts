import { User, UserIdAndNameDto } from './User';

export interface RatingAndReview {
    id: number;
    rowId: number;
    type: RateType;
    rating: number;
    comment: string;
    details: string;
    createdDate: Date;
    ratedUserId: number;
    ratedUser: UserIdAndNameDto;
    reviewerUserId: number;
    reviewerUser: UserIdAndNameDto;
}

export interface RatingTaskOrder {
    id: number;
    name: string;
}

export interface RatingWorkerByEmployer {
    id: number;
    name: string;
}

export interface RatingEmployerByWorker {
    id: number;
    name: string;
}

export enum RateType {
    General = 0,
    ServiceProvider = 1,
    EmployerRatingTheWorker = 2,
    WorkerRatingTheEmployer = 3,
}