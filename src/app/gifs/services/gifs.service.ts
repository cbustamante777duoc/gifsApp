import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'B6dTxEDwOm9Pv3qKvrB3fXNpfyFMaBI7';
  private _historial:string [] = [];

  public resultado:Gif[] = [];

  //[...] es para romper la referencia
  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

  }

  buscarGifs(query:string){

    query = query.trim().toLowerCase();

    //si esta repetida la busqueda no la incluya dentro del arreglo(_historial)
    if (!this._historial.includes(query)) {
      
      //se va insertar query al comienzo del historial
      this._historial.unshift(query);
      //limita el historial de busqueda a 10 
      this._historial = this._historial.splice(0,10);
    
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=B6dTxEDwOm9Pv3qKvrB3fXNpfyFMaBI7&q=${query}e&limit=10`)
        .subscribe((resp) =>{
          console.log(resp.data);
          this.resultado = resp.data;
        })




  }



  
}
