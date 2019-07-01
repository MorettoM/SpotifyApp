import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "Playbar",
  templateUrl: "./playbar.component.html",
  styleUrls: ["./playbar.component.css"]
})
export class PlaybarComponent implements OnInit {
  @Input() song: any;
  url;
  sanitizedUrl;

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {}
  ngOnChanges() {
    if (this.song) {
      this.url =
        "https://open.spotify.com/embed/track/" + this.song.id.toString();
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.url
      );
      console.log(this.song.external_urls);
    }
  }
}
