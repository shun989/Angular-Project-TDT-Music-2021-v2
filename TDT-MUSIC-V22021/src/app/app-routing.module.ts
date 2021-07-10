import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AlbumComponent} from "./component/album/album.component";
import {ArtistComponent} from "./component/artist/artist.component";
import {GenreComponent} from "./component/genre/genre.component";
import {SongComponent} from "./component/song/song.component";
import {TopTrackComponent} from "./component/top-track/top-track.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'artist',
    component: ArtistComponent
  },
  {
    path: 'genre',
    component: GenreComponent
  },
  {
    path: 'song',
    component: SongComponent
  },
  {
    path: 'top-track',
    component: TopTrackComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
