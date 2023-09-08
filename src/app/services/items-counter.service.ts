import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import datajson from '../../assets/data.json';
import {Product} from '../interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ItemsCounterService {

  // private counter = new BehaviorSubject<[][]>([]);
  // private items = new BehaviorSubject<Array<any>>([]);
  items: BehaviorSubject<Array<any>> = new BehaviorSubject <Array<any>> ([] as any[]);
  constructor() {}

  getCounterVal() {    

    return this.items.asObservable();
  }
  setCounterVal(newVal: any, id:number) {
    console.log(newVal, id);
  const currentItems = this.items.getValue(); // Get the current array value
  const updatedItems = [...currentItems, newVal]; // Create a new array with the new value
  this.items.next(updatedItems); // Update the BehaviorSubject with the new array


  // dataArray: Array<Product> = datajson as Array<Product>;
  
  
// this.product = this.dataArray.find((product:any) => product.id == selected_id);

}
}
