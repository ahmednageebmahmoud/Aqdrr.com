import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  constructor() {}
  transform(value: string, args?: number): any {
    if (!args) {
      return value;
    }

    if (value && value.length > args) {
      return value.substring(0, args) + '...';
    } else {
      return value;
    }
  }
}
