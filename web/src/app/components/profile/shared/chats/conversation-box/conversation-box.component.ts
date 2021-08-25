import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MessageRead, MessageResult } from 'src/app/_models/chats/message';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AuthService } from 'src/app/_services/users/auth.service';
import { MessagesService } from 'src/app/_services/chats/messages.service';
import { tap } from 'rxjs/operators';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { ChatsService } from 'src/app/_services/chats/chats.service';
import { MessageWithObject } from 'src/app/_models/data/actions-result';

@Component({
  selector: 'app-conversation-box',
  templateUrl: './conversation-box.component.html',
  styleUrls: ['./conversation-box.component.css']
})
export class ConversationBoxComponent implements OnInit {
  @Input('RecipientId') recipientId: number = 0;
  @Input('CurrentUserId') currentUserId: number = 0;
  @Input('RecipientGender') recipientGender: Gender = 0;
  @ViewChild('conversationPanel') conversationPanel: ElementRef<any>;
  currentConversationID: string;
  conversationMessages: MessageResult[];
  isLoadingConversation: boolean = true;
  newMessage: any = {};

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private authService: AuthService,
    private messagesService: MessagesService,
    private chatsService: ChatsService) {
  }

  ngAfterViewChecked(): void {
    this.scrollTopChatBoxPanel();
  }

  scrollTopChatBoxPanel(): void {
    this.conversationPanel.nativeElement.scrollTop = this.conversationPanel.nativeElement.scrollHeight;
  }

  isCurrentUserProfile(userId: number): boolean {
    return this.authService.isCurrentUserProfile(userId);
  }

  ngOnInit(): void {
    // this.initConversationMessages();
    // هذا من أجل الغاء أي مستمع أخر موجود من قبل لمحادثه أخرى
    this.chatsService.hubConnection.off('receiveMessage');
    // استقابل أي محادث جديده في هذه المجموعة
    this.chatsService.hubConnection.on('receiveMessage', (message: MessageResult) => {
      // في حالة كان المستقبل فانه يضيفه للمحادثه
      if (this.currentUserId > 0 && message.recipientId === this.currentUserId)
        this.conversationMessages.push(message);
    });
    // عند قراءة الرسالة من قبل المستقبل يتم تحديث حالة الرساله بأنه تم قراءتها
    this.chatsService.hubConnection.off('markMessageAsRead');
    this.chatsService.hubConnection.on('markMessageAsRead', (messageRead: MessageRead) => {
      let messageIndex = this.conversationMessages.findIndex(c => c.id === +messageRead.id);
      this.conversationMessages[messageIndex].dateRead = messageRead.dateRead;
      this.conversationMessages[messageIndex].isRead = true;
    });
  }

  ngOnDestroy() {
    this.chatsService.hubConnection.off('receiveMessage');
    this.chatsService.hubConnection.off('markMessageAsRead');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initConversationMessages();
  }

  initConversationMessages(): void {
    if (this.recipientId > 0) {
      this.loadConversationMessages();
    }
  }

  isFemaleAccount(): boolean {
    if (this.recipientGender as Gender === Gender.female as Gender) {
      return true;
    } else { return false; }
  }

  makeMessageAsReaded(message: MessageResult) {
    if (message != null && this.currentUserId > 0 && message.isRead === false && message.recipientId === this.currentUserId) {
      console.log('makeMessageAsReaded exe');
      this.messagesService.markAsRead(this.currentUserId, message.id);
      message.isRead = true;
    }
  }

  loadConversationMessages() {
    const currentUserId = +this.authService.getCurrentUserIdUsingToken();
    // جلب رقم المحادثه الحالية و الانضمام الي موزع المحادثات
    this.messagesService.getCurrentConversationId(currentUserId, this.recipientId).subscribe(
      (result: MessageWithObject) => {
        // الانضمام الى مجموعة المراسلة الخاصه مع مستخدم الأخر
        this.chatsService.startJoinGroupHubConnection(result.data.toString());
      },
      error => { this.alertify.error(error) }
    );
    // عند تحميل المحادثه بالكامل يتم تغيير حالة المحادثه بانه تم قراءتها
    this.messagesService.getConversation(currentUserId, this.recipientId).pipe(
      tap(messages => {
        // // يتم فحص الرسائل رساله رساله و تغيير حالتها كمقروءه
        // for (const message of messages) {
        //   if (message.isRead === false && message.recipientId === currentUserId) { this.messagesService.markAsRead(currentUserId, message.id); }
        // };
      })).subscribe(
        messages => {
          this.conversationMessages = messages.reverse();
        },
        error => { this.alertify.error(error); },
        () => {
          // تحديث عداد المحادثات الغير مقرؤه والذي يظهر القائمة الرئيسية للموقع
          setTimeout(() => {
            this.isLoadingConversation = false;
            this.messagesService.getUnreadCount(currentUserId).subscribe(res => {
              this.authService.unreadCount.next(res.toString());
              setTimeout(() => {
                this.messagesService.getConversation(currentUserId, this.recipientId).subscribe(messages => this.conversationMessages = messages.reverse());
              }, 3000);
            });
          }, 1000);
        }
      )
  }

  sendMessage() {
    let userId = 0;
    if (this.authService.loggedIn())
      userId = this.authService.getCurrentUserIdUsingToken();
    this.newMessage.recipientId = this.recipientId;
    this.messagesService.sendMessage(+userId, this.newMessage).subscribe(
      (message: MessageResult) => {
        this.conversationMessages.push(message);
        this.newMessage.content = '';
        //this.chatsService.invokeRefreshConnection();
        // this.chatsService.invokeNewMessage();
      },
      error => { this.alertify.error(error) }
    )
  }

}
