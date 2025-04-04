import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fakeprice',
  standalone: true,
})
export class FakepricePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return (value + value * 0.2).toFixed(2);
  }
}
