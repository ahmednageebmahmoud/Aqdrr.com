import { ApplicantStatus } from 'src/app/components/jobs/_models/applicant';
import { OrderStage } from 'src/app/components/tasks/_models/order-service';

export interface NotificationNewApplicant {
    offerId: number;
    jobName: string;
    applicantId: number;
    applicantName: string;
}

export interface NotificationNewActionOnApplicant
{
    offerId: number;
    jobName: string;
    userId: number;
    userName: string;
    status: ApplicantStatus;
    statusDescription: string;
}

export interface NotificationNewServiceRequested {
    // رقم الطلب
    orderId: number;
    // رقم خدمة المطلوبة
    userTaskId: number;
    //  عنوان الخدمة المطلوبة
    serviceName: string;
    //  رقم اي دي الحدمة
    requesterId: number;
    //  اسم طالب الخدمة
    requesterName: string;
    //  موعد تنفيذ الخدمة
    startDate: Date | string;
}

export interface NotificationRespondToServiceRequest {
    // رقم الطلب
    orderId: number;
    // رقم خدمة المطلوبة
    userTaskId: number;
    //  عنوان الخدمة المطلوبة
    serviceName: string;
    //  رقم اي دي مقدم الخدمة
    taskerId: number;
    //  اسم مقدم الخدمة
    taskerName: string;
    //  حالة الطلب
    orderStage: OrderStage;
    orderStageDescription: string;
}

