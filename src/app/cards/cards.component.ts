import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/models/Beer';
import { BeerService } from '../shared/beer.service';

@Component({
  selector: 'ex11-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  singleBeer!: Beer;
  arrayBeer!: Array<[string, number | string]>;
  @Input() beer$!: Observable<Beer>;
  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beer$.subscribe((el) => {
      this.singleBeer = el;
      this.arrayBeer = Object.entries(this.singleBeer);
    });
  }
}
