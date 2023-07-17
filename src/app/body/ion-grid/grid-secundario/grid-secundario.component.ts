import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-secundario',
  templateUrl: './grid-secundario.component.html',
  styleUrls: ['./grid-secundario.component.scss'],
})
export class GridSecundarioComponent{

  products = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 15 },
    { name: 'Producto 3', price: 20 },
    { name: 'Producto 4', price: 25 },
    { name: 'Producto 5', price: 35 },
    { name: 'Producto 6', price: 45 }
  ];

}
