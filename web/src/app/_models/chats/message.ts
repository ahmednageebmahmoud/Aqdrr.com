export interface MessageResult {
    id: number;
    conversationId: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date | string | null;
    messageSent: Date | string;
}

export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date | string | null;
    messageSent: Date | string;
}

export interface MessageRead {
    id: number;
    isRead: boolean;
    dateRead: Date | string | null;
}