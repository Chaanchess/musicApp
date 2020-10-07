import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas:any []= [];
  artistasBuscas: any[];
  loading: boolean;

  constructor( private spotify: SpotifyService) { 
  }

  buscar(termino: string){
    console.log(termino);
    this.loading = true;

    if(termino==""){
      this.loading=false;
    }

    this.spotify.getArtistas(termino)
      .subscribe((data: any)=>{
        console.log(data);
        this.artistas = data;
        this.artistasBuscas = this.artistas;
        this.loading=false;
      });
  }
}
