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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users';

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  // ...

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  loginUser(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  constructor(private http: HttpClient) { }

}

