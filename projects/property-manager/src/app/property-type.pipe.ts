import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyType'
})
export class PropertyTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newType = value === 'SingleHouse' ? 'Single House' : value;
    return newType;
  }

}
