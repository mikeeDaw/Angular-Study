import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceSign',
  standalone: true,
})
export class PriceSignPipe implements PipeTransform {
  // Here in 'transform', you put the logic of the purpose of this pipe.
  // The first parameter is required while the '...args' parameter is optional.
  transform(value: string, ...args: unknown[]): unknown {
    // Prepend a Currency Sign
    return `$${value}`;
  }
}
