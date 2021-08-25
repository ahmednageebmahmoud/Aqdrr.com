import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { HijriCalenderService } from './hijri-calender.service';

export class DateCalculator {
    private static getDifference(date1: Date, date2: Date): number | null {
        try {
            if (date1 == null || date2 == null) return null;
            return (Math.floor(Math.abs(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) - Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())))) as number;
        } catch (error) { return null; }
    }

    public static getDifferenceInDays(date1: Date, date2: Date): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / (1000 * 60 * 60 * 24);
        } catch (error) { return null; }
    }

    public static getDifferenceInHours(date1: Date, date2: Date): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / (1000 * 60 * 60);
        } catch (error) { return null; }
    }

    public static getDifferenceInMinutes(date1: Date, date2: Date): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / (1000 * 60);
        } catch (error) { return null; }
    }

    public static getDifferenceInSeconds(date1: Date, date2: Date): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / 1000;
        } catch (error) { return null; }
    }

    /** 
    * Compares two Date objects and returns e number value that represents 
    * the result:
    * 0 if the two dates are equal.
    * 1 if the first date is greater than second.
    * -1 if the first date is less than second.
    * @param date1 First date object to compare.
    * @param date2 Second date object to compare.
    */
    public static compareDate(date1: Date, date2: Date): number {
        let d1 = new Date(date1); let d2 = new Date(date2);
        let same = d1.getTime() === d2.getTime();
        if (same) return 0;
        if (d1 > d2) return 1;
        if (d1 < d2) return -1;
    }
}

export class NgbDateCalculator {
    private static getDifference(ngbDate1: NgbDate, ngbDate2: NgbDate): number | null {
        try {
            if (ngbDate1 == null || ngbDate2 == null) return null;
            var date1 = HijriCalenderService.tryConvertGregorianToDate(ngbDate1);
            var date2 = HijriCalenderService.tryConvertGregorianToDate(ngbDate2);
            return (Math.floor(Math.abs(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) - Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())))) as number;
        } catch (error) { return null; }
    }

    /** 
    * Compares two Date objects and returns e number value that represents 
    * the result:
    * 0 if the two dates are equal.
    * 1 if the first date is greater than second.
    * -1 if the first date is less than second.
    * @param ngbDate1 First date object to compare.
    * @param ngbDate2 Second date object to compare.
    */
    public static compareDate(ngbDate1: NgbDate, ngbDate2: NgbDate): number {
        if (ngbDate1 == null || ngbDate2 == null) return null;
        var date1 = HijriCalenderService.tryConvertGregorianToDate(ngbDate1);
        var date2 = HijriCalenderService.tryConvertGregorianToDate(ngbDate2);
        let d1 = new Date(date1); let d2 = new Date(date2);
        let same = d1.getTime() === d2.getTime();
        if (same) return 0;
        if (d1 > d2) return 1;
        if (d1 < d2) return -1;
    }

    public static getDifferenceInDays(date1: NgbDate, date2: NgbDate): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / (1000 * 60 * 60 * 24);
        } catch (error) { return null; }
    }

    public static getDifferenceInHours(date1: NgbDate, date2: NgbDate): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / (1000 * 60 * 60);
        } catch (error) { return null; }
    }

    public static getDifferenceInMinutes(date1: NgbDate, date2: NgbDate): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / (1000 * 60);
        } catch (error) { return null; }
    }

    public static getDifferenceInSeconds(date1: NgbDate, date2: NgbDate): number | null {
        try {
            let result = this.getDifference(date1, date2);
            if (result == null) return null;
            return result / 1000;
        } catch (error) { return null; }
    }
}