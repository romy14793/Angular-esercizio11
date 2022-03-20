import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeerService } from '../shared/beer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Beer } from 'src/models/Beer';
@Component({
  selector: 'ex11-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(private beerService: BeerService, private fb: FormBuilder) {}
  beerNames = this.beerService.beerNames;
  beerTypes = this.beerService.beerTypes;
  beerList = this.beerService.beers;
  @Output() beerEvent = new EventEmitter<Observable<Beer>>();
  private beerSubject = new BehaviorSubject<Beer>({} as Beer);
  beer$ = this.beerSubject.asObservable();
  form = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
  });
  ngOnInit(): void {
    this.beerEvent.emit(this.beer$);
  }
  onSubmit() {
    this.beerService
      .sendFormValues(
        this.form.get('name')?.value,
        this.form.get('type')?.value
      )
      .subscribe((el) => this.beerSubject.next(el));
  }
}
