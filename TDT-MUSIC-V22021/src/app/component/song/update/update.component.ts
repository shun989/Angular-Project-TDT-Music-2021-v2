import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";
<<<<<<< HEAD
import {HttpClient, HttpHeaders} from "@angular/common/http";
=======
import {SingerService} from "../../../service/singer.service";
import {AuthService} from "../../../service/auth.service";
import {HttpClient} from "@angular/common/http";
>>>>>>> 4a9cb30f906da66d807bb13fc2025c9bc38fa891

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

<<<<<<< HEAD
  mp3: any | undefined
  constructor(private songService: SongService,
              private http : HttpClient) { }

  ngOnInit(): void {
=======
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
>>>>>>> 4a9cb30f906da66d807bb13fc2025c9bc38fa891
  }

  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.mp3 = event.target.files[0];
    }
  }
  onSubmit(): void {
    const formData = new FormData();
    formData.append('mp3', this.mp3);
    formData.append('title', 'Phố Đã Lên Đèn');
    formData.append('description', 'Trống');
    formData.append('image', 'Trống');
    formData.append('artist', 'Trống');
    formData.append('singer_id', '1');
    formData.append('user_id', '1');
    formData.append('genre', 'Trống');
    formData.append('album', 'Trống');
    formData.append('listens', '1');

    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    this.http.post<any>('http://127.0.0.1:8000/api/songs/upload-music', formData,httpOptions).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
<<<<<<< HEAD
=======

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


>>>>>>> 4a9cb30f906da66d807bb13fc2025c9bc38fa891
}
