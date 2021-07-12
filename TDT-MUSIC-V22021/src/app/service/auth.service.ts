import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = "http://localhost:8000/api/users";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>("http://localhost:8000/api/users")
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(environment.url + 'auth/login', data);
  }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:8000/api/users", data)
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  updateUser(item:any, id: number): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.put(url, item, this.httpOptions).pipe();
  }
}
