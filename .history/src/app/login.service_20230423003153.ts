import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users/list'; // Remplacez par l'URL de base de votre API

  constructor(private http: HttpClient) { }

  // Ajoutez cette méthode
  loginUser(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}