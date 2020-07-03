import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case 0 : {
        return 'NotSet';
        break;
      }
      case 1 : {
        return 'Listed';
        break;
      }
      case 2 : {
        return 'Pending';
        break;
      }
      case 3 : {
        return 'Rented';
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
