import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'exprj-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss'],
})
export class ShowCounterComponent implements OnInit {
  count = 0;
  constructor(private counterService: CounterService) {}
  negative = false;

  ngOnInit() {
    this.counterService.counter.subscribe((num) => (this.count = num));
    this.counterService.negative.subscribe((bool) => (this.negative = bool));
  }
}
