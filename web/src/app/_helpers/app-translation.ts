import { Injectable, NgModule, forwardRef } from '@angular/core';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable, Subject, of } from 'rxjs';
import { DbKeysService } from './db-keys';
import { AuthService } from '../_services/users/auth.service';



@NgModule({ providers: [forwardRef(() => AppTranslationService)] })
export class TranslateLanguageLoader implements TranslateLoader {

  public getTranslation(lang: string): any {

    // Note Dynamic require(variable) will not work. Require is always at compile time

    switch (lang) {
      case 'en':
        return of(require('../../assets/locale/en.json'));
      case 'ar':
        return of(require('../../assets/locale/ar.json'));
      default:
        return of(require('../../assets/locale/ar.json'));
    }
  }
}

@Injectable()
export class AppTranslationService {

  private onLanguageChanged = new Subject<string>();
  languageChanged$ = this.onLanguageChanged.asObservable();

  constructor(private translate: TranslateService, private authService: AuthService) {
    this.addLanguages(['en', 'ar']);
    this.setDefaultLanguage(localStorage.getItem(DbKeysService.LANGUAGE) || 'ar');
  }

  changeWebSiteLanguage() {
    const pageDirection = localStorage.getItem(DbKeysService.PAGE_DIRECTIONS);
    if (pageDirection == 'ltr') {
      this.authService.language.next('en');
      localStorage.setItem(DbKeysService.LANGUAGE, 'en');
      this.changeLanguage('en');
    }
    else if (pageDirection == 'rtl') {
      this.authService.language.next('ar');
      localStorage.setItem(DbKeysService.LANGUAGE, 'ar');
      this.changeLanguage('ar');
    }
  }

  selectWebSiteLanguage(lang: string) {
    if (lang.match(/en|ar/)) {
      if (lang == 'en') {
        this.authService.language.next('en');
        localStorage.setItem(DbKeysService.LANGUAGE, 'en');
        this.changeLanguage('en');
      }
      else if (lang == 'ar') {
        this.authService.language.next('ar');
        localStorage.setItem(DbKeysService.LANGUAGE, 'ar');
        this.changeLanguage('ar');
      }
    }
  }

  addLanguages(lang: string[]) {
    this.translate.addLangs(lang);
  }

  setDefaultLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  getDefaultLanguage() {
    return this.translate.defaultLang;
  }

  getBrowserLanguage() {
    return this.translate.getBrowserLang();
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

  getLoadedLanguages() {
    return this.translate.langs;
  }

  useBrowserLanguage(): string | void {
    const browserLang = this.getBrowserLanguage();

    if (browserLang.match(/en|ar/)) {
      this.changeLanguage(browserLang);
      return browserLang;
    }
  }

  useDefaultLanguage() {
    return this.changeLanguage(null);
  }

  changeLanguage(language: string) {
    if (!language) {
      language = this.getDefaultLanguage();
    }

    if (language != this.translate.currentLang) {
      setTimeout(() => {
        this.translate.use(language);
        this.onLanguageChanged.next(language);
      });
    }

    return language;
  }

  get(translationKey: string): string | any {
    try {
      var words;
      this.translate.get(translationKey.trim()).subscribe((res: string) => { words = res; });
      return words;
    } catch (e) {
      return '';
    }
  }

  // "HELLO": "hello {{value}},"
  getWithValue(translationKey: string, keyValue: string): string | any {
    var words;
    this.translate.get(translationKey.trim(), { value: keyValue }).subscribe((res: string) => { words = res; });
    return words;
  }

  getWithTranslationValue(translationKey: string, translationValueKey: string): string | any {
    var words;
    this.translate.get(translationValueKey.trim()).subscribe(
      (translateResult: string) => {
        if (translateResult)
          this.translate.get(translationKey.trim(), { value: translateResult.toString() }).subscribe((res: string) => { words = res; });
      });
    return words;
  }

  // values = { name:'mohamed', value: 5 }
  getWithValues(translationKey: string, values: {}): string | any {
    var words;
    this.translate.get(translationKey.trim(), values).subscribe((res: string) => { words = res; });
    return words;
  }

  getTranslation(key: string | Array<string>, interpolateParams?: Object): string | any {
    return this.translate.instant(key, interpolateParams);
  }


  getTranslationAsync(key: string | Array<string>, interpolateParams?: Object): Observable<string | any> {
    return this.translate.get(key, interpolateParams);
  }

}

