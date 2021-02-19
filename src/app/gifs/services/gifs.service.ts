import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'B6dTxEDwOm9Pv3qKvrB3fXNpfyFMaBI7';
  private _historial:string [] = [];
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs';

  public resultado:Gif[] = [];

  //[...] es para romper la referencia
  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    if (localStorage.getItem('historial')) {
      //el signo de admiracion al final para que typescript no reclame
      this._historial = JSON.parse(localStorage.getItem('historial')!)
      
    }

    if (localStorage.getItem('resultados')) {
      this.resultado = JSON.parse(localStorage.getItem('resultados')!)
    }

  }

  buscarGifs(query:string){

    query = query.trim().toLowerCase();

    //si esta repetida la busqueda no la incluya dentro del arreglo(_historial)
    if (!this._historial.includes(query)) {
      
      //se va insertar query al comienzo del historial
      this._historial.unshift(query);
      //limita el historial de busqueda a 10 
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    
    }

    //llamada a la api

    //parametro usado en http
    const params = new HttpParams()
            .set('api_key',this.apiKey)
            .set('limit','10')
            .set('q',query);


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params:params})
        .subscribe((resp) =>{
          console.log(resp.data);
          this.resultado = resp.data;
          localStorage.setItem('resultados',JSON.stringify(this.resultado));
        })




  }



  
}
