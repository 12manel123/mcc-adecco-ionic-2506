import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonGridComponent } from './ion-grid/ion-grid.component';
import { GridPrincipalComponent } from './ion-grid/grid-principal/grid-principal.component';
import { GridSecundarioComponent } from './ion-grid/grid-secundario/grid-secundario.component';
import { CardProductoComponent } from './card-producto/card-producto.component';

@NgModule({
  declarations: [IonGridComponent, GridPrincipalComponent, GridSecundarioComponent,CardProductoComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonGridComponent, GridPrincipalComponent, GridSecundarioComponent,CardProductoComponent]
})
export class BodyModule { }
