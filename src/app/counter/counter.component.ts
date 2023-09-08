import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() item: any;
  counter: number = 0;
  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.counterService
      .getCounterVal()
      .subscribe((val) => (this.counter = val));
  }

  decrease() {
    this.counterService.setCounterVal(--this.counter);
  }
  increase() {
    this.counterService.setCounterVal(++this.counter);
  }
}
