import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista:any={};
  topTracks:any[]=[];

  loading:boolean;

  
  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService ) {
    
    this.loading=true;//cuando recien se esta cargando

    this.router.params.subscribe(params=>{

       //console.log(params);
      // console.log(params['id']);
      this.getArtista(params['id']); //llamando buscador por artista por id
      this.getTopTracks(params['id']);

    });

   }
  
  getArtista(id:string){

    this.loading=true;

    this.spotify.getArtista(id)
    .subscribe(artista=>{
       console.log(artista);
       this.artista=artista;
       this.loading=false; // cuando ya se cargo
    });

  }

  getTopTracks(id:string){ 

    this.spotify.getTopTracks(id)
        .subscribe(toptracks=>{
          console.log(toptracks);
          this.topTracks=toptracks;
        })
  }
   
  
}
