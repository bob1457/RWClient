import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noticeType'
})
export class NoticeTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    switch (value) {
      case 0: {
        return 'Ten Day Notice';
        break;
      }
      case 1: {
        return 'One Month Notice';
        break;
      }
      case 2: {
        return 'Two Month Notice';
        break;
      }
      // case 3: {
      //   return 'Six Month';
      //   break;
      // }
      // case 4: {
      //   return 'Others';
      //   break;
      // }
      default: {
        return 'Ten Day';
        break;
      }
    }
  }

}
