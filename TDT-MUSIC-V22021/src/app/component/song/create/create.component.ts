import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  fileData:any;
  formCreate !: FormGroup;
  songModelObj: SongModel = new SongModel();
  songData !: any;

  constructor(private formBuilder: FormBuilder,
              private songService: SongService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      song_name: [''],
      description: [''],
      filename: [''],
      image: [''],
      musician: [''],
      genre: [''],
      album: [''],
      singer_id: [''],
      user_id: ['']
    })
    this.getSongData();
  }

  getSongData():void {
    this.songService.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }

  postSong():void {
    this.songModelObj.song_name = this.formCreate.value.song_name;
    this.songModelObj.description = this.formCreate.value.description;
    this.songModelObj.filename = this.formCreate.value.filename;
    this.songModelObj.image = this.formCreate.value.image;
    this.songModelObj.musician = this.formCreate.value.musician;
    this.songModelObj.genre = this.formCreate.value.genre;
    this.songModelObj.album = this.formCreate.value.album;
    this.songModelObj.singer_id = this.formCreate.value.singer_id;
    this.songModelObj.user_id = this.formCreate.value.user_id;

    this.songService.postSong(this.songModelObj).subscribe(res =>{
        alert("Song Add Success.");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formCreate.reset();
        this.getSongData();
      },
      error => {
        alert("Something Went Wrong!");
      })
  }


  fileEvent(e: any){
    this.fileData = e.target.files[0];
  }

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
