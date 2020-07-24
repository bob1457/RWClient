import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renewCode'
})
export class RenewCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case 0 : {
        return 'N/A';
        break;
      }
      case 1 : {
        return 'Renew Month by Month';
        break;
      }
      case 2 : {
        return 'Renew by Other Term';
        break;
      }
      case 3 : {
        return 'Fied Term and Renew by Term';
        break;
      }
      case 4 : {
        return 'Fixed Term and Vacant';
        break;
      }
      default : {
        return 'N/A';
        break;
      }
    }

    // return null;
  }

}
