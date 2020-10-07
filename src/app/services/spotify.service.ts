import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCSxL0LXQi7h1o3YdRKPpOAOUge-x2GOp8WHARusegc0krafSHzEnOydg0quM2u2T5b-H-FDC65Qhamaw0',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }

  getCanciones(termino: string) {
    return this.getQuery(`search?q=${termino}&type=track&limit=15`).pipe(
      map((data) => {
        return data['tracks'].items;
      })
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);

    // .pipe(
    //   map((data) => {
    //     return data['artists'].items;
    //   })
    // );
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => {
        return data['tracks'];
      })
    );
  }
}
