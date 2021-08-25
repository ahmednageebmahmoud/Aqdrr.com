import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageResult, Message } from 'src/app/_models/chats/message';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Utilities } from '../utilities.service';
import { MessageParams } from 'src/app/_models/chats/message-params';
import { MessageWithObject } from 'src/app/_models/data/actions-result';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  baseUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  getMessage(senderId: number, messageId: number): Observable<MessageResult> {
    return this.http.get<MessageResult>(`${this.baseUrl}Users/${senderId}/messages/${messageId}`);
  }

  getMessages(senderId: number): Observable<MessageResult[]> {
    return this.http.get<MessageResult[]>(`${this.baseUrl}Users/${senderId}/messages`);
  }

  getPagedMessages(senderId: number, query?: MessageParams): Observable<PaginationResult<MessageResult[]>> {
    return Utilities.getPaginationResult<MessageResult>(this.http, `${this.baseUrl}Users/${senderId}/messages`, query);
  }

  getCurrentConversationId(senderId: number, recipientId: number): Observable<MessageWithObject> {
    return this.http.get<MessageWithObject>(`${this.baseUrl}Users/${senderId}/messages/chats/conversations/id/${recipientId}`);
  }

  getConversation(senderId: number, recipientId: number) {
    return this.http.get<MessageResult[]>(`${this.baseUrl}Users/${senderId}/messages/chats/${recipientId}`);
  }

  checkIfCurrentUserCanStartChatWithTheOtherUser(currentUserId: number, targetUserId: number): Observable<MessageWithObject> {
    return this.http.get<MessageWithObject>(`${this.baseUrl}Users/${currentUserId}/messages/allows/${targetUserId}`);
  }

  getLastConversations(senderId: number, query?: MessageParams) {
    return Utilities.getPaginationResult<MessageResult>(this.http, `${this.baseUrl}Users/${senderId}/messages/chats`, query);
  }

  sendMessage(senderId: number, message: Message) {
    return this.http.post(`${this.baseUrl}Users/${senderId}/messages`, message);
  }

  getUnreadCount(senderId) {
    return this.http.get(`${this.baseUrl}Users/${senderId}/messages/count`);
  }

  markAsRead(senderId: number, messageId: number) {
    return this.http.post(`${this.baseUrl}Users/${senderId}/messages/read/${messageId}`, {}).subscribe();
  }

  deleteMessage(id: number, senderId: number) {
    return this.http.post(`${this.baseUrl}Users/${senderId}/messages/${id}`, {});
  }
}
