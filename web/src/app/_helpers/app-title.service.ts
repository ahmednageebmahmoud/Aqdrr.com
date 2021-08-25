import { Injectable } from '@angular/core';
import { Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { Subscription, BehaviorSubject } from 'rxjs';
import { filter, map, flatMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Utilities } from '../_services/utilities.service';
import { AppTranslationService } from './app-translation';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  sub: Subscription;
  appName: string="";
  private bsPageTitle = new BehaviorSubject<string>(this.appName || '');
  title = this.bsPageTitle?.asObservable();
  private bsSubPageTitle = new BehaviorSubject<string>('');
  subTitle = this.bsSubPageTitle?.asObservable();

  constructor(private titleService: Title, private router: Router, private appTranslation: AppTranslationService) {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(_ => this.router.routerState.root),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      flatMap(route => route.data))
      .subscribe(data => {
        let title = data['title'];

        if (title) {
          const fragment = this.router.url.split('#')[1];
          if (fragment) {
            console.log('AppTitleService ############ Error');
            title += ' | ' + Utilities.toTitleCase(fragment);
          }
        }

        if (title && this.appName) {
          const translationTitle = this.appTranslation.get(title);
          this.bsPageTitle?.next(translationTitle);
          this.bsSubPageTitle?.next('');
          title = translationTitle + ' - ' + this.appName;
        } else if (this.appName) {
          title = this.appName;
        }

        if (title) {
          this.titleService.setTitle(title);
        }
      });
  }

  // تغيير عنوان الصفحة في الداش بورد
  changeNavigationTitle(title: string, subTitle: string) {
    this.bsPageTitle?.next(title);
    this.bsSubPageTitle?.next(subTitle);
  }

  // تغيير اسم التاب الذي بالأعلى
  changeTabTitle(title: string) {
    this.titleService.setTitle(title + (this.appName?.length > 0 ? ' - ' + this.appName : ''));
  }

}
