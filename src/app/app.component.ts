import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/models/Beer';

@Component({
  selector: 'ex11-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'esercizio11';
  beer$!: Observable<Beer>;
  beerEvent(beer: Observable<Beer>) {
    this.beer$ = beer;
  }
}
