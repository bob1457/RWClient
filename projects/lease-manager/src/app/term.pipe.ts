import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case 0 : {
        return 'NotSet';
        break;
      }
      case 1 : {
        return 'One Year';
        break;
      }
      case 2 : {
        return 'Three Month';
        break;
      }
      case 3 : {
        return 'Six Month';
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
