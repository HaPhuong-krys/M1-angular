// connexion.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.loginUser(this.user.username, this.user.password).subscribe(
        (user) => {
          if (user) {
            console.log('Utilisateur connecté avec succès');
            this.router.navigate(['/']); // Naviguez vers la page d'accueil ou la page souhaitée après la connexion
          } else {
            console.log('Échec de la connexion');
            // Gérer l'échec de la connexion, par exemple en affichant un message d'erreur
          }
        },
        (error) => {
          console.log('Erreur lors de la connexion', error);
          // Gérer l'erreur de connexion
        }
      );
    }
  }
}
Assurez-vous d'importer Router, AuthService et NgForm et de les utiliser correctement.

Maintenant, lorsque l'utilisateur soumet le formulaire de connexion, la méthode loginUser de votre service d'authentification est appelée. Si les informations d'identification sont correctes, l'utilisateur est redirigé vers la page d'accueil ou la page souhaitée après la connexion. Vous pouvez également ajouter la gestion des erreurs pour informer l'utilisateur en cas d'échec de la connexion ou d'erreur lors de la connexion.





Elodie SA
Cannot find name 'User'.ts(2304)
Je m'excuse pour l'oubli. Vous devez définir une interface User pour représenter les objets utilisateur dans votre application Angular. Créez un nouveau fichier user.ts dans le dossier approprié de votre application (par exemple, dans un dossier models ou interfaces), et ajoutez le code suivant :

typescript
Copy code
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}
Ensuite, importez cette interface User dans les fichiers où vous en avez





Elodie SA
peut-on le faire sans interface
Oui, vous pouvez le faire sans interface, mais cela rendra votre code moins lisible et moins sûr sur le plan des types. Les interfaces sont un excellent moyen de décrire la structure des objets et de tirer parti de la vérification des types offerte par TypeScript.

Cependant, si vous préférez ne pas utiliser d'interface, vous pouvez simplement définir le type de retour de la fonction login comme Observable<any>. Voici comment cela se présenterait dans auth.service.ts :

typescript
Copy code
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/Projet-REST-V1/users';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/login`, {
      params: {
        username: username,
        password: password
      }
    });
  }
}
Gardez à l'esprit que l'utilisation de any réduit les avantages de TypeScript et peut entraîner des erreurs plus difficiles à détecter à l'exécution. Il est généralement préférable d'utiliser des interfaces pour décrire la structure des objets et tirer parti de la vérification des types offerte par TypeScript.






