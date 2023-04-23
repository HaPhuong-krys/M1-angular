import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent {

    constructor(private authService: AuthService) { }
  
    onClick() {
      // Appel de la méthode logout() du service AuthService
      this.authService.logout();
    }
  
  
}
