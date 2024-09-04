import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true,
})
export class TruncateTextPipe implements PipeTransform {
  // Here in 'transform', you put the logic of the purpose of this pipe.
  // Change the data types or add arguments if needed.
  transform(
    value: string,
    maxLength: number = 16,
    ellipsis: string = '...'
  ): unknown {
    if (value.length > maxLength) {
      return value.slice(0, 16) + ellipsis;
    }
    return value;
  }
}
