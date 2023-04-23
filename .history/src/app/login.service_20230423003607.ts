private apiUrl = 'http://localhost:8080/Projet-REST-V1/users';

// ...

loginUser(email: string, password: string): Observable<any> {
  const body = { email: email, password: password };
  return this.http.post<any>(`${this.apiUrl}/login`, body);
}
