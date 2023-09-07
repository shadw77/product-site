import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStock',
})
export class CheckStockPipe implements PipeTransform {
  elem: any;
  transform(value: number): string {
    if (value > 0) {
      return 'In stock ';
    }
    return 'Out of stock';
  }
}

// transform(value: number, ...args: any[]): unknown {
//   this.elem = document.getElementById(args[0]);

//   value == 0
//     ? ((this.elem.innerText = 'Out of stock'), (this.elem.style.color = 'green'))
//     : ((this.elem.innerText = 'In stock'),
//       (this.elem.style.color = 'red'));
//   return this.elem.innerText;
// }
