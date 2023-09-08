import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import datajson from '../../assets/data.json';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products : Array<Product> = datajson;

  products: any;
  loader:boolean = false;
  constructor(private productsService: ProductsService) {
    // console.log(this.products);
  }
  ngOnInit() {
    this.loader = true
    this.productsService
      .getProductsList()
      .subscribe({
        next: (data) => (this.products = data.products),
        error: (error)=> console.log(error),
        complete: () => this.loader = false
       } );
  }
}
