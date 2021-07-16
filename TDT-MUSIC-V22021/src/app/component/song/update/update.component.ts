import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SongModel} from "../song.model";
import {SongService} from "../../../service/song.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdate !: FormGroup;
  songModelObj: SongModel = new SongModel();
  songData !: any;

  constructor(private formBuilder: FormBuilder,
              private songService: SongService) { }

  ngOnInit(): void {
    this.formUpdate = this.formBuilder.group({
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


  // onUpdate(item: any) {
  //   this.songModelObj.id = item.id;
  //   this.formUpdate.controls['song_name'].setValue(item.song_name);
  //   this.formUpdate.controls['description'].setValue(item.description);
  //   this.formUpdate.controls['filename'].setValue(item.filename);
  //   this.formUpdate.controls['image'].setValue(item.image);
  //   this.formUpdate.controls['musician'].setValue(item.musician);
  //   this.formUpdate.controls['genre'].setValue(item.genre);
  //   this.formUpdate.controls['album'].setValue(item.album);
  //   this.formUpdate.controls['singer_id'].setValue(item.singer_id);
  //   this.formUpdate.controls['user_id'].setValue(item.user_id);
  // }

  // updateSong() {
  //   this.songModelObj.song_name = this.formUpdate.value.song_name;
  //   this.songModelObj.description = this.formUpdate.value.description;
  //   this.songModelObj.filename = this.formUpdate.value.filename;
  //   this.songModelObj.image = this.formUpdate.value.image;
  //   this.songModelObj.musician = this.formUpdate.value.musician;
  //   this.songModelObj.genre = this.formUpdate.value.genre;
  //   this.songModelObj.album = this.formUpdate.value.album;
  //   this.songModelObj.singer_id = this.formUpdate.value.singer_id;
  //   this.songModelObj.user_id = this.formUpdate.value.user_id;
  //
  //   this.songService.updateSong(this.songModelObj, this.songModelObj.id)
  //     .subscribe(res =>{
  //       alert("Update Successfully.");
  //       let ref = document.getElementById('cancel')
  //       ref?.click();
  //       this.formUpdate.reset();
  //       this.getSongData();
  //     })
  // }

}
