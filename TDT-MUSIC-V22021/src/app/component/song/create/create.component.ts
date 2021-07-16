import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SingerService} from "../../../service/singer.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private songUrl = "http://localhost:8000/api/songs";
  fileData: any;
  formCreate !: FormGroup;
  songModelObj: SongModel = new SongModel();
  songData !: any;
  singerData !: any;
  isLogin: boolean | undefined;
  user: any;
  mp3: any;

  constructor(private formBuilder: FormBuilder,
              private songService: SongService,
              private singerService: SingerService,
              private authService: AuthService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      title: [''],
      description: [''],
      mp3: [''],
      image: [''],
      artist: [''],
      genre: [''],
      album: [''],
      singer_id: [''],
      user_id: [''],
      listens: ['']
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

  getSongData(): void {
    this.songService.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }

  fileEvent(e: any) {
    this.fileData = e.target.files[0];
  }

  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.mp3 = event.target.files[0];
    }
  }

  onSubmit(): void {

    const formData = new FormData();
    const headers = new HttpHeaders();
    formData.append('mp3',this.mp3, this.formCreate.value.mp3);
    formData.append('title', this.formCreate.value.title);
    formData.append('description', this.formCreate.value.description);
    formData.append('image', this.formCreate.value.image);
    formData.append('artist', this.formCreate.value.artist);
    formData.append('singer_id', this.formCreate.value.singer_id);
    formData.append('user_id', this.formCreate.value.user_id);
    formData.append('genre', this.formCreate.value.genre);
    formData.append('album', this.formCreate.value.album);
    formData.append('listens', this.formCreate.value.listens);
    // let token =localStorage.getItem('token');
    // let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    // let httpOptions = {headers: headers_object};
    this.http.post<any>('http://localhost:8000/api/upload', formData,{
      headers: headers
    }).subscribe(res=>{
        console.log(res);
        alert("Add Success.");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formCreate.reset();
        this.getSongData();
      },
      error => {
        alert("Something Went Wrong!");
    })
      // (res) => console.log(res),
      // (err) => console.log(err)
  }

  // postSong(): void {
  //   this.songModelObj.title = this.formCreate.value.title;
  //   this.songModelObj.description = this.formCreate.value.description;
  //   this.songModelObj.mp3 = this.formCreate.value.mp3;
  //   this.songModelObj.image = this.formCreate.value.image;
  //   this.songModelObj.artist = this.formCreate.value.artist;
  //   this.songModelObj.genre = this.formCreate.value.genre;
  //   this.songModelObj.album = this.formCreate.value.album;
  //   this.songModelObj.singer_id = this.formCreate.value.singer_id;
  //   this.songModelObj.user_id = this.formCreate.value.user_id;
  //   this.songModelObj.listens = this.formCreate.value.listens;
  //
  //   this.songService.postSong(this.songModelObj).subscribe(res => {
  //       alert("Song Add Success.");
  //       let ref = document.getElementById('cancel')
  //       ref?.click();
  //       this.formCreate.reset();
  //       this.getSongData();
  //     },
  //     error => {
  //       alert("Something Went Wrong!");
  //     });
  //
  // }

  onSubmitForm() {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('music', this.fileData);
    /* Image Post Request */
    this.http.post('http://localhost:8000/api/upload-file', myFormData, {
      headers: headers
    }).subscribe(res => {

      // Swal.fire({
      //   title: 'Hurray!!',
      //   // @ts-ignore
      //   text:  res['message'],
      //   icon: 'success'
      // });
    });
  }


}
