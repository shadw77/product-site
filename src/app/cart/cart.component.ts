import { Component, Input } from '@angular/core';
import { ItemsCounterService } from '../services/items-counter.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() item: any;

  items: Array<any> = [];
  constructor(
    private itemsService: ItemsCounterService,
    private productsService: ProductsService
  ) {}
  loader: boolean = false;
  id: any = [];
  products:any;
  intersect:any;
  ngOnInit() {
    this.loader = true;
    this.productsService.getProductsCart().subscribe({
      next: (data) => {
        this.products = data.products
        ;          
      },
      error: (error) => console.log(error),
      complete: () => (this.loader = false),
    });
  
console.log('qqqqqqqqqqqqqqqqqqq',this.id);

    // this.itemsService.getCounterVal().subscribe((val) => this.id.push(val)
    // );
    //  console.log("kkkkkkkkkk",this.items);
  }
  
  function () {
        console.log('jjjjjjjjjjj', this.products);
         this.intersect = this.products.filter((a:any) => this.id.some((b:any) => a.id == b))
  console.log("jjjjjjjjjjjjj",this.id);
  



  }
  // addToCart(id:number) {
  //   this.counterService.setCounterVal(++this.counter);
  //   this.itemsService.setCounterVal(this.items.push(id),id)
  //   this.isAdded = true;
  // }
}
