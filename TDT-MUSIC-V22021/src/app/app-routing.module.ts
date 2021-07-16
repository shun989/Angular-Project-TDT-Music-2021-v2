import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AlbumComponent} from "./component/album/album.component";
import {ArtistComponent} from "./component/artist/artist.component";
import {GenreComponent} from "./component/genre/genre.component";
import {SongComponent} from "./component/song/song.component";
import {TopTrackComponent} from "./component/top-track/top-track.component";
import {UploadComponent} from "./upload/upload.component";
import {CreateComponent} from "./component/song/create/create.component";
import {UpdateComponent} from "./component/song/update/update.component";

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
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
    path: 'user',
    children: [
      {
        path: 'song',
        component: SongComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'update',
        component: UpdateComponent
      }
    ]
  },
  {
    path: 'top-track',
    component: TopTrackComponent
  },
  {
    path: 'upload-file',
    component: UploadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
