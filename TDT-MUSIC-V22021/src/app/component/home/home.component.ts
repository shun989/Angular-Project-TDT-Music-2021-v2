import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formValue !: FormGroup;
  songData !: any;

  constructor(private formBuilder: FormBuilder,
              private api: HomeService) { }

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
      console.log(res);
    })
  }



}
