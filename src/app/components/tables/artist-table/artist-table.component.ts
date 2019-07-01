import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "artist-table",
  templateUrl: "./artist-table.component.html",
  styleUrls: ["./artist-table.component.css"]
})
export class ArtistTableComponent implements OnInit {
  @Input() items: any[] = [];
  constructor() {}

  ngOnInit() {}
}
