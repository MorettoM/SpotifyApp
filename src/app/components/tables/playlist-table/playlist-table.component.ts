import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "playlist-table",
  templateUrl: "./playlist-table.component.html",
  styleUrls: ["./playlist-table.component.css"]
})
export class PlaylistTableComponent implements OnInit {
  @Input() items: any[];
  @Input() albImage: string;
  actualSong: any;
  favSongs: any[];
  constructor() {}
  ngOnInit() {
    this.favSongs = Object.keys(localStorage);
  }
  setToFav = id => {
    if (localStorage.getItem(id)) {
      this.favSongs.splice(this.favSongs.indexOf(id), 1);
      console.log(this.favSongs);
      localStorage.removeItem(id);
    } else {
      this.favSongs.push(id);
      localStorage.setItem(id, id);
    }
  };
  playSong = track => {
    this.actualSong = track;
  };
  sortTable = type => {
    if (type == "down") {
      this.items.sort((a, b) => {
        if (a.track.duration_ms > b.track.duration_ms) {
          return 1;
        } else if (a.track.duration_ms < b.track.duration_ms) {
          return -1;
        }
        return 0;
      });
    }
    if (type == "up") {
      this.items.sort((b, a) => {
        if (a.track.duration_ms > b.track.duration_ms) {
          return 1;
        } else if (a.track.duration_ms < b.track.duration_ms) {
          return -1;
        }
        return 0;
      });
    }
  };
}
