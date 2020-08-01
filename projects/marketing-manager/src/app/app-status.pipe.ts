import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appStatus'
})
export class AppStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case 0 : {
        return 'NotSet';
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
      case 4 : {
        return 'Others';
        break;
      }
      default : {
        return 'NotSet';
        break;
      }
    }
    // return null;
  }

}
