import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referenceType'
})
export class ReferenceTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0 : {
        return 'NotSet';
        break;
      }
      case 1 : {
        return 'Previous Landlord';
        break;
      }
      case 2 : {
        return 'Current Landlord';
        break;
      }
      case 3 : {
        return 'Employer';
        break;
      }
      default : {
        return 'Other';
        break;
      }
    }
  }

}
