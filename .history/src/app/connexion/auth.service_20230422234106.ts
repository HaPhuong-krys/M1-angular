// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Remplacez cette URL par celle de votre propre API d'authentification

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = {
      username,
      password
    };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  // Ajoutez d'autres méthodes d'authentification si nécessaire, comme register(), logout(), etc.
}