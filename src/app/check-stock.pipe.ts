import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStock'
})
export class CheckStockPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
