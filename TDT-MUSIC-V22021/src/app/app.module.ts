import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './component/song/song.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './component/home/home.component';
import { AlbumComponent } from './component/album/album.component';
import { ArtistComponent } from './component/artist/artist.component';
import { GenreComponent } from './component/genre/genre.component';
import { TopTrackComponent } from './component/top-track/top-track.component';
import { AuthComponent } from './component/auth/auth.component';
import {LoadComponent} from "./layout/load/load.component";
import {MenuComponent} from "./layout/menu/menu.component";
import {FooterComponent} from "./layout/footer/footer.component";
import { UserComponent } from './component/user/user.component';
import { UserTrackListComponent } from './component/user-track-list/user-track-list.component';
import { QueueComponent } from './component/queue/queue.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    HomeComponent,
    AlbumComponent,
    ArtistComponent,
    GenreComponent,
    TopTrackComponent,
    AuthComponent,
    LoadComponent,
    MenuComponent,
    FooterComponent,
    UserComponent,
    UserTrackListComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
