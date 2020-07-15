import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renewCode'
})
export class RenewCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
