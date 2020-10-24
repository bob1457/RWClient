import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    switch (value) {
      case 1 : {
        return 'New';
        break;
      }
      case 2 : {
        return 'Opened';
        break;
      }
      case 3 : {
        return 'In Progress';
        break;
      }
      case 4 : {
        return 'On Hold';
        break;
      }
      case 5 : {
        return 'Completed';
        break;
      }
      case 6 : {
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
