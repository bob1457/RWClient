import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urgentLevel'
})
export class UrgentLevelPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // return null;

    if (value === 1) {
      return 'Urgent';
    } else {
      return 'Regular';
    }

  }

}
