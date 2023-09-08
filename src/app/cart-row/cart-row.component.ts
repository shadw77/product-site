import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent {
@Input() item:any
constructor(){console.log("hhhh",this.item);
}
}
