import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscarcancion',
  templateUrl: './buscarcancion.component.html',
  styleUrls: ['./buscarcancion.component.css']
})
export class BuscarcancionComponent{

  canciones: any[]=[];
  cancionesBuscas: any[];
  loading: boolean;

  constructor( private spotify: SpotifyService) { }


  buscar(termino: string){
    console.log(termino);
    this.loading = true;

    if(termino==""){
      this.loading=false;
    }

    this.spotify.getCanciones(termino)
      .subscribe((data: any)=>{
        console.log(data);
        this.canciones = data;
        this.cancionesBuscas = this.canciones;
        this.loading=false;
      });
  }

}
