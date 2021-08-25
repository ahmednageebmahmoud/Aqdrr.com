import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AccountEndpointService } from 'src/app/_services/users/account-endpoint.service';
import { DbKeysService } from 'src/app/_helpers/db-keys';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { NotificationUsersService } from 'src/app/_services/users/notification-users.service';
import { DOCUMENT } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
declare let AOS: any;
declare let toggleClassNav:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggleHeight', [
      state('hide', style({
        height: '0px',
        overflow: 'hidden',
        // display: 'none'
      })),
      state('show', style({
        height: '*',
        // display: 'block'
      })),
      transition('hide => show', animate('150ms ease-in')),
      transition('show => hide', animate('150ms ease-out'))
    ])
  ],
})
export class HeaderComponent implements OnInit {
  // @ViewChild('navigation') navigation: ElementRef<HTMLElement>;
  @ViewChild('navigation', { read: ElementRef }) navigation: ElementRef<HTMLElement>;
  @ViewChild('mobileNavOverly', { read: ElementRef })
  mobileNavOverly: ElementRef<HTMLElement>;

  screenHeight: number;
  screenWidth: number;
  mobileWidth: number = 992; // small screen 760;
  isMobileOrTab: boolean = false;
  toggleMobile: boolean = false;
  newNotificationsCount: number = 0;
  isShowUserOptions = '';
  isShowLanguageOptions = '';

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private appTranslation: AppTranslationService,
    public permissions: PermissionsService,
    public notificationUsersService: NotificationUsersService,
    private accountService: AccountEndpointService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.getScreenSize();
  }

  ngOnInit() {

    // console.log(this.authService.decodedToken?.unique_name);
    // this.aos_init();
    if (this.loggedIn()) {
      this.getNewNotificationsCount();
    }

    this.authService.loggedInSuccessFully.subscribe(() => {
      this.getNewNotificationsCount();

    })
  }


  // Init AOS
  aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }


  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit', this.navigation.nativeElement.className);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.isMobileOrTab = this.screenWidth < this.mobileWidth;
    if (this.isMobileOrTab) {
      this.isShowUserOptions = 'hide';
      this.isShowLanguageOptions = 'hide';
    } else {
      this.isShowUserOptions = '';
      this.isShowLanguageOptions = '';
    }
    //console.log(this.screenHeight, this.screenWidth);
  }

  getNewNotificationsCount() {
    this.notificationUsersService
      .getCountNewNotification()
      .subscribe((result: number) => {
        this.newNotificationsCount = result;
      });
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.currentUser = null;
    localStorage.removeItem('user');
    this.alertify.message(this.appTranslation.get('Login.LogoutMsg'));
    this.router.navigate(['/login']);
  }

  changeLanguage(lang: string) {
    this.appTranslation.selectWebSiteLanguage(lang.toLowerCase());
  }

  changelang() {
    this.appTranslation.changeWebSiteLanguage();
    this.accountService
      .setLanguage(localStorage.getItem(DbKeysService.LANGUAGE))
      .subscribe(
        (data) => { },
        (error) => {
          this.alertify.error(error);
        }
      );
  }

  ismobile() {
    // console.log('ngAfterViewInit', this.navigation.nativeElement.className);
    if (this.navigation) {
      //this.navigation.nativeElement.classList.add('mobile-nav d-lg-none');
    }
  }

  showMenu(btnTag) {
    const bodyTag: HTMLElement = this.document.body;
    if (!bodyTag.classList.contains('mobile-nav-active')) {
      bodyTag.classList.toggle('mobile-nav-active');
      this.mobileNavOverly.nativeElement.style.display = 'block';
      const btnIcon = (btnTag.target as HTMLElement);
      btnIcon.classList.replace('fa-bars', 'fa-times');
    } else {
      this.hideMenu();
    }

    // this.mobileNavOverly.nativeElement.classList.contains('d-none') ?
    // this.mobileNavOverly.nativeElement.classList.replace('d-none', 'd-block') :
    // this.mobileNavOverly.nativeElement.classList.replace('d-block', 'd-none');


    //     let nodes = document.querySelectorAll('a');
    // for (let i = 0; nodes[i]; i++) {
    //     let node = nodes[i];
    //     var c = (nodes[i] as HTMLElement).style.backgroundColor = 'red';
    // }

  }

  hideMenu() {
    const bodyTag: HTMLElement = this.document.body;
    if (bodyTag.classList.contains('mobile-nav-active')) {
      bodyTag.classList.remove('mobile-nav-active');
      this.mobileNavOverly.nativeElement.style.display = 'none';
      const btnMenu: HTMLElement = (document.getElementsByClassName('mobile-nav-toggle').item(0) as HTMLElement);
      const btnMenuIcon = (btnMenu.childNodes.item(0) as HTMLElement);
      btnMenuIcon.classList.replace('fa-times', 'fa-bars');
    }
  }

  // slideToggle(listItem) {
  //   const bodyTag: HTMLElement = this.document.body;
  //   if (bodyTag.classList.contains('mobile-nav-active')) {
  //     const parentTag = (listItem.target.parentNode as HTMLElement);
  //     // اظهرنا السهم الصغير بجانب القائمة
  //     parentTag.classList.toggle('active');
  //     // انميشن عرض القائمة
  //     const listItems = ((listItem.target as HTMLElement).nextSibling as HTMLElement);
  //     // console.log(listItems.style.display);
  //     // console.log('before:', this.isShowUserOptions);
  //     // listItems.style.display === 'none' || listItems.style.display === '' ?
  //     //   listItems.style.display = 'block' :
  //     //   listItems.style.display = 'none';
  //     this.isShowUserOptions !== 'show' ? this.isShowUserOptions = 'show' : this.isShowUserOptions = 'hide';
  //     this.isShowLanguageOptions !== 'show' ? this.isShowLanguageOptions = 'show' : this.isShowLanguageOptions = 'hide';
  //     // console.log('after:', this.isShowUserOptions);

  //   }
  // }
  
  slideToggle(id) {
    toggleClassNav(id)
  }

}
