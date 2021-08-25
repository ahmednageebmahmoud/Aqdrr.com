import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from 'src/app/_services/users/auth.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { MessageResult } from 'src/app/_models/chats/message';
import { MessagesService } from 'src/app/_services/chats/messages.service';


@Injectable()
export class MessageResolver implements Resolve<MessageResult[]>{
    pageNumber = 1;
    pageSize = 6;
    messageType = 'Unread';
    constructor(private authService: AuthService, private messagesService: MessagesService, private router: Router, private alertify: AlertifyService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<MessageResult[]> {
        let userId = 0;
        if (this.authService.loggedIn())
            userId = this.authService.getCurrentUserIdUsingToken();
        else
            return of(null);

        if (userId === 0)
            return of(null);

        return this.messagesService.getLastConversations(userId).pipe(
            catchError(error => {
                this.alertify.error('يوجد مشكلة في عرض الرسائل');
                this.router.navigate(['']);
                return of(null);
            })
        )
    }
}