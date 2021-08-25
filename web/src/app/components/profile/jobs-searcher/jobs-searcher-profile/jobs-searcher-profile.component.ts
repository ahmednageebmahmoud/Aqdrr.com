import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserProfileResult } from 'src/app/_models/Users/user-profile-result';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/users/User.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AuthService } from 'src/app/_services/users/auth.service';
import { Gender } from 'src/app/_models/Users/user-for-register';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MessagesService } from 'src/app/_services/chats/messages.service';
import { MessageWithObject } from 'src/app/_models/data/actions-result';

@Component({
  selector: 'app-jobs-searcher-profile',
  templateUrl: './jobs-searcher-profile.component.html',
  styleUrls: []
})
export class JobsSearcherProfileComponent implements OnInit {
  @Input() userProfile: UserProfileResult;
  @ViewChild('chatboxTab') chatboxTab: ElementRef<HTMLElement>;
  isCurrentUserCanStartConversationWithThisUser: boolean = false;
  conversationNotAllowed: string = null;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private appTranslation: AppTranslationService,
    private alertify: AlertifyService, private authService: AuthService, private messagesService: MessagesService) { }

  ngOnInit(): void {
    if (!this.userProfile) {
      this.alertify.warning('يوجد مشكلة في عرض بيانات المستخدم أو لا تملك صلاحية مخوله للوصول الى ملفه');
      this.router.navigate(['']);
    } else {
      this.checkIfCurrentUserCanStartChat();
    }
  }

  get isCurrentUserProfile(): boolean {
    return this.authService.isCurrentUserProfile(this.userProfile.id);
  }

  checkIfCurrentUserCanStartChat() {
    if (!this.isCurrentUserProfile) {
      this.messagesService.checkIfCurrentUserCanStartChatWithTheOtherUser(this.authService.currentUser.id, this.userProfile.id).subscribe(
        (result: MessageWithObject) => {
          if (result.data === true)
            this.isCurrentUserCanStartConversationWithThisUser = true;
          else
            this.conversationNotAllowed = result.message;
        },
        error => {
          this.conversationNotAllowed = error;
          this.isCurrentUserCanStartConversationWithThisUser = false;
        }
      );
    }
  }

  getGenderStyle() {
    if (<Gender>this.userProfile.gender === <Gender>Gender.male) {
      return 'text-sky';
    } else if (<Gender>this.userProfile.gender === <Gender>Gender.female) {
      return 'text-pink';
    }
    else { return '' }
  }

  showChatBox() {
    this.chatboxTab.nativeElement.click()
  }


}
