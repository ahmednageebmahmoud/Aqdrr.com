import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { RegularExpression } from '../RegularExpression/RegularExpression';

const MILLIS_PER_SECOND = 1000;
const MILLIS_PER_MINUTE = MILLIS_PER_SECOND * 60;   //     60,000
const MILLIS_PER_HOUR = MILLIS_PER_MINUTE * 60;     //  3,600,000
const MILLIS_PER_DAY = MILLIS_PER_HOUR * 24;        // 86,400,000

export class TimeSpan {
  private _millis: number;

  private static interval(value: number, scale: number): TimeSpan {
    if (Number.isNaN(value)) {
      throw new Error("value can't be NaN");
    }

    const tmp = value * scale;
    const millis = TimeSpan.round(tmp + (value >= 0 ? 0.5 : -0.5));
    if ((millis > TimeSpan.maxValue.totalMilliseconds) || (millis < TimeSpan.minValue.totalMilliseconds)) {
      throw new Error("TimeSpanTooLong");
    }

    return new TimeSpan(millis);
  }

  private static round(n: number): number {
    if (n < 0) {
      return Math.ceil(n);
    } else if (n > 0) {
      return Math.floor(n);
    }
    return 0;
  }

  private static timeToMilliseconds(hour: number, minute: number, second: number): number {
    const totalSeconds = (hour * 3600) + (minute * 60) + second;
    if (totalSeconds > TimeSpan.maxValue.totalSeconds || totalSeconds < TimeSpan.minValue.totalSeconds) {
      throw new Error("TimeSpanTooLong");
    }

    return totalSeconds * MILLIS_PER_SECOND;
  }

  public static get zero(): TimeSpan {
    return new TimeSpan(0);
  }

  public static get maxValue(): TimeSpan {
    return new TimeSpan(Number.MAX_SAFE_INTEGER);
  }

  public static get minValue(): TimeSpan {
    return new TimeSpan(Number.MIN_SAFE_INTEGER);
  }

  public static fromDays(value: number): TimeSpan {
    return TimeSpan.interval(value, MILLIS_PER_DAY);
  }

  public static fromNgbTime(value: NgbTime): TimeSpan {
    try {
      return this.fromTimeStartingFromHours(value?.hour ?? 0, value?.minute ?? 0, value?.second ?? 0);
    } catch (error) {
      console.log("NgbTime is null");
    }
  }

  public static convertToNgbTime(value: TimeSpan): NgbTime {
    try {
      return { hour: value.hours, minute: value.minutes } as NgbTime;
    } catch (error) {
      console.log("NgbTime is null");
    }
  }

  public toNgbTime(): NgbTime {
    try {
      return { hour: this.hours, minute: this.minutes } as NgbTime;
    } catch (error) {
      console.log("NgbTime is null");
    }
  }

  public static fromHours(value: number): TimeSpan {
    return TimeSpan.interval(value, MILLIS_PER_HOUR);
  }

  public static fromMilliseconds(value: number): TimeSpan {
    return TimeSpan.interval(value, 1);
  }

  public static fromMinutes(value: number): TimeSpan {
    return TimeSpan.interval(value, MILLIS_PER_MINUTE);
  }

  public static fromSeconds(value: number): TimeSpan {
    return TimeSpan.interval(value, MILLIS_PER_SECOND);
  }

  public static fromTime(hours: number, minutes: number, seconds: number): TimeSpan;
  public static fromTime(days: number, hours: number, minutes: number, seconds: number, milliseconds: number): TimeSpan;
  public static fromTime(daysOrHours: number, hoursOrMinutes: number, minutesOrSeconds: number, seconds?: number, milliseconds?: number): TimeSpan {
    if (milliseconds != undefined) {
      return this.fromTimeStartingFromDays(daysOrHours, hoursOrMinutes, minutesOrSeconds, seconds, milliseconds);
    } else {
      return this.fromTimeStartingFromHours(daysOrHours, hoursOrMinutes, minutesOrSeconds);
    }
  }

  private static fromTimeStartingFromHours(hours: number, minutes: number, seconds: number): TimeSpan {
    const millis = TimeSpan.timeToMilliseconds(hours, minutes, seconds);
    return new TimeSpan(millis);
  }

  private static fromTimeStartingFromDays(days: number, hours: number, minutes: number, seconds: number, milliseconds: number): TimeSpan {
    const totalMilliSeconds = (days * MILLIS_PER_DAY) +
      (hours * MILLIS_PER_HOUR) +
      (minutes * MILLIS_PER_MINUTE) +
      (seconds * MILLIS_PER_SECOND) +
      milliseconds;

    if (totalMilliSeconds > TimeSpan.maxValue.totalMilliseconds || totalMilliSeconds < TimeSpan.minValue.totalMilliseconds) {
      throw new Error("TimeSpanTooLong");
    }
    return new TimeSpan(totalMilliSeconds);
  }


  public static compare(t1: TimeSpan, t2: TimeSpan) {
    if (t1.milliseconds > t2.milliseconds) {
      return 1;
    }
    else if (t1.milliseconds < t2.milliseconds) {
      return -1;
    }
    else {
      return 0;
    }
  }

  public static equals(timespan1: TimeSpan, timespan2: TimeSpan): boolean {
    return (timespan1.totalMilliseconds === timespan2.totalMilliseconds);
  }



  constructor(millis: number) {
    this._millis = millis;
  }

  public get days(): number {
    return TimeSpan.round(this._millis / MILLIS_PER_DAY);
  }

  public get hours(): number {
    return TimeSpan.round((this._millis / MILLIS_PER_HOUR) % 24);
  }

  public get minutes(): number {
    return TimeSpan.round((this._millis / MILLIS_PER_MINUTE) % 60);
  }

  public get seconds(): number {
    return TimeSpan.round((this._millis / MILLIS_PER_SECOND) % 60);
  }

  public get milliseconds(): number {
    return TimeSpan.round(this._millis % 1000);
  }


  public get totalDays(): number {
    return this._millis / MILLIS_PER_DAY;
  }

  public get totalHours(): number {
    return this._millis / MILLIS_PER_HOUR;
  }

  public get totalMinutes(): number {
    return this._millis / MILLIS_PER_MINUTE;
  }

  public get totalSeconds(): number {
    return this._millis / MILLIS_PER_SECOND;
  }

  public get totalMilliseconds(): number {
    return this._millis;
  }

  public add(ts: TimeSpan): TimeSpan {
    const result = this._millis + ts.totalMilliseconds;
    return new TimeSpan(result);
  }

  public subtract(ts: TimeSpan): TimeSpan {
    const result = this._millis - ts.totalMilliseconds;
    return new TimeSpan(result);
  }

  public addMutable(timespan: TimeSpan) {
    this._millis += timespan.totalMilliseconds;
  }

  public substractMutable(timespan: TimeSpan) {
    this._millis -= timespan.totalMilliseconds;
  }

  public substract(timespan: TimeSpan) {
    return new TimeSpan(this._millis - timespan.totalMilliseconds);
  }

  public negate() {
    return new TimeSpan(-this._millis);
  }

  public greaterThan(ts: TimeSpan): boolean {
    try {
      return (this._millis > ts.totalMilliseconds);
    } catch (error) {
      return false;
    }
  }

  public greaterThanOrEqual(ts: TimeSpan): boolean {
    try {
      return (this._millis >= ts.totalMilliseconds);
    } catch (error) {
      return false;
    }
  }

  public lessThan(ts: TimeSpan): boolean {
    try {
      return (this._millis < ts.totalMilliseconds);
    } catch (error) {
      return false;
    }
  }

  public lessThanOrEqual(ts: TimeSpan): boolean {
    try {
      return (this._millis <= ts.totalMilliseconds);
    } catch (error) {
      return false;
    }
  }

  public equals(ts: TimeSpan): boolean {
    return (this._millis === ts.totalMilliseconds);
  }

  public toString(): string {
    try {
      return `${("00" + this.hours).slice(-2)}:${("00" + this.minutes).slice(-2)}:${("00" + this.seconds).slice(-2)}`;
    } catch (error) {
      return null;
    }
  }

  public toShortString(): string | null {
    try {
      return `${("00" + this.hours).slice(-2)}:${("00" + this.minutes).slice(-2)}`;
    } catch (error) {
      return null;
    }
  }

  public static tryConvert(timespanValue: any, format = RegularExpression.TimeSpan): TimeSpan | null {
    try {
      if (timespanValue) {
        timespanValue = timespanValue.toString().match(format) || [timespanValue];
        if (timespanValue.length > 1) {
          var hours = +timespanValue[1]
          var minutes = +timespanValue[3]
          var seconds = +timespanValue[5]
          return TimeSpan.fromTimeStartingFromHours(hours, minutes, seconds);
        }
      }
    } catch (error) {
      return null;
    }
    return null;
  }

  public toClockstringFormat(format?: string): string | null {
    try {
      var hours = this.hours; // gives the value in 24 hours format
      var AmOrPm = hours >= 12 ? 'م' : 'ص';
      hours = (hours % 12) || 12;
      var minutes = this.minutes;
      if (format === 'hh:mm')
        return `${("00" + hours).slice(-2)}:${("00" + minutes).slice(-2)}`;
      else if (format === 'h')
        return `${hours}`;
      else if (format === 'm')
        return `${minutes}`;
      else
        return `${("00" + hours).slice(-2)}:${("00" + minutes).slice(-2)}${AmOrPm}`;
    } catch (error) {
      return null;
    }
  }


}

// How to use
// Create a new TimeSpan object
// From zero

//     const ts = TimeSpan.zero;
// From milliseconds

//     const milliseconds = 10000; // 1 second

//     // by using the constructor
//     const ts1 = new TimeSpan(milliseconds);

//     // or as an alternative you can use the static factory method
//     const ts2 = TimeSpan.fromMilliseconds(milliseconds);
// From seconds

//     const seconds = 86400; // 1 day
//     const ts = TimeSpan.fromSeconds(seconds);
// From minutes

//     const minutes = 1440; // 1 day
//     const ts = TimeSpan.fromMinutes(minutes);
// From hours

//     const hours = 24; // 1 day
//     const ts = TimeSpan.fromHours(hours);
// From days

//     const days = 1; // 1 day
//     const ts = TimeSpan.fromDays(days);
// From time with given hours, minutes and seconds

//     const hours = 1;
//     const minutes = 1;
//     const seconds = 1;
//     const ts = TimeSpan.fromTime(hours, minutes, seconds);
// From time2 with given days, hours, minutes, seconds and milliseconds

//     const days = 1;
//     const hours = 1;
//     const minutes = 1;
//     const seconds = 1;
//     const milliseconds = 1;
//     const ts = TimeSpan.fromTime(days, hours, minutes, seconds, milliseconds);
// From maximal safe integer

//     const ts = TimeSpan.maxValue;
// From minimal safe integer

//     const ts = TimeSpan.minValue;
// From minimal safe integer

//     const ts = TimeSpan.minValue;
// Add

//     const ts1 = TimeSpan.fromDays(1);
//     const ts2 = TimeSpan.fromHours(1);
//     const ts = ts1.add(ts2);

//     console.log(ts.days);               // 1
//     console.log(ts.hours);              // 1
//     console.log(ts.minutes);            // 0
//     console.log(ts.seconds);            // 0
//     console.log(ts.milliseconds);           // 0
// Subtract

//     const ts1 = TimeSpan.fromDays(1);
//     const ts2 = TimeSpan.fromHours(1);
//     const ts = ts1.subtract(ts2);

//     console.log(ts.days);               // 0
//     console.log(ts.hours);              // 23
//     console.log(ts.minutes);            // 0
//     console.log(ts.seconds);            // 0
//     console.log(ts.milliseconds);           // 0
// Getting the intervals

//     const days = 1;
//     const hours = 1;
//     const minutes = 1;
//     const seconds = 1;
//     const milliseconds = 1;
//     const ts = TimeSpan.fromTime2(days, hours, minutes, seconds, milliseconds);

//     console.log(ts.days);               // 1
//     console.log(ts.hours);              // 1
//     console.log(ts.minutes);            // 1
//     console.log(ts.seconds);            // 1
//     console.log(ts.milliseconds);           // 1

//     console.log(ts.totalDays)           // 1.0423726967592593;
//     console.log(ts.totalHours)          // 25.016944722222224;
//     console.log(ts.totalMinutes)            // 1501.0166833333333;
//     console.log(ts.totalSeconds)            // 90061.001;
//     console.log(ts.totalMilliseconds);      // 90061001;

