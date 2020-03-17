import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color:  'Accent';
  mode: 'determinate';
  valueFavorables = 24;
  bufferValueFavorables = 100;

  valueDesvirtuados = 33;
  bufferValueDesvirtuados = 100;

  valuePresuntos = 62;
  bufferValuePresuntos = 100;

  valueDefinitivos = 41;
  bufferValueDefinitivos = 100;

}
