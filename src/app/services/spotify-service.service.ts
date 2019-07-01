import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  authToken: any;
  /*body = new URLSearchParams({
    grant_type: "client_credentials"
  });
  header = new HttpHeaders({
    Authorization:
      "Basic <base64 encoded a53d47c028a5449080344c6b15cc38f0:7a3bac19d6cd42d5a55c6cb03cdb5bb2>"
  });*/
  constructor(private http: HttpClient) {
    this.authToken =
      "BQBfKQX3uIBpBWwESXQp4U7y9w7yCQkOQ-E1UuSVyHR1AN9zEu4jYptaag7fDmPIxbr3TeXXnHS44cvkr4g";
  }
  /*getToken() {
    this.http
      .post("https://accounts.spotify.com/api/token", this.body, {
        headers: this.header
      })
      .subscribe(data => {
        console.log(data);
        return data;
      });
  }*/
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.authToken
    });
    return this.http.get(url, { headers });
  }
  // SEARCH FOR ARTIST/TRACK USING USER INPUT
  searchTrack(search: string, limit: string) {
    return this.getQuery(`search?q=${search}&type=track&limit=${limit}`).pipe(
      map(data => data["tracks"].items)
    );
  }
  searchArtist(search: string, limit: string) {
    return this.getQuery(`search?q=${search}&type=artist&limit=${limit}`).pipe(
      map(data => data["artists"].items)
    );
  }
  // GET SEVERAL TRACKS USING IDs
  getTracks(ids: string) {
    return this.getQuery(`tracks?ids=${ids}`).pipe(map(data => data["tracks"]));
  }
  // GET AN ARTIST'S ALBUMS AND DETAILS USING HIS ID
  getArtistsAlbums(id: string) {
    return this.getQuery(`artists/${id}/albums`).pipe(
      map(data => data["items"])
    );
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  // GET AN ALBUM USING ITS ID
  getAlbum(id: string) {
    return this.getQuery(`albums/${id}`);
  }
  // GET NEW RELEASES FROM ARGENTINA
  getPlaylist() {
    return this.getQuery(
      "playlists/3rZxxXCtmadQUjaUe9VGIw/tracks?offset=0&limit=100"
    ).pipe(map((data: any) => data.items));
  }
}
