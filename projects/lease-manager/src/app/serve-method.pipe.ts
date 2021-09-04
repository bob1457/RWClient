import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serveMethod'
})
export class ServeMethodPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0: {
        return 'In person';
        break;
      }
      case 1: {
        return 'By Attaching on Door';
        break;
      }
      case 2: {
        return 'By Registered Mail';
        break;
      }
      case 3: {
        return 'By Leaving In MailBox';
        break;
      }
      case 4: {
        return 'By Email';
        break;
      }
      case 5: {
        return 'By Fax';
        break;
      }
      case 6: {
        return 'On Director Order';
        break;
      }
      default: {
        return 'Other';
        break;
      }
    }
  }

}
