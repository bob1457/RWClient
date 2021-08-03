import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appStatus'
})
export class AppStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0 : {
        return 'New';
        break;
      }
      case 1 : {
        return 'Pending';
        break;
      }
      case 2 : {
        return 'Approved';
        break;
      }
      case 3 : {
        return 'Declined';
        break;
      }
      case 5 : {
        return 'Completed';
        break;
      }
      case 4 : {
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
