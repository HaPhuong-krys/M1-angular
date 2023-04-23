import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  public currentUser = new BehaviorSubject<user>({ id_user: 0, firstname: '', lastname: '', email: '', password: '', role: '' });
  currentUser$ = this.currentUser.asObservable();


  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap((user) => {
        this.isLoggedIn.next(true);
        this.currentUser.next(user.firstname);
      })
    );
  }
  
  

    logout() {
      this.isLoggedIn.next(false);
      this.router.navigate(['/Connexion']);
      this.currentUser.next(id_user: 0, firstname: '', lastname: '', email: '', password: '', role: '');
    }

  constructor(private http: HttpClient, private router : Router) { }

}
