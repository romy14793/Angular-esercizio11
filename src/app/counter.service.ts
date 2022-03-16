import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}
  private _counter = 0;
  negative = new Subject<boolean>();
  subjectCounter = new BehaviorSubject<number>(this._counter);
  counter$ = this.subjectCounter.asObservable();
  get counter() {
    return this.counter$;
  }
  increase(num: number) {
    this.negative.next(false);
    this._counter += num;
    this.subjectCounter.next(this._counter);
  }
  reduce(num: number) {
    if (this._counter - num < 0) {
      this.negative.next(true);
    } else {
      this.negative.next(false);
      this._counter -= num;
      this.subjectCounter.next(this._counter);
    }
  }
}
