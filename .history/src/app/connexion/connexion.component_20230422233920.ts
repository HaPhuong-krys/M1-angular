// connexion.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AuthService } from '../auth.service';

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user.username, this.user.password).subscribe(response => {
        // Gérer la réponse et stocker les informations d'authentification
      });
    }
  }
}
