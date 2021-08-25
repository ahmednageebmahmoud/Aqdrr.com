import { TaskResult } from '../settings/task';
import { UserNameAndMainImage } from './User';
import { Gender } from './user-for-register';

export interface UserTask {
    id: number;
    taskId: number;
    task: TaskResult;
    price: number;
    description: string;
    isEnabled: boolean;
    taskerId: number;
    taskerCard: UserNameAndMainImage;
}

export interface TaskServiceCard {
    id: number;
    taskId: number;
    task: TaskResult;
    price: number;
    description: string;
    taskerId: number;
    taskerCard: TaskerServiceCard;
}

export interface TaskerServiceCard {
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
}

export interface TaskDetailsWithTasker {
    id: number;
    taskId: number;
    task: TaskResult;
    price: number;
    description: string;
    isEnabled: boolean;
    userId: number;
    user: UserNameAndMainImage;
}
