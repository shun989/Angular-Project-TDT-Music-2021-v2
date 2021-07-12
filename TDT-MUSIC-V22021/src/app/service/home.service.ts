import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
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
}
