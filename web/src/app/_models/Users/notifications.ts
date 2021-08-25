export interface AppNotification {
    id: number;
    icon: string;
    color: NotificationColor;
    colorDescription: string;
    summary: string;
    content: string;
    type: NotificationType;
    typeDescription: string;
    isHidden: boolean;
    notificationUser: NotificationUser;
    attachments: NotificationAttachment[];
    createdBy: number;
    updatedBy: number;
    updatedDate: Date | string;
    createdDate: Date | string;
}

export interface NotificationAttachment {
    id: number;
    name: string;
    path: string;
    title: string;
    fileType: FileType;
    fileTypeDescription: string;
}

export interface NotificationUser {
    id: number;
    state: NotificationState;
    stateDescription: string;
    readDate: Date | string;
    userId: number;
    isApproved: boolean;
}

export enum FileType {
    Image = 0,
    Word = 1,
    Pdf = 2,
}

export enum NotificationType {
    JustSummary = 0,
    ReadContent = 1,
    InnerUrl = 2,
    OutterUrl = 3,
    Popup = 4,
    ApprovalForm = 5,
    Features = 6,
    Advertising = 7,
    NewApplicantApply = 8,
    ApplicantChangeStatus = 9,
    InviteToWorkWithCompany = 10,
    NewServiceRequested = 11,
    RespondToServiceRequest = 12,
}

export enum NotificationState {
    Unread = 0,
    Read = 1,
    Seen = 2,
}

export enum NotificationColor {
    primary = 0,
    secondary = 1,
    success = 2,
    danger = 3,
    warning = 4,
    info = 5,
    light = 6,
    dark = 7,
    muted = 8,
    white = 9,
}
