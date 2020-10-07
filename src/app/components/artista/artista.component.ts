import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent{

  loading: boolean;
  loadingSong: boolean;

  artista: any = {};

  topTracks: any[]= [];

  constructor( private actRoute: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.loadingSong = true;
    this.actRoute.params.subscribe(params=>{
      this.getArtista(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }


  getArtista(id: string){
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe(artista=>{
        console.log(artista);
        this.artista = artista;
        this.loading= false;
      })
  }

  getTopTracks(id: string){
    this.loadingSong = true;
    this.spotify.getTopTracks(id)
      .subscribe(data=>{
        console.log(data);
        this.topTracks = data;
        this.loadingSong = false;
      })
  }



}
