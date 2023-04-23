import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: LoginService, private router: Router) { }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.loginUser(this.user.email, this.user.password).subscribe(
        (user) => {
          if (user) {
            console.log('Utilisateur connecté avec succès');
            this.authService.loginUser();
            this.router.navigate(['/home']); 
          } else {
            console.log('Échec de la connexion');
          }
        },
        (error) => {
          console.log('Erreur lors de la connexion', error);
        }
      );
    }
  }
}
