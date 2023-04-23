import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, ser } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn$;
  currentUser$: Observable<user> = this.authService.currentUser$;

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/Connexion']);
  }

}
