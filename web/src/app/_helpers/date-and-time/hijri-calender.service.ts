import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n, NgbDate, NgbCalendarGregorian, NgbDateAdapter, NgbDateNativeUTCAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DbKeysService } from '../db-keys';

const WEEKDAYS = ['إث', 'ثلا', 'أر', 'خ', 'ج', 'س', 'أح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع اﻟﺜﺎﻧﻲ', 'جمادى الأول', 'جمادى اﻟﺜﺎﻧﻲ', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class HijriCalenderService extends NgbDatepickerI18n {

  public static HijriCalender = new NgbCalendarIslamicUmalqura;
  public static timeZoneOffsetHours = Math.floor((new Date().getTimezoneOffset()) / 60);
  public static timeZoneOffsetMinutes = ((new Date().getTimezoneOffset()) % 60);

  public static hijriToGregorian(hDate: Date): Date {
    if (hDate instanceof Date) {
      const hNgbDate = this.dateToNgbDate(hDate);
      const newDate = this.HijriCalender.toGregorian(hNgbDate);
      return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0 - this.timeZoneOffsetHours, 0 - this.timeZoneOffsetMinutes);
    } else {
      hDate = new Date(hDate);
      const hNgbDate = this.dateToNgbDate(hDate);
      const newDate = this.HijriCalender.toGregorian(hNgbDate);
      return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0 - this.timeZoneOffsetHours, 0 - this.timeZoneOffsetMinutes);
    }
  }

  public static gregorianToHijri(gDate: Date) {
    if (gDate instanceof Date) {
      const gNgbDate = this.HijriCalender.fromGregorian(gDate);
      return this.ngbDateToDate(gNgbDate);
    } else {
      gDate = new Date(gDate);
      const gNgbDate = this.HijriCalender.fromGregorian(gDate);
      return this.ngbDateToDate(gNgbDate);
    }
  }

  public static ngbDateToDate(ngbDate: NgbDate): Date {
    // debugger;
    return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day, 0 - this.timeZoneOffsetHours, 0 - this.timeZoneOffsetMinutes);
  }

  public static tryConvertHijriToGregorian(ngbDate: NgbDate): Date {
    try {
      var hijriDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day, 0 - this.timeZoneOffsetHours, 0 - this.timeZoneOffsetMinutes);
      return this.hijriToGregorian(<Date>hijriDate);
    } catch (error) {
      return null;
    }
  }

  public static tryConvertGregorianToDate(ngbDate: NgbDate): Date {
    try {
      var gregorianDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day, 0 - this.timeZoneOffsetHours, 0 - this.timeZoneOffsetMinutes);
      return (<Date>gregorianDate);
    } catch (error) {
      return null;
    }
  }

  public static dateToNgbDate(date: Date): NgbDate {
    // debugger;
    if (date instanceof Date) {
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    } else {
      date = new Date(date);
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }
  }


  public static getToday(addyears?: number, addMonths?: number, addDays?: number): NgbDate {
    if (addyears == null) addyears = 0;
    if (addMonths == null) addMonths = 0;
    if (addDays == null) addDays = 0;
    const curDate = new Date();
    return new NgbDate(curDate.getFullYear() + +addyears, curDate.getMonth() + 1 + +addMonths, curDate.getDate() + +addDays);
  }

  public static dateToNgbDateOrNull(date: any): NgbDate {
    // debugger;
    if (date == null) return null;
    if (date instanceof Date) {
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    } else {
      date = new Date(date);
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }
  }


  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }
  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }



}

var lang = localStorage.getItem(DbKeysService.LANGUAGE) || 'ar';

export var HijriCalenderProvider = (lang == 'ar') ?
  [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
    { provide: NgbDatepickerI18n, useClass: HijriCalenderService }
  ] :
  [{ provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }];

