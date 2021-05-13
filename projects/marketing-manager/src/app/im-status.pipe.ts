import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imStatus'
})
export class ImStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0 : {
        return 'NotSet';
        break;
      }
      case 1 : {
        return 'Canadian Citizen';
        break;
      }
      case 2 : {
        return 'Landed Immgrant';
        break;
      }
      case 3 : {
        return 'Visitor Visa';
        break;
      }
      default : {
        return 'NotSet';
        break;
      }
    }
  }

}
