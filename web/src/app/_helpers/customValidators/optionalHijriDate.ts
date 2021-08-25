import { ValidationErrors, AbstractControl } from '@angular/forms';
import { HijriCalenderService } from '../date-and-time/hijri-calender.service';

export function optionalhijriDate() {
    return (control: AbstractControl): ValidationErrors | null => {

        if (control.value) {
        const controlValue = control.value;
        const year = controlValue.year;
        const month = controlValue.month;
        const day = controlValue.day;
        const currentHijriYear = (HijriCalenderService.gregorianToHijri(new Date())).getFullYear();
        if (year < (currentHijriYear + 50) && year >= 1300) {
            if (month <= 12 && month > 0) {
                if (day <= HijriCalenderService.HijriCalender.getDaysPerMonth(month, year) && day > 0) {
                    return null;
                } else {
                    return {'dateDayErorr': true};
                }
            } else {
                return {'dateMonthErorr': true};
            }
        } else {
            return {'hijriDate': true};
        }
    } else {
        return null;
    }
    };
}
