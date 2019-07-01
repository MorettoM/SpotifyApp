import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../../services/spotify-service.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  tracks: any[];
  artists: any[];
  loading: boolean;
  error: boolean;
  Error: string;
  search: string;
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.search = params["search"];
    });
    this.loading = true;
    this.error = false;

    this.spotify.searchTrack(this.search, "10").subscribe(
      (data: any) => {
        console.log(data);
        this.tracks = data;
      },
      errorServicio => {
        this.error = true;
        this.Error = errorServicio.error.error.message;
      }
    );
    this.spotify.searchArtist(this.search, "5").subscribe(
      (data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      },
      errorServicio => {
        this.loading = false;
        this.Error = errorServicio.error.error.message;
      }
    );
  }
  ngOnInit() {}
}
