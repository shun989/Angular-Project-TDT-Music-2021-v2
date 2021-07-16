import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songsUrl = "http://localhost:8000/api/songs";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get<any>(this.songsUrl)
      .pipe(map((res: any)=>{
        return res;
      }))
  }

  postSong(data: any) {
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
<<<<<<< HEAD
    let httpOptions = {headers: headers_object};
    return this.http.post<any>(this.songsUrl, data, httpOptions)
=======
    let httpOptions = {
      headers: headers_object
    };
    return this.http.post<any>("http://localhost:8000/api/songs", data ,httpOptions)
>>>>>>> 4c551175dbef7207ae43443d6550bfd3fd15de4c
      .pipe(map((res: any)=>{
        console.log(res)
        return res
      }))
  }

  deleteSong(id: number): Observable<any> {
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    const url = `${this.songsUrl}/${id}`;
    // @ts-ignore
    return this.http.delete<any>(url, this.httpOptions, httpOptions).pipe();
  }

  updateSong(item:any, id: number): Observable<any> {
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    const url = `${this.songsUrl}/${id}`;
    // @ts-ignore
    return this.http.put(url, item, this.httpOptions,httpOptions).pipe();
  }
  createSong(song:object):void{
    let token = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };

    this.http.post<any>('http://127.0.0.1:8000/api/songs/upload-music', song, httpOptions).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
