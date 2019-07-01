import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "Navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  search: string;
  location = location.pathname;
  constructor(private route: Router) {}
  ngOnInit() {}
}
