import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentMethod'
})
export class PaymentMethodPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    switch (value) {
      case 1 : {
        return 'Cash';
        break;
      }
      case 2 : {
        return 'Cheque';
        break;
      }
      case 3 : {
        return 'E-Transfer';
        break;
      }
      case 4 : {
        return 'Bank Transfer';
        break;
      }
      case 5 : {
        return 'Pre-Auhtorized';
        break;
      }
      case 6 : {
        return 'Online';
        break;
      }
      case 7 : {
        return 'Other';
        break;
      }
      default: {
        return 'Other';
        break;
      }
    }
  }

}
