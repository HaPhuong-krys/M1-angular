import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // abonnez-vous à la variable `isLoggedIn` pour la mettre à jour en fonction de l'état de connexion
    this.authService.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  onLogout(): void {
    // déconnectez-vous en appelant la méthode `logout` de votre service `auth`
    this.authService.logout();
  }
}

