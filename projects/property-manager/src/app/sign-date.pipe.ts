import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signDate'
})
export class SignDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('incoming value', value);
    let newDate = '';
    if ( value  !== 'January 01, 0001' ) {
      newDate = value;
    }

    return newDate;
  }
}
