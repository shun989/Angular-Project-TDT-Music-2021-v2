import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post<any>(environment.url + 'auth/login', data);
  }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:8000/api/auth/register", data)
      .pipe(map((res: any)=>{
        console.log(res)
        return res;
      }))
  }
  //
  // updateUser(item:any, id: number): Observable<any> {
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http.put(url, item, this.httpOptions).pipe();
  // }
}
