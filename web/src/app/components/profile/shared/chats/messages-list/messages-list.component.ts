import { Component, OnInit, HostListener } from '@angular/core';
import { MessageResult, Message } from 'src/app/_models/chats/message';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { MessagesService } from 'src/app/_services/chats/messages.service';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { MessageParams } from 'src/app/_models/chats/message-params';
import { tap } from 'rxjs/operators';
import { ChatsService } from 'src/app/_services/chats/chats.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  messagesItems: MessageResult[];
  selectedConversation: MessageResult = null;
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  mesaagesQuery: MessageParams = <MessageParams>{ pageSize: this.PAGE_SIZE };
  screenHeight: number;
  screenWidth: number;
  mobileWidth: number = 760;
  isMobile: boolean = false;
  toggleMobile: boolean = false;
  currentUserId: number;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private messagesService: MessagesService,
    private chatsService: ChatsService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth < this.mobileWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  toggleWindows(conversation: MessageResult) {
    this.selectedConversation = conversation;
    if (this.selectedConversation) {
      this.selectedConversation.isRead = true;
    }
    this.toggleMobile = !this.toggleMobile;
  }


  ngOnInit() {
    if (this.authService.loggedIn())
      this.currentUserId = this.authService.getCurrentUserIdUsingToken();
    this.route.data.subscribe(data => {
      this.messagesItems = data['messagesList']?.items;
      this.mesaagesQuery = data['messagesList']?.pagination as MessageParams;
    });
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Messages.messageCaption'));
    this.initUpdateListenerMessages();
  }

  initUpdateListenerMessages(): void {

    this.chatsService.registeringCurrentUserToHubConnection();
    // // هذا من أجل الغاء أي مستمع أخر موجود من قبل لمحادثه أخرى
    this.chatsService.hubConnection.off('updateingChatBoxMessages');
    // // استقابل أي محادث جديده في هذه المجموعة
    this.chatsService.hubConnection.on('updateingChatBoxMessages', (message: MessageResult) => {
      this.updateingChatBoxMessages(message);
    });
  }
  // من أجل تحديث قاءمة المحادثات في حال قام مستخدم اخر بمراسلته وهو فاتح لصندوق المحادثات
  updateingChatBoxMessages(message: MessageResult): void {
    let conversationId = message.conversationId.toString();
    let conversationIndex = this.messagesItems.findIndex(c => +c.conversationId === +conversationId);
    if (this.messagesItems.length > 0 && conversationIndex >= 0){
      this.messagesItems[conversationIndex] = message;
      this.messagesItems.sort(function(a, b) {
        return  +new Date(a.messageSent) - +new Date(b.messageSent);
      });
      this.messagesItems.reverse();
    }
    else
      this.messagesItems.unshift(message);
  }

  ngOnDestroy() {
    this.chatsService.hubConnection.off('updateingChatBoxMessages');
  }

  getAllMessages() {
    this.messagesService.getPagedMessages(this.currentUserId, this.mesaagesQuery).subscribe((res: PaginationResult<MessageResult[]>) => {
      this.messagesItems = res.items;
      this.mesaagesQuery = res.pagination as MessageParams;
    },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
    );
  }

  onFilterChange() {
    this.mesaagesQuery.pageNumber = 1;
    this.getAllMessages();
  }

  resetFilter() {
    this.mesaagesQuery = <MessageParams>{
      pageNumber: 1,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllMessages();
  }

  refreshData() {
    this.resetFilter();
    this.alertify.info('تم تحديث البيانات');
  }

  sortBy(columnName: string) {
    if (this.mesaagesQuery.sortBy === columnName) {
      this.mesaagesQuery.isSortAscending = !this.mesaagesQuery.isSortAscending;
    } else {
      this.mesaagesQuery.sortBy = columnName;
      this.mesaagesQuery.isSortAscending = true;
    }
    this.getAllMessages();
  }

  onPageChange(event: any) {
    this.mesaagesQuery.pageNumber = event.page;
    this.getAllMessages();
  }

  isSelectedConversation(currentConversation: MessageResult) {
    return this.selectedConversation?.conversationId === currentConversation.conversationId;
  }

  getContactPicture(lastMessage: MessageResult): string {
    if (lastMessage.senderId === this.currentUserId)
      return lastMessage.recipientPhotoUrl;
    else
      return lastMessage.senderPhotoUrl;
  }

  getContactName(lastMessage: MessageResult): string {
    if (lastMessage?.senderId === this.currentUserId)
      return lastMessage.recipientKnownAs;
    else if (lastMessage?.recipientId === this.currentUserId)
      return lastMessage.senderKnownAs;
    else
      return '';
  }

  getRecipientId(lastMessage: MessageResult): number {
    if (lastMessage?.senderId === this.currentUserId)
      return lastMessage.recipientId;
    else if (lastMessage?.recipientId === this.currentUserId)
      return lastMessage.senderId;
    else
      return 0;
  }

  isSenderIsCurrentUser(senderId: number): boolean {
    if (+senderId === this.currentUserId)
      return true;
    else
      return false;
  }


}
