import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numero1:number;
  numero2:number;
  resultado:number;

  constructor() {}

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  limpiar_resultado() {
    this.resultado = null;
  }
}
