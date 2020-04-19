import { Pipe } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe {

  transform(value: unknown, args?: any): any {
    return super.transform(value, 'dd MM yyyy HH:mm');
  }

}
