import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newType = value === 1 ? 'New' : 'Renewal';
    return newType;
  }

}
