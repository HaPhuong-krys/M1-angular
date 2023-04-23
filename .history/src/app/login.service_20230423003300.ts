import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users/list'; 

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    const body = { email: username, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}
