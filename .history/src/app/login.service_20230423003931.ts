import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users';

  // ...
  
  loginUser(email: string, password: string): Observable<user> {
    const body = { email: email, password: password };
    return this.http.post<user>(`${this.apiUrl}/login`, body);
  }
  
  constructor(private http: HttpClient) { }

}
