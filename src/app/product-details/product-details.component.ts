import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import datajson from '../../assets/data.json';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  dataArray: Array<Product> = datajson;
  product:any;
  constructor(private activeRoute: ActivatedRoute, private counterService: CounterService) {
  }
  @Input() products: Array<Product> = [];
  // dataArray!: any;
  ngOnInit() {
    // this.activeRoute.queryParams.subscribe((params) => {
    //   const queryParam = params['data'];
    //   if (queryParam) {
    //     this.dataArray = JSON.parse(decodeURIComponent(queryParam));
    //     console.log(this.dataArray);
    //     this.images=this.dataArray.images;
    //   }
    // });

    const selected_id= this.activeRoute.snapshot.params['id'];
     this.product =  this.dataArray.find((product) => product.id == selected_id)
     this.images=this.product.images;

     this.counterService
      .getCounterVal()
      .subscribe((val) => (this.counter = val));

  }
  images!: string;
  handleDetails() {}


  counter: number = 0;

  addToCart() {
    this.counterService.setCounterVal(++this.counter);
  }
}
