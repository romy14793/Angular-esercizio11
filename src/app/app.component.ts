import { Component } from '@angular/core';

@Component({
  selector: 'exprj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numReceived!: number;
  negativeNum!: boolean;
  title = 'exprj';
  sendNumber(num: any) {
    this.numReceived = num;
  }
  negative(bool: any) {
    this.negativeNum = bool;
  }
}
