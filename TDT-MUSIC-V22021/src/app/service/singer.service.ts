import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SingerService {
  private singerUrl = "http://localhost:8000/api/singers";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllSingers() {
    return this.http.get<any>(this.singerUrl)
      .pipe(map((res: any)=>{
        return res;
      }))
  }

}
