import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import datajson from '../../assets/data.json';
import {Product} from '../interfaces/product'
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class ItemsCounterService {

  // private counter = new BehaviorSubject<[][]>([]);
  private items = new BehaviorSubject<Array<Cart>>([]);

  // items: BehaviorSubject<Array<any>> = new BehaviorSubject <Array<any>> ([] as any[]);
  constructor() {}

  getItems() {    

    return this.items.asObservable();
  }
  setItems(items:Array<Cart>) {
    // console.log(newVal, id);
  // const currentItems = this.items.getValue(); // Get the current array value
  // const updatedItems = [...currentItems, newVal]; // Create a new array with the new value
  this.items.next(items); // Update the BehaviorSubject with the new array


  // dataArray: Array<Product> = datajson as Array<Product>;
  
// this.product = this.dataArray.find((product:any) => product.id == selected_id);

}
}
