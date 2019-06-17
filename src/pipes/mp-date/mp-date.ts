import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the MpDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mpDate',
})
export class MpDatePipe implements PipeTransform {
  transform(value: string, ...args) {
    const today = moment();
    const date = moment(value);
    const diff = today.diff(date, 'days');;
    switch(diff) {
      case 0:
        return 'Today';
      case 1:
        return 'Yesterday';
      case 2:
        return '2d ago';
      default:
        return date.format('ll');
    }
  }
}
