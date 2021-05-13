import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empyStatus'
})
export class EmpyStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case 0 : {
        return 'NotSet';
        break;
      }
      case 1 : {
        return 'Employed';
        break;
      }
      case 2 : {
        return 'Self-Employed';
        break;
      }
      case 3 : {
        return 'Student';
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
  }

}
