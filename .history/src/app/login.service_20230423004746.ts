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
  
  constructor(private http: HttpClient) { }

}


  isLoggedIn = false;

  constructor() { }

  login() {
    // Logique de connexion de l'utilisateur
    this.isLoggedIn = true;
  }

  logout() {
    // Logique de déconnexion de l'utilisateur
    this.isLoggedIn = false;
  }
}
