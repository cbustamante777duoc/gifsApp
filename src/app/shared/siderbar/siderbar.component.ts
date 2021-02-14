import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent  {

  get historial(){
    return this.gifsService.historial;
  }
  
  
  
  constructor(private gifsService:GifsService) { }

  

}
