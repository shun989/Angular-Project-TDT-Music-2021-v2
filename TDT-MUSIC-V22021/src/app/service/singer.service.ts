import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
=======
import {HttpClient, HttpHeaders} from "@angular/common/http";
>>>>>>> 4a9cb30f906da66d807bb13fc2025c9bc38fa891
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SingerService {
<<<<<<< HEAD

  constructor(private http: HttpClient) {}

  getAllSinger(){
    return this.http.get<any>("http://localhost:8000/api/singers")
=======
  private singerUrl = "http://localhost:8000/api/singers";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllSingers() {
    return this.http.get<any>(this.singerUrl)
>>>>>>> 4a9cb30f906da66d807bb13fc2025c9bc38fa891
      .pipe(map((res: any)=>{
        return res;
      }))
  }
<<<<<<< HEAD
=======

>>>>>>> 4a9cb30f906da66d807bb13fc2025c9bc38fa891
}
