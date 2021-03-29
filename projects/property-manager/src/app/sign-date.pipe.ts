import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signDate'
})
export class SignDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const newDate = value === 'January 01, 0001' ? 'N/A' : value;

    return newDate;
  }
}
