import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DbKeysService } from '../_helpers/db-keys';

@Pipe({
  name: 'timeAgo',
  pure: false
})

export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private timer: number;
  public timeZoneOffsetHours = Math.floor((new Date().getTimezoneOffset()) / 60);
  public timeZoneOffsetMinutes = ((new Date().getTimezoneOffset()) % 60);

  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) { }
  transform(value: any) {
    this.removeTimer();
    let d = new Date(value);

    let now = new Date();
    // const nowDate = new Date();
    // const now = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours() - this.timeZoneOffsetHours, nowDate.getMinutes() - this.timeZoneOffsetMinutes, nowDate.getSeconds() - this.timeZoneOffsetMinutes);

    let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });
    let minutes = Math.round(Math.abs(seconds / 60));
    let hours = Math.round(Math.abs(minutes / 60));
    let days = Math.round(Math.abs(hours / 24));
    let months = Math.round(Math.abs(days / 30.416));
    let years = Math.round(Math.abs(days / 365));
    let siteLang: string = localStorage.getItem(DbKeysService.LANGUAGE) || 'ar';

    if (siteLang.toLowerCase() === 'ar') {
      if (Number.isNaN(seconds)) {
        return '';
      } else if (seconds <= 45) {
        return 'منذ ثواني ';
      } else if (seconds <= 90) {
        return 'منذ دقيقة ';
      } else if (minutes <= 10) {
        return 'منذ ' + minutes.toLocaleString('ar-SA') + ' دقائق';
      } else if (minutes <= 45) {
        return 'منذ ' + minutes.toLocaleString('ar-SA') + ' دقيقة';
      } else if (minutes <= 90) {
        return 'منذ ساعة ';
      } else if (hours <= 10) {
        return 'منذ ' + hours.toLocaleString('ar-SA') + ' ساعات';
      } else if (hours <= 22) {
        return 'منذ ' + hours.toLocaleString('ar-SA') + ' ساعة';
      } else if (hours <= 36) {
        return 'منذ يوم ';
      } else if (days <= 10) {
        return 'منذ ' + days.toLocaleString('ar-SA') + ' أيام';
      } else if (days <= 11) {
        return 'منذ ' + days.toLocaleString('ar-SA') + ' يوم';
      } else if (days <= 25) {
        return 'منذ ' + days.toLocaleString('ar-SA') + ' يوم';
      } else if (days <= 45) {
        return 'منذ شهر ';
      } else if (days <= 300) {
        return 'منذ ' + months.toLocaleString('ar-SA') + ' أشهر';
      } else if (days <= 345) {
        return 'منذ ' + months.toLocaleString('ar-SA') + ' شهر';
      } else if (days <= 545) {
        return 'منذ سنة ';
      } else if (days > 545) {
        return 'منذ ' + years.toLocaleString('ar-SA') + ' سنة';
      }
    } else {
      if (Number.isNaN(seconds)) {
        return '';
      } else if (seconds <= 45) {
        return 'a few seconds ago';
      } else if (seconds <= 90) {
        return 'a minute ago';
      } else if (minutes <= 45) {
        return minutes + ' minutes ago';
      } else if (minutes <= 90) {
        return 'an hour ago';
      } else if (hours <= 22) {
        return hours + ' hours ago';
      } else if (hours <= 36) {
        return 'a day ago';
      } else if (days <= 25) {
        return days + ' days ago';
      } else if (days <= 45) {
        return 'a month ago';
      } else if (days <= 345) {
        return months + ' months ago';
      } else if (days <= 545) {
        return 'a year ago';
      } else { // (days > 545)
        return years + ' years ago';
      }
    }
  }
  ngOnDestroy(): void {
    this.removeTimer();
  }
  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
  private getSecondsUntilUpdate(seconds: number) {
    let min = 60;
    let hr = min * 60;
    let day = hr * 24;
    if (seconds < min) { // less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
      return 300;
    } else { // update every hour
      return 3600;
    }
  }
}
