import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('spotify services listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6znCzuvLb5ZTpIbP8yg7KetWJhdRL__CflqBrn52YHmyIDb6K-R_9jwnnmKgCBf_sXC7hj_N1A2aQHbbDqRY_0YVciSQU5OqdJnZs2nzlJgGndLQ1R-Rz-q4DFbOVPMWjBjgK30Oqc4ZyBp_ocrSHt4ZlkSA'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
              .pipe(map(data=>data['albums'].items));
    /* .subscribe(data=>{
      console.log(data)
    }) */

   }

   getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6znCzuvLb5ZTpIbP8yg7KetWJhdRL__CflqBrn52YHmyIDb6K-R_9jwnnmKgCBf_sXC7hj_N1A2aQHbbDqRY_0YVciSQU5OqdJnZs2nzlJgGndLQ1R-Rz-q4DFbOVPMWjBjgK30Oqc4ZyBp_ocrSHt4ZlkSA'
    });

   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`,{headers})
          .pipe(map(data=>{
            return data['artists'].items;
          }));

   
   
   }

   
}
