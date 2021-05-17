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
      case 21 : {
        return 'Renew by Other Term';
        break;
      }
      case 3 : {
        return 'Fixed Term';
        break;
      }
      case 31 : {
        return 'Fixed Term and Renew by Month';
        break;
      }
      case 32 : {
        return 'Fixed Term and Vacant';
        break;
      }
      // case 4 : {
      //   return 'Fixed Term and Vacant';
      //   break;
      // }
      default : {
        return 'N/A';
        break;
      }
    }

    // return null;
  }

}
