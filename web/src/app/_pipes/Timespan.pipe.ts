import { Pipe, PipeTransform } from '@angular/core';
import { TimeSpan } from '../_helpers/date-and-time/time-span';
import { RegularExpression } from '../_helpers/RegularExpression/RegularExpression';

@Pipe({
  name: 'timespan'
})
export class TimespanPipe implements PipeTransform {

  transform(value: any, format?: string): any {
    if (value) {
      let result = value.toString().match(RegularExpression.TimeSpan) || [value];
      if (result.length > 1) {
        let time = TimeSpan.tryConvert(value);
        if (time !== null) {
          return time.toClockstringFormat(format);
        }
      }
    }
    return null;
  }

}

