import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { PlaybarComponent } from "./components/shared/playbar/playbar.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { SearchComponent } from "./components/pages/search/search.component";
import { ArtistTableComponent } from "./components/tables/artist-table/artist-table.component";
import { TrackTableComponent } from "./components/tables/track-table/track-table.component";
import { ArtistComponent } from "./components/pages/artist/artist.component";
import { AlbumTableComponent } from "./components/tables/album-table/album-table.component";
import { AlbumComponent } from "./components/pages/album/album.component";
import { FormatDurationPipe } from "./pipes/format-duration.pipe";
import { FormatNoImagePipe } from "./pipes/format-no-image.pipe";
import { PlaylistTableComponent } from "./components/tables/playlist-table/playlist-table.component";
import { CutStringPipe } from "./pipes/cut-string.pipe";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "album", component: AlbumComponent },
  { path: "artist", component: ArtistComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaybarComponent,
    HomeComponent,
    LoadingComponent,
    SearchComponent,
    ArtistTableComponent,
    TrackTableComponent,
    ArtistComponent,
    AlbumTableComponent,
    AlbumComponent,
    FormatDurationPipe,
    FormatNoImagePipe,
    PlaylistTableComponent,
    CutStringPipe
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
