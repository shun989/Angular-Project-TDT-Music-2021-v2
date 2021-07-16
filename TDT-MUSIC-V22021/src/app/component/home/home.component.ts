import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HomeService} from "../../service/home.service";
import {AuthService} from "../../service/auth.service";
import {LoginComponent} from "../../auth/login/login.component";
declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // @ts-ignore
  songData !: Array ;
  constructor(private formBuilder: FormBuilder,
              private homeService: HomeService,
              ) {
  }

  ngOnInit(): void {
    this.getSongData();
  }

  getSongData(): void {
    this.homeService.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }

  play(filename:string){
    let data = {
      mp3: "http://127.0.0.1:8000/music/" + filename,
    }
    $('.play').on('click', function (){
      $("#jquery_jplayer_1").jPlayer("setMedia", data).jPlayer("play");
      return false;
    })
  }


}

