import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsPAgeComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [GifsPAgeComponent, BusquedaComponent, ResultadosComponent],
  exports:[
    GifsPAgeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
