import { AuthService } from './../_services/users/auth.service';
import { Component } from '@angular/core';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AppTitleService } from '../_helpers/app-title.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UrlService } from '../_helpers/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  previousUrl: string = null;
  currentUrl: string = null;

  constructor(public authService: AuthService, private appTranslation: AppTranslationService,
    public appTitleService: AppTitleService, private router: Router, private urlService: UrlService) { }

  ngOnInit() {
    // من أجل تحميل بيانات المستخدم الحالي المخزنه الى متغيرات في تطبيق الأنجولار
    this.authService.loadUserDataFromLocalStorage();
    this.appTitleService.appName = this.appTranslation.get('app.SystemName');
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.urlService.setPreviousUrl(this.previousUrl);
      });
  }

}
