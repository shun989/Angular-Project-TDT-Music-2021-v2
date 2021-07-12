import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }
}
