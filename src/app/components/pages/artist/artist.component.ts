import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify-service.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  albums: any[];
  artist: any;
  artistId: string;
  loading: boolean;
  error: boolean;
  Error: string;
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.artistId = params["id"];
    });
    this.spotify.getArtist(this.artistId).subscribe(
      (data: any) => {
        console.log(data);
        this.artist = data;
        this.loading = false;
      },
      errorServicio => {
        this.loading = false;
        this.error = true;
        this.Error = errorServicio.error.error.message;
      }
    );
    this.spotify.getArtistsAlbums(this.artistId).subscribe((data: any) => {
      console.log(data);
      this.albums = data;
      this.loading = false;
    });
  }
  ngOnInit() {}
}
