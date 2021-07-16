import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http: HttpClient) {}

  getAllSinger(){
    return this.http.get<any>("http://localhost:8000/api/singers")
      .pipe(map((res: any)=>{
        return res;
      }))
  }
}
