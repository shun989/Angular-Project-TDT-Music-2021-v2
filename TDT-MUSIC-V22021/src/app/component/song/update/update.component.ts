import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";
import {SingerService} from "../../../service/singer.service";
import {AuthService} from "../../../service/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdate !: FormGroup;
  songModelObj: SongModel = new SongModel();
  songData !: any;
  singerData !: any;
  isLogin !: boolean;
  user: any;
  mp3: any;

  constructor(private formBuilder: FormBuilder,
              private songService: SongService,
              private singerService: SingerService,
              private authService: AuthService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.formUpdate = this.formBuilder.group({
      title: [''],
      description: [''],
      mp3: [''],
      image: [''],
      artist: [''],
      genre: [''],
      album: [''],
      singer_id: [''],
      user_id: ['']
    })
    this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.checkLogin();
    this.getUserLogin()
    this.getSongData();
    this.getSingerData();
  }

  checkLogin(): void {
    this.isLogin = this.authService.isLogin();
  }

  getUserLogin(): void {
    if (this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
    }
    console.log(this.user.username)
  }

  getSingerData(): void {
    this.singerService.getAllSingers().subscribe(res => {
      this.singerData = res;
    })
  }

  getSongData():void {
    this.songService.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }

  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.mp3 = event.target.files[0];
    }
  }


  updateSong() {
  //   this.songModelObj.title = this.formUpdate.value.title;
  //   this.songModelObj.description = this.formUpdate.value.description;
  //   this.songModelObj.mp3 = this.formUpdate.value.mp3;
  //   this.songModelObj.image = this.formUpdate.value.image;
  //   this.songModelObj.artist = this.formUpdate.value.artist;
  //   this.songModelObj.genre = this.formUpdate.value.genre;
  //   this.songModelObj.album = this.formUpdate.value.album;
  //   this.songModelObj.singer_id = this.formUpdate.value.singer_id;
  //   this.songModelObj.user_id = this.formUpdate.value.user_id;
  //   this.songModelObj.listens = this.formUpdate.value.listens;
  //
  //   this.songService.updateSong(this.songModelObj, this.songModelObj.id)
  //     .subscribe(res =>{
  //       alert("Update Successfully.");
  //       let ref = document.getElementById('cancel')
  //       ref?.click();
  //       this.formUpdate.reset();
  //       this.getSongData();
  //     })
  }

}
