import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {AuthModel} from "./auth.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formRegister !: FormGroup;
  userModelObj: AuthModel = new AuthModel();
  userData !: any;

  error_messages = {
    'username': [
      {type: 'required', message: 'User Name is required.'},
    ],
    'fname': [
      {type: 'required', message: 'First Name is required.'},
    ],

    'lname': [
      {type: 'required', message: 'Last Name is required.'},
    ],

    'email': [
      {type: 'required', message: 'Email is required.'},
      {type: 'minlength', message: 'Email length.'},
      {type: 'maxlength', message: 'Email length.'},
      {type: 'required', message: 'please enter a valid email address.'},
    ],

    'password': [
      {type: 'required', message: 'password is required.'},
      {type: 'minlength', message: 'password length.'},
      {type: 'maxlength', message: 'password length.'},
    ],
    'confirmpassword': [
      {type: 'required', message: 'password is required.'},
      {type: 'minlength', message: 'password length.'},
      {type: 'maxlength', message: 'password length.'},
    ],
  }
  constructor(private fb: FormBuilder,
              private api: AuthService) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      username: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(30)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')]),
      confirmpassword: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
    },{
      validators: this.passwordMatch.bind(this)
    })
  }


  postUser():void {

    this.userModelObj.username = this.formRegister.value.username;
    this.userModelObj.password = this.formRegister.value.password;
    // @ts-ignore
    this.userModelObj.password_confirmation = this.formRegister.value.confirmpassword;
    this.userModelObj.phone = this.formRegister.value.phone;

    this.api.postUser(this.userModelObj).subscribe(res =>{
        alert("Register Success.");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formRegister.reset();
      },
      error => {
        alert("Something Went Wrong!");
      })
  }

  passwordMatch(formGroup: FormGroup) {
    // @ts-ignore
    const {value: password} = formGroup.get('password');
    // @ts-ignore
    const {value: confirmPassword} = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  get username(){
    return this.formRegister?.get('username')
  }

  get phone(){
    return this.formRegister?.get('phone')
  }

  get password(){
    return this.formRegister?.get('password')
  }
  get confirmpassword(){
    return this.formRegister?.get('confirmpassword')
  }
}

