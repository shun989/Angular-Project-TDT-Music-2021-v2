import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup | undefined;
  errMessage = '';
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      phone: [''],
      password: ['']
    })
  }

  submit() {
    let data = this.formLogin?.value;
    this.authService.login(data).subscribe(res => {
      if (res.error) {
          this.errMessage = res.message
      } else{
        localStorage.setItem('token', res.access_token)
        localStorage.setItem('user', res.user.username)
        console.log(res.user.username)
        // console.log(res.user);
        // @ts-ignore
        $('#clear_modal').hide();
        // @ts-ignore
        $('.modal-backdrop').hide();
        // @ts-ignore
        $('body').removeClass("modal-open").css("padding-right", "0px");
        // @ts-ignore
        $('.modal-content').hide();
        // @ts-ignore
        $('.ms_top_btn').hide();
        // @ts-ignore
        $('.user').show()
        // @ts-ignore
        $('.user-name').text(res.user.username)
      }
    })
  }



}
