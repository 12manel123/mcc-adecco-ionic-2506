import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-principal',
  templateUrl: './grid-principal.component.html',
  styleUrls: ['./grid-principal.component.scss']
})
export class GridPrincipalComponent {
  products = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 15 },
    { name: 'Producto 3', price: 20 },
    { name: 'Producto 4', price: 25 }
  ];

  // Agrega cualquier lógica adicional necesaria
}