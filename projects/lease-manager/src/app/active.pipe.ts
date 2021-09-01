import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == true ? 'Active' : 'Inactive';
  }

}
