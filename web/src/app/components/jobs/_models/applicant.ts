import { UserNameAndMainImage } from 'src/app/_models/Users/User';
import { JobOfferCard, JobOfferReturn, JobOfferRow } from './job-offer';

export interface Applicant {
}

export interface ApplicantCreate {
}

export interface ApplicantUpdate {
    id: number;
    status: ApplicantStatus;
}

export interface ApplicantResult {
    id: number;
    userId: number;
    user: UserNameAndMainImage;
    status: ApplicantStatus;
    statusDescription: string;
    createdDate: Date | string;
    updatedDate: Date | string;
    hasSeen: boolean;
}

export interface ApplicantReturn {
    id: number;
    userId: number;
    user: UserNameAndMainImage;
    status: ApplicantStatus;
    statusDescription: string;
    createdDate: Date | string;
    updatedDate: Date | string;
    jobOfferId: number;
    jobOffer: JobOfferCard;
    hasSeen: boolean;
    // التقييم الذي حصل عليه العامل
    workerRating: number;
    workerRatingComment: string;

    // التقييم الذي حصل عليه صاحب العمل (الموظف)
    employerRating: number;
    employerRatingComment: string;
}

export interface RatingTheEmployerByTheWorker {
    applicantId: number;
    rating: number;
    comment: string;
}

export interface RatingTheWorkerByTheEmployer {
    applicantId: number;
    rating: number;
    comment: string;
}


export enum ApplicantStatus {
    None = 0,
    Requested = 1,
    RequestAccept = 2,
    Accepted = 3,
    RequestDiscard = 4,
    Rejected = 5,
    Withdrawal = 6,
    WaitingList = 7
}