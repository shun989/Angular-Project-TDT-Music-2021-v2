import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private checkLogin = new BehaviorSubject(false);
  private getUserLogin = new BehaviorSubject(null);
  currentLogin = this.checkLogin.asObservable();
  currentUserLogin = this.getUserLogin.asObservable();

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(environment.url + 'auth/login', data);
  }

  changeIsLogin(isLogin:boolean){
    this.checkLogin.next(isLogin);
  }
  changeUserLogin(user:any){
    this.getUserLogin.next(user);
  }

  isLogin() {
    return !!localStorage.getItem('token');
  }

  createUser(data: any) {
    return this.http.post<any>(environment.url + 'auth/register', data)
      .pipe(map((res: any)=>{
        console.log(res)
        return res;
      }))
  }
  logout(){
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    return this.http.post<any>(environment.url + 'logout', null, httpOptions);
  }

}
