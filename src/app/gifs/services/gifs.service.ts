import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:string [] = [];

  //[...] es para romper la referencia
  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string){

    //se va insertar query al comienzo del historial
    this._historial.unshift(query);

    console.log(this._historial)
  }



  
}
