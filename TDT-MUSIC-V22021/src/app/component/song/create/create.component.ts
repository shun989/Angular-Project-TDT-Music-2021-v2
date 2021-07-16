import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SingerService} from "../../../service/singer.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  mp3: any | undefined
  formCreate: FormGroup | undefined;
  // @ts-ignore
  singers!: Array
  constructor(private songService: SongService,
              private http: HttpClient,
              private fb: FormBuilder,
              private singerService: SingerService) {
  }

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      title: [''],
      mp3: [this.mp3],
      description: [''],
      image: [''],
      artist: [''],
      singer_id:[''],
      user_id:[''],
      genre:[''],
      album:[''],
      listens:['']
    })
    this.getAllSinger()
  }

  getAllSinger(){
    this.singerService.getAllSinger().subscribe(res => {
      this.singers = res;
      console.log(this.singers)
    })
  }

  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.mp3 = event.target.files[0];
    }
  }
  onSubmit(): void {
   let  songData =this.formCreate?.value
    songData.mp3 = this.mp3
    let user = JSON.parse(<string>(localStorage.getItem('user')));
    const formData = new FormData();
    formData.append('mp3', this.mp3);
    formData.append('title', songData.title);
    formData.append('description', songData.description);
    formData.append('image',  songData.image);
    formData.append('artist',songData.artist);
    formData.append('singer_id', songData.singer_id);
    formData.append('user_id',user.id);
    formData.append('genre',  songData.genre);
    formData.append('album', songData.album);
    formData.append('listens', '0');
   this.songService.createSong(formData);
  }
}
