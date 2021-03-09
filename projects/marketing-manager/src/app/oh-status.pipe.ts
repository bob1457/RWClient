import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ohStatus'
})
export class OhStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newvalue = value == true ? 'Open' : 'Closed';
    return newvalue;
  }

}
