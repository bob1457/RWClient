import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signDate'
})
export class SignDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
