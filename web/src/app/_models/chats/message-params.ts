export interface MessageParams {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    sortBy: string;
    filterText: string;
    isSortAscending: boolean;
    refreshCounter: boolean;
    userId: number;
    messageType: MessageType;
}


export enum MessageType {
    Unread = 0,
    Inbox = 1,
    Outbox = 2
}
