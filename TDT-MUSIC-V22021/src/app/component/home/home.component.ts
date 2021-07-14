import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HomeService} from "../../service/home.service";
import {AuthService} from "../../service/auth.service";
import {LoginComponent} from "../../auth/login/login.component";

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
