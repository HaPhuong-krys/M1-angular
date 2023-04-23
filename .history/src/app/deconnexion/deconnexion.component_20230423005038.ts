import { Component } from '@angular/core';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent {
  import { Component } from '@angular/core';
  import { AuthService } from '../auth.service';
  
  @Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
  })
  export class LogoutComponent {
    constructor(private authService: AuthService) { }
  
    onClick() {
      // Appel de la méthode logout() du service AuthService
      this.authService.logout();
    }
  }
  
}
