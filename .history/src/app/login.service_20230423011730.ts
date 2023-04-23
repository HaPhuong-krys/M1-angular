import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { router } from '@angular/router';

export interface user {
  id: number;
  name: string;
}

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

  logout(): void {
    // envoi d'une requête de déconnexion à votre backend
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe();
  
    // réinitialisation des informations de connexion stockées
    this.isLoggedIn.next(false);
    localStorage.removeItem('currentUser');
  
    // redirection vers la page de connexion
    this.router.navigate(['/connexion']);
  }
  
  loginUser(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  constructor(private http: HttpClient) { }

}

