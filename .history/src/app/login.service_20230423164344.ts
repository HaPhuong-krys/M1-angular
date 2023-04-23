import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
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

  public currentUser = new BehaviorSubject<User>({ id_user: 0, firstname: '', lastname: '', email: '', password: '', role: '' });
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient, private router : Router) { 
    this.checkLoginStatus().subscribe();
  }

  login(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post<User>(`${this.apiUrl}/login`, body).pipe(
      tap((user) => {
        this.isLoggedIn.next(true);
        this.currentUser.next(user);
      })
    );
  }
  
  logout() {
    this.isLoggedIn.next(false);
    this.currentUser.next({ id_user: 0, firstname: '', lastname: '', email: '', password: '', role: '' });
    this.router.navigate(['/Connexion']);
  }

  checkLoginStatus() {
    return this.http.get<User>(`${this.apiUrl}/login`).pipe(
      tap((user) => {
        if (user) {
          this.isLoggedIn.next(true);
          this.currentUser.next(user);
        } else {
          this.isLoggedIn.next(false);
          this.currentUser.next({ id_user: 0, firstname: '', lastname: '', email: '', password: '', role: '' });
        }
      })
    );
  }
}
