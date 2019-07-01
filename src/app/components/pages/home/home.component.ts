import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../../services/spotify-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  favoriteTracks: any[] = [];
  arTOP: any[];
  loading: boolean = true;
  error: boolean;
  Error: string;

  constructor(private spotify: SpotifyService) {
    const tracks = [];
    const keys = Object.keys(localStorage);
    for (let i = 0; i <= keys.length; i++) {
      tracks.push(keys[i]);
    }
    const tracksId = tracks.join(",");
    if (tracksId) {
      this.spotify.getTracks(tracksId.slice(0, tracksId.length - 1)).subscribe(
        (data: any) => {
          this.favoriteTracks = data;
        },
        errorServicio => {
          this.loading = false;
          this.error = true;
          this.Error = errorServicio.error.error.message;
        }
      );
    } else {
      this.loading = false;
    }
    this.spotify.getPlaylist().subscribe(
      (data: any) => {
        this.arTOP = data;
        this.loading = false;
        console.log(data);
      },
      errorServicio => {
        this.loading = false;
      }
    );
  }
  focusSearch = () => {
    document.getElementById("search").focus();
  };

  ngOnInit() {}
}
