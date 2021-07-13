import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthModel} from "../../component/auth/auth.model";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  formRegister !: FormGroup;
  userModelObj: AuthModel = new AuthModel();
  userData !: any;

  error_messages = {
    'username': [
      {type: 'required', message: 'User Name is required.'},
      {type: 'minlength', message: 'User Name min length.'},
      {type: 'maxlength', message: 'User Name max length.'},
    ],
    'phone': [
      {type: 'required', message: 'Phone is required.'},
      {type: 'pattern', message: 'Telephone number wrong!'},
    ],
    'password': [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password min length.'},
      {type: 'maxlength', message: 'Password max length.'},
    ],
    'confirmPassword': [
      {type: 'required', message: 'Confirm Password is required.'},
      {type: 'minlength', message: 'Confirm Password min length.'},
      {type: 'maxlength', message: 'Confirm Password max length.'},
    ],
  }
  constructor(private fb: FormBuilder,
              private api: AuthService) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      username: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(30)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})'),
      ]),
      confirmPassword: new FormControl('',[
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
    this.userModelObj.password_confirmation = this.formRegister.value.confirmPassword;
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
    const {value: confirmPassword} = formGroup.get('confirmPassword');
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
  get confirmPassword(){
    return this.formRegister?.get('confirmPassword')
  }

}
