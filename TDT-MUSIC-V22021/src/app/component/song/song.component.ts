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
  formGroup !: FormGroup;
  songModelObj: SongModel = new SongModel();
  songData !: any;

  constructor(private formBuilder: FormBuilder,
              private songService: SongService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
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
    this.getSongData();
  }

  getSongData(): void {
    this.songService.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }


  deleteSong(song: any) {
    if (confirm("Are you Sure?")) {
      this.songData = this.songData.filter((i: any) => i !== song);
      this.songService.deleteSong(song.id).subscribe(res => {
        this.getSongData();
      })
    }
  }

  onUpdate(song: any) {
    this.songModelObj.id = song.id;
    this.formGroup.controls['title'].setValue(song.title);
    this.formGroup.controls['description'].setValue(song.description);
    this.formGroup.controls['mp3'].setValue(song.mp3);
    this.formGroup.controls['image'].setValue(song.image);
    this.formGroup.controls['artist'].setValue(song.artist);
    this.formGroup.controls['genre'].setValue(song.genre);
    this.formGroup.controls['album'].setValue(song.album);
    this.formGroup.controls['singer_id'].setValue(song.singer_id);
    this.formGroup.controls['user_id'].setValue(song.user_id);
    this.formGroup.controls['listens'].setValue(song.listens);
  }

}
