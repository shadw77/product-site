import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);
  constructor() {}

  getCounterVal() {
    return this.counter.asObservable();
  }
  setCounterVal(newVal: number) {
    this.counter.next(newVal);
  }
}
