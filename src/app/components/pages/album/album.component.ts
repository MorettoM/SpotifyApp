import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify-service.service";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"]
})
export class AlbumComponent implements OnInit {
  albumId: string;
  album: any;
  tracks: any[];
  loading: boolean;
  error: boolean;
  Error: string;
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.albumId = params["id"];
    });
    this.spotify.getAlbum(this.albumId).subscribe(
      (data: any) => {
        console.log(data);
        this.album = data;
        this.tracks = data.tracks;
        this.loading = false;
      },
      errorServicio => {
        this.loading = false;
        this.error = true;
        this.Error = errorServicio.error.error.message;
      }
    );
  }

  ngOnInit() {}
}
