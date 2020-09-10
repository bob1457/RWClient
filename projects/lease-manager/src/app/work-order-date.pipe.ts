import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workOrderDate'
})
export class WorkOrderDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value = 'Jan 1, 1' ? 'Not Set' : value;
  }

}
