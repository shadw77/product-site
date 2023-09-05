import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product} from '../interfaces/product';
import datajson from '../../assets/data.json';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Array<Product> = datajson;

  constructor(){
      console.log(this.products);
  }
}
