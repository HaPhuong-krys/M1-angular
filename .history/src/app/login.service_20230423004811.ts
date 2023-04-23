import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface user {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users';
  
  loginUser(email: string, password: string): Observable<user> {
    const body = { email: email, password: password };
    return this.http.post<user>(`${this.apiUrl}/login`, body);
  }
  

  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
  
  constructor(private http: HttpClient) { }

}
