import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  constructor(private gifsService:GifsService){

  }

  //txtBuscar es la id del elemento
  //HTMLInputElement es del tipo (any,string,number) 
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    //recoge el valor que envia el usuario
    const valor = this.txtBuscar.nativeElement.value;

    //evitar caracterez vacios
    if (valor.trim().length===0) {
      return;
    }

    //inserta un elemento en arreglo de historial (gifs.service.ts)
    this.gifsService.buscarGifs(valor);
    //limpia el input
    this.txtBuscar.nativeElement.value = '';
  }

  

}
