import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'exprj-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss'],
})
export class EditCounterComponent implements OnInit {
  input!: number;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {}
  onKey(event: any) {
    this.input = event.target.value;
  }
  add() {
    this.counterService.increase(+this.input);
  }
  sub() {
    this.counterService.reduce(+this.input);
  }
}
