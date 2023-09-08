import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { ItemsCounterService } from '../services/items-counter.service';
import { Cart } from '../interfaces/cart';
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

  constructor(
    private router: Router,
    private counterService: CounterService,
    private itemsService: ItemsCounterService,
    private cartService: ItemsCounterService
  ) {}
  redirectToDetails(id: number, data: Product) {
    const queryParam = encodeURIComponent(JSON.stringify(data));

    // Navigate with query parameter
    // this.router.navigate(['product-details', id], {
    //   queryParams: { data: queryParam },
    // });
    this.router.navigate(['product-details', id]);
  }

  counter: number = 0;
  cproducts!: Array<Product>;
  items!: Array<Cart>;
  isAdded: boolean = false;

  ngOnInit() {
    this.counterService
      .getCounterVal()
      .subscribe((val) => (this.counter = val));

    this.itemsService.getItems().subscribe((val) => (this.items = val));
  }
  cout: number = 0;
  addToCart(product: any) {
    this.counterService.setCounterVal(++this.counter);
    // if(this.items.includes({item:product, amount:this.cout})){
    if (this.items.entries !== undefined) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].item === product) {
          this.items.splice(i, 1);
          break; // Exit the loop after removing the item
        }
      }
    }

    // }
    this.items.push({ item: product, amount: ++this.cout });

    this.itemsService.setItems(this.items);
    console.log(this.items);
    this.isAdded = true;
  }
}
