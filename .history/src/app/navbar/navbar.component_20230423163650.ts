import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$ = this.loginService.isLoggedIn$;
  currentUser$: Observable<User> = this.loginService.currentUser$;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/Connexion']);
  }

}