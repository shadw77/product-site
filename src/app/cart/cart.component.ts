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
    // ---------------------------------------------------
    this.loader = true;
    this.itemsService.getItems().subscribe({
      next: (data) => {
        this.items = data
        ;          
      },
      error: (error) => console.log(error),
      complete: () => (this.loader = false),
    });
 
    //  console.log("kkkkkkkkkk",this.items);
  }
  del(product:any){
    console.log(product);
    
    // if (this.items.entries !== undefined) {
      
      for (let i = 0; i < this.items.length; i++) {
    

        if (this.items[i].item === product.item) {
                console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

          this.items.splice(i, 1);
          break; 
        }
      }
    }
  // }
}
