import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HubConnection, HttpTransportType, LogLevel, HubConnectionBuilder } from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { DbKeysService } from 'src/app/_helpers/db-keys';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  baseUrl = environment.HubsUrl;
  chatsUrl = `${this.baseUrl}/chats`;
  connectionId: string;
  // لان فيه مشاكل و تعارض مع ال WebSocket 
  // Object.defineProperty(WebSocket, 'OPEN', { value: 1, });
  private options = { transport: HttpTransportType.ServerSentEvents, logging: LogLevel.Trace };
  private isConnected: boolean = false;
  hubConnection: HubConnection;

  unreadMessagesBehavior = new BehaviorSubject<number>(0);
  unreadMessages = this.unreadMessagesBehavior.asObservable();

  UnUsedCodeBehavior = new BehaviorSubject<number>(0);
  UnUsedCode = this.UnUsedCodeBehavior.asObservable();

  constructor(private http: HttpClient) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${this.chatsUrl}`, this.getRequestOptions())
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();
  }

  startChatHubConnection() {
    this.hubConnection.start()
      // من خلال هذا السطر بامكاننا تفعيل التنصت بعد الاتصال بالسيرفر من اجل عدم ظهور خطأ في حالة تأخر الاتصال
      .then(() => {
        this.isConnected = true;
        this.invokeConnectionId()
      })
      .catch(err => console.log('Error while establishing connection :('));
  }

  private getRequestOptions(): any {
    const auth_token = localStorage.getItem(DbKeysService.ACCESS_TOKEN);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': auth_token,
    })
    return { headers: headers, transport: HttpTransportType.ServerSentEvents, logging: LogLevel.Trace, accessTokenFactory: () => auth_token };
  }

  public invokeNewMessage = () => {
    this.hubConnection.invoke('newMessage', 'this.connectionId');
  }

  public invokeConnectionId = () => {
    this.hubConnection.invoke('getconnectionid').then(
      (data) => {
        console.log('connectionId:', data);
        this.connectionId = data;
      }
    );
  }

  startJoinGroupHubConnection(groupName: string) {
    if (this.isConnected === true) {
      this.invokeJoinGroup(groupName);
    } else {
      this.hubConnection.start()
        // من خلال هذا السطر بامكاننا تفعيل التنصت بعد الاتصال بالسيرفر من اجل عدم ظهور خطأ في حالة تأخر الاتصال
        .then(() => {
          this.isConnected = true;
          this.invokeJoinGroup(groupName);
        })
        .catch(err => console.log('Error while establishing connection :('));
    }
  }

  invokeJoinGroup(groupName: string) {
    // console.log('الانضمام الى المجموعة:', groupName);
    this.hubConnection.invoke('joinGroup', groupName);
  }

  registeringCurrentUserToHubConnection() {
    if (this.isConnected === true) {
     // this.invokeJoinCurrentUser();
    } else {
      this.hubConnection.start()
        // من خلال هذا السطر بامكاننا تفعيل التنصت بعد الاتصال بالسيرفر من اجل عدم ظهور خطأ في حالة تأخر الاتصال
        .then(() => {
          this.isConnected = true;
        //  this.invokeJoinCurrentUser();
        })
        .catch(err => console.log('Error while establishing connection :('));
    }
  }

  invokeJoinCurrentUser() {
    this.hubConnection.invoke('getUserId').then(
      (data) => {
        console.log('User Id:', data);
        this.connectionId = data;
      }
    );
  }

  public broadcastChartData = () => {
    this.hubConnection.invoke('broadcastchartdata', "this.data", this.connectionId)
      .catch(err => console.error(err));
  }

  getDefultValuesHubConnection() {
    this.hubConnection.on('refresh', () => {
      setTimeout(() => {
        // this.countSupportRequests().subscribe(res => { this.unreadMessagesBehavior.next(res.toString()); });
        // this.countTicketsNeedOfficeSupportApproval().subscribe(
        //   res => {
        //     this.UnUsedCodeBehavior.next(res.toString());
        //     console.log('hubConnectionCountTicket');
        //   });
      }, 0);
    });
  }

  // لها استخدامين 
  //أما تنبيه النظام بتفعيلها بأمر من متصفح المستحدم بشكل يدوي
  // أو تجاهل هذه الفكشن و يتم تفعيلها من قبل الكنترولر في السيرفر بدون تدخل من متصفح المستخدم
  invokeNewMessageConnection() {
    this.hubConnection.invoke('newMessage');
  }

  invokeRefreshConnection() {
    this.hubConnection.invoke('refresh');
  }

  invokeCountConnection() {
    this.hubConnection.invoke('count');
  }
}


// طرق الاستخدام 
// 1)
// this.chatsService.hubConnection.on('refresh', (...data) => {
//   console.log('data:', data);
// });
//------------------
// 2)
// this.chatsService.hubConnection.on('refresh', () => {
//   load or do SomeThing;
// });