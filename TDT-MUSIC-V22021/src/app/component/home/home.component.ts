import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  songData !: any;
  constructor(private formBuilder: FormBuilder,
              private homeService: HomeService,
              ) {
  }

  ngOnInit(): void {
    this.getSongData();
  }


  getSongData(): void {
    this.homeService.getAllSongs().subscribe(res => {
      this.songData = res;
    })
  }
}
