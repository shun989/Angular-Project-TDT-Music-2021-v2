import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private songsUrl = "http://localhost:8000/api/songs";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get<any>("http://localhost:8000/api/songs")
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  postSong(data: any) {
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    return this.http.post<any>("http://localhost:8000/api/songs", data ,httpOptions)
      .pipe(map((res: any)=>{
        console.log(res)
        return res
      }))
  }

  deleteSong(id: number): Observable<any> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions).pipe();
  }

  updateSong(item:any, id: number): Observable<any> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.put(url, item, this.httpOptions).pipe();
  }
}
