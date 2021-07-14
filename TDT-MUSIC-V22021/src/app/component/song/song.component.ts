import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongModel} from "./song.model";
import {SongService} from "../../service/song.service";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  formValue !: FormGroup;
  songModelObj: SongModel = new SongModel();
  songData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder: FormBuilder,
              private api: SongService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
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
    this.api.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }

  clickAddSong():void {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postSong():void {
    this.songModelObj.song_name = this.formValue.value.song_name;
    this.songModelObj.description = this.formValue.value.description;
    this.songModelObj.filename = this.formValue.value.filename;
    this.songModelObj.image = this.formValue.value.image;
    this.songModelObj.musician = this.formValue.value.musician;
    this.songModelObj.genre = this.formValue.value.genre;
    this.songModelObj.album = this.formValue.value.album;
    this.songModelObj.singer_id = this.formValue.value.singer_id;
    this.songModelObj.user_id = this.formValue.value.user_id;

    this.api.postSong(this.songModelObj).subscribe(res =>{
      alert("Song Add Success.");
        let ref = document.getElementById('cancel')
        ref?.click();
      this.formValue.reset();
      this.getSongData();
    },
      error => {
      alert("Something Went Wrong!");
      })
  }

  deleteSong(item: any) {
    if (confirm("Are you Sure?")){
      this.songData = this.songData.filter((i: any) => i !== item);
      this.api.deleteSong(item.id).subscribe( res => {
        this.getSongData();
      })
    }
  }

  onUpdate(item: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.songModelObj.id = item.id;
    this.formValue.controls['song_name'].setValue(item.song_name);
    this.formValue.controls['description'].setValue(item.description);
    this.formValue.controls['filename'].setValue(item.filename);
    this.formValue.controls['image'].setValue(item.image);
    this.formValue.controls['musician'].setValue(item.musician);
    this.formValue.controls['genre'].setValue(item.genre);
    this.formValue.controls['album'].setValue(item.album);
    this.formValue.controls['singer_id'].setValue(item.singer_id);
    this.formValue.controls['user_id'].setValue(item.user_id);
  }

  updateSongDetails() {
    this.songModelObj.song_name = this.formValue.value.song_name;
    this.songModelObj.description = this.formValue.value.description;
    this.songModelObj.filename = this.formValue.value.filename;
    this.songModelObj.image = this.formValue.value.image;
    this.songModelObj.musician = this.formValue.value.musician;
    this.songModelObj.genre = this.formValue.value.genre;
    this.songModelObj.album = this.formValue.value.album;
    this.songModelObj.singer_id = this.formValue.value.singer_id;
    this.songModelObj.user_id = this.formValue.value.user_id;

    this.api.updateSong(this.songModelObj, this.songModelObj.id)
      .subscribe(res =>{
        alert("Update Successfully.");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getSongData();
      })
  }
}
