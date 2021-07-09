import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './component/song/song.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./component/layout/navbar/navbar.component";
import {MenuComponent} from "./component/layout/menu/menu.component";
import {FooterComponent} from "./component/layout/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent
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
