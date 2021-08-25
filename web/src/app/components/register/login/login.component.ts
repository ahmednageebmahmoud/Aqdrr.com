import { AlertifyService } from '../../../_helpers/Alertify';
import { AuthService } from '../../../_services/users/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { UserLogin } from 'src/app/_models/Users/user-login';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/css/login.css']
})
export class LoginComponent implements OnInit {
  resetPasswordUrl = environment.resetPasswordUrl;
  systemVersion = environment.version;
  userLogin: UserLogin = new UserLogin();
  photoUrl: string;
  redirectURL: '';
  isSigningIn = false;
  isShowForgetPassword=false;
  isShowPasswoed=false;
  isRtl=false;
  constructor(public authService: AuthService, private alertify: AlertifyService,

    public permissions: PermissionsService,
    private router: Router, private appTranslation: AppTranslationService, private route: ActivatedRoute) { }

  ngOnInit() {
 
    
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
      this.alertify.info('أنت مسجل دخولك مسبقاً');
    } else {
      const params = this.route.snapshot.queryParams;
      if (params['redirectURL']) {
        this.redirectURL = params['redirectURL'];
      }
      if (params['username']) {
        this.userLogin.userName = params['username'];
      }
    }
  }



  login() {
    this.isSigningIn = true;
    this.alertify.startLoadingMessage('جاري تسجيل الدخول');
    this.authService.login(this.userLogin).subscribe(
      next => {
        this.alertify.success(this.appTranslation.get('Login.loginSuccess'));
        this.authService.loggedInSuccessFully.next(null);
        if (this.redirectURL) {
          this.router.navigateByUrl(this.redirectURL).catch(() => this.router.navigate(['']));
        } else {
          //Redirect By Preemission
          if(this.permissions.canApplyToTheJobs)
          return  this.router.navigate(['/jobs']);
          else if(this.permissions.canManageJobs)
          return    this.router.navigate(['/jobs/manage']);
else        
return  this.router.navigate(['']);
        }
      },
      error => {
        // if user account not active
        if (error.status === 405) {
          let errorMessage = `Error Code: ${error.status}<br>${error.error.message}`;
          this.alertify.warning(errorMessage);
          this.router.navigate([`verifyPhone`], { state: { ...error.error.data } });
        } else {
          this.alertify.error(error);
        }
        this.alertify.stopLoadingMessage();
        this.isSigningIn = false;
      },
      () => {
        this.alertify.stopLoadingMessage();
        this.isSigningIn = false;
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.currentUser = null;
    localStorage.removeItem('user');
    this.alertify.message(this.appTranslation.get('Login.LogoutMsg'));
    this.router.navigate(['']);
  }

  changelang(lang: string) {
    this.appTranslation.selectWebSiteLanguage(lang.toLowerCase());
  }


  flipCard() {
    this.isShowForgetPassword=true;
    // const flipCard = $('.flip-card');
    // var className = '';
    // if (flipCard.hasClass('flipped')) {
    //   className = '.flip-card-front div';
    //   $('.flip-card-back').css({'pointer-events': 'none', 'opacity': '0'});
    //   $('.flip-card-front').css({'pointer-events': 'auto', 'opacity': '1'});
    // } else {
    //   className = '.flip-card-back div';
    //   $('.flip-card-front').css({'pointer-events': 'none', 'opacity': '0'});
    //   $('.flip-card-back').css({'pointer-events': 'auto', 'opacity': '1'});
    // }

    // flipCard.toggleClass('flipped')
    // const top = $(className).offset().top;
    // const bottom = top + $(className).outerHeight();
    // console.log(bottom);
    // $('#login').css('min-height', bottom + 'px');
  }


}
