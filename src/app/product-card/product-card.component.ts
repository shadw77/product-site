import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { ItemsCounterService } from '../services/items-counter.service';
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

  constructor(private router: Router, private counterService: CounterService, private itemsService:ItemsCounterService) {}
  redirectToDetails(id: number, data: Product) {
    const queryParam = encodeURIComponent(JSON.stringify(data));

    // Navigate with query parameter
    // this.router.navigate(['product-details', id], {
    //   queryParams: { data: queryParam },
    // });
    this.router.navigate(['product-details', id]);
  }

  counter: number = 0;
  items:Array<any>=[];
  isAdded: boolean = false;

  ngOnInit() {
    this.counterService
      .getCounterVal()
      .subscribe((val) => (this.counter = val));

      this.itemsService.getCounterVal().subscribe((val)=> (this.items.push(val)))
  }
  addToCart(id:number) {
    this.counterService.setCounterVal(++this.counter);
    this.itemsService.setCounterVal(this.items.push(id),id)
    this.isAdded = true;
    
    
  }
}
