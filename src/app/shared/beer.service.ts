import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of, Subject } from 'rxjs';
import { Beer, Name, Type } from 'src/models/Beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  beers: Beer[] = [
    {
      id: 1,
      type: Type.small,
      name: Name.Moretti,
      price: 2,
    },
    {
      id: 2,
      type: Type.medium,
      name: Name.Moretti,
      price: 3,
    },
    {
      id: 3,
      type: Type.small,
      name: Name.Heineken,
      price: 2.5,
    },
    {
      id: 4,
      type: Type.medium,
      name: Name.Heineken,
      price: 3.5,
    },
    {
      id: 5,
      type: Type.small,
      name: Name.Menabrea,
      price: 2.5,
    },
    {
      id: 6,
      type: Type.medium,
      name: Name.Menabrea,
      price: 4,
    },
    {
      id: 7,
      type: Type.small,
      name: Name.Peroni,
      price: 2,
    },
    {
      id: 8,
      type: Type.medium,
      name: Name.Peroni,
      price: 3,
    },
    {
      id: 9,
      type: Type.small,
      name: Name.Forst,
      price: 1,
    },
    {
      id: 10,
      type: Type.medium,
      name: Name.Forst,
      price: 2,
    },
    {
      id: 11,
      type: Type.small,
      name: Name.Erdinger,
      price: 2.5,
    },
    {
      id: 12,
      type: Type.medium,
      name: Name.Erdinger,
      price: 4,
    },
    {
      id: 13,
      type: Type.small,
      name: Name.Budweiser,
      price: 2.5,
    },
    {
      id: 14,
      type: Type.medium,
      name: Name.Budweiser,
      price: 3.5,
    },
    {
      id: 15,
      type: Type.small,
      name: Name.Norbertus,
      price: 3.5,
    },
    {
      id: 16,
      type: Type.medium,
      name: Name.Norbertus,
      price: 5,
    },
    {
      id: 17,
      type: Type.small,
      name: Name.Becks,
      price: 2,
    },
    {
      id: 18,
      type: Type.medium,
      name: Name.Becks,
      price: 3.5,
    },
    {
      id: 19,
      type: Type.small,
      name: Name.Dreher,
      price: 2,
    },
    {
      id: 20,
      type: Type.medium,
      name: Name.Dreher,
      price: 3,
    },
  ];
  beerNames = Object.keys(Name);
  beerTypes = Object.keys(Type);
  selectedBeer = {};
  beers$ = from(this.beers);

  constructor() {}
  getAllBeers() {
    return this.beers$;
  }
  getBeer(id: number) {
    return this.beers$.pipe(filter((val) => val.id == id));
  }
  sendFormValues(name: any, type: any) {
    return this.beers$.pipe(filter((el) => el.name == name && el.type == type));
  }
}
