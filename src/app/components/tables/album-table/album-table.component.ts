import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "album-table",
  templateUrl: "./album-table.component.html",
  styleUrls: ["./album-table.component.css"]
})
export class AlbumTableComponent implements OnInit {
  @Input() albums: any[];
  constructor() {}

  ngOnInit() {}
}
