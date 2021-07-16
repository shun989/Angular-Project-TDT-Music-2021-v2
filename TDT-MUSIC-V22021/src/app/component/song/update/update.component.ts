import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  mp3: any | undefined
  constructor(private songService: SongService,
              private http : HttpClient) { }

  ngOnInit(): void {
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
}
