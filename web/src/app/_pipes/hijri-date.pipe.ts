import { Pipe, PipeTransform } from '@angular/core';
import { HijriCalenderService } from '../_helpers/date-and-time/hijri-calender.service';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'hijriDate'
})
export class HijriDatePipe implements PipeTransform {

  transform(value: any, format?: any): any {
    value = new Date(value);
  if (value) {
      const date = HijriCalenderService.gregorianToHijri(value);
    if (format) {
      return formatDate(date, format, 'en-US');
     } else {
      return date;
     }
    }
  return null;
    }

}
