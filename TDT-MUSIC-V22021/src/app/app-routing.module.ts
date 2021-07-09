import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SongComponent} from "../../../../Angular-Project-TDT-Music-2021/my-project/src/app/component/song/song.component";

const routes: Routes = [
  {
    path: 'component/song',
    component: SongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
