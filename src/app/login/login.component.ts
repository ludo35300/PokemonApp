import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  message!: string;
  name!: string;
  password!: string;
  auth!: AuthService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth = this.authService;
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connecté"
    } else {
      this.message = "Vous êtes déconnecté (ludo/ludo)"
    }
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  login() {
    this.message = ' Tentative de connexion en cours';
    this.auth.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if (isLoggedIn) {
        this.router.navigate(['/pokemons']);
      } else {
        this.password = '';
        this.router.navigate(['/login'])
      }

    })
  }

  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté'
  }

}
