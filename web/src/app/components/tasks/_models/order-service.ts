import { UserNameAndMainImage } from 'src/app/_models/Users/User';
import { TaskDetailsWithTasker, UserTask } from 'src/app/_models/Users/user-tasks';

export interface OrderService {
    id: number;
    userTaskId: number;
    userTask: UserTask;
    startDate: Date | string;
    timing: TaskerResponse;
    timingDescription: string;
    orderStage: OrderStage;
    orderStageDescription: string;
    taskerResponse: TaskerResponse;
    taskerResponseDescription: string;
    updatedDate: Date | string;
    createdDate: Date | string;
    price: number;
    isAllowToRate: boolean;
    rating: number;
}

export interface OrderServiceDetails {
    id: number;
    userTaskId: number;
    userTask: TaskDetailsWithTasker;
    startDate: Date;
    isBookDateExceeded: boolean;
    timing: TaskerResponse;
    timingDescription: string;
    orderStage: OrderStage;
    orderStageDescription: string;
    taskerResponse: TaskerResponse;
    taskerResponseDescription: string;
    updatedDate: Date;
    createdDate: Date;
    price: number;
    cityId: number;
    cityName: number;
    address: string;
    description: string;
    userId: number;
    userName: number;
    taskerComment: string;
    isAllowToRate: boolean;
    rating: number;
    ratingComment: string;
    user: UserNameAndMainImage;
}

export interface NewOrderService {
    userTaskId: number;
    description: string;
    address: string;
    startDate: Date | string;
    timing: number;
}

export interface TaskerConfirmOrDiscardOrder
{
    id: number;
    taskerComment: string;
    taskerResponse: TaskerResponse;
}

export interface RatingTheOrder
{
    orderId: number;
    rating: number;
    ratingComment: string;
}

export enum RequestTaskTime {

    None = 0,
    From8AMTo12PM = 1,
    From12PMTo5PM = 2,
    From5PMTo9PM = 3,
    From9PMTo1AM = 4,
}

export enum TaskerResponse {
    Waiting = 0,
    Accepted = 1,
    Rejected = 2,
}

export enum OrderStage {
    New = 0,
    TheRequestApproval = 1,
    TheRequestRejected = 2,
    WorkingOnIT = 3,
    CancellingOrder = 4,
    Done = 5,
    NotAccomplished = 6,
}
