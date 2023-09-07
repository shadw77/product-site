import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() detailsClicked = new EventEmitter<number>();

  mydata: any;
  showDetails(id: number) {
    this.detailsClicked.emit(id);
  }
  show(product: Product) {
    this.mydata = product;
  }

  constructor(private router: Router) {}
  redirectToDetails(id: number, data: Product) {
    const queryParam = encodeURIComponent(JSON.stringify(data));

    // Navigate with query parameter
    // this.router.navigate(['product-details', id], {
    //   queryParams: { data: queryParam },
    // });
    this.router.navigate(['product-details', id]);
  }
}

