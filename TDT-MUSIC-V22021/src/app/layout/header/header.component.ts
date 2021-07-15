import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  username= null;

  constructor() {
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    if (localStorage.hasOwnProperty('user')) {
      // @ts-ignore
      this.username = localStorage.getItem('user')
      // @ts-ignore
      this.isLogin = true;
    }
  }

}
