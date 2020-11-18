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

   getQuery(query:string){

     const url=`https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB1VDWmzfT98KlhvtFpVcN7_KxjpORvKieVe4iN9bdU-7sdPrBseFnjs28TFcZb5D1Hcf0u1vV0KFLVLy8'
    });

    return this.http.get(url,{headers})
   }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data=>data['albums'].items));
         
   /* 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6znCzuvLb5ZTpIbP8yg7KetWJhdRL__CflqBrn52YHmyIDb6K-R_9jwnnmKgCBf_sXC7hj_N1A2aQHbbDqRY_0YVciSQU5OqdJnZs2nzlJgGndLQ1R-Rz-q4DFbOVPMWjBjgK30Oqc4ZyBp_ocrSHt4ZlkSA'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
          .pipe(map(data=>data['albums'].items)); */
    /* .subscribe(data=>{
      console.log(data)
    }) */

   }

   getArtista(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
               .pipe(map(data=>{
                  return data['artists'].items;
                }));

    /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6znCzuvLb5ZTpIbP8yg7KetWJhdRL__CflqBrn52YHmyIDb6K-R_9jwnnmKgCBf_sXC7hj_N1A2aQHbbDqRY_0YVciSQU5OqdJnZs2nzlJgGndLQ1R-Rz-q4DFbOVPMWjBjgK30Oqc4ZyBp_ocrSHt4ZlkSA'
    });

   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`,{headers})
          .pipe(map(data=>{
            return data['artists'].items;
          })); */

   
   
   }

   
}
