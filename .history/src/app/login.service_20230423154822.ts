import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface user {
  id_user: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users';
  
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  public currentUser = new BehaviorSubject<user>();

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
    this.router.navigate(['/Connexion']);
    this.currentUser.next('');
  }

  loginUser(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    this.currentUser.next(firstname);
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  constructor(private http: HttpClient, private router : Router) { }

}

