import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MusicPlayerComponent} from "./components/music-player/music-player.component";
import {AppComponent} from "./app.component";
import {AlbumComponent} from "./components/album/album.component";

const routes: Routes = [
  // {
  //   path: 'components/login',
  //   component: LoginComponent,
  // },
  // {
  //   path:'components/music-player',
  //   component: MusicPlayerComponent,
  // }
  {
    path: '',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
