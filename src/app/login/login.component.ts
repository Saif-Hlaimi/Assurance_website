import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Utilisateur } from '../models/utilisateur.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  user: Utilisateur | null = null; // Variable to store user information

  constructor(private http: HttpClient, private router: Router) {
    this.loginform = new FormGroup({
      code: new FormControl(""),
      password: new FormControl("")
    });
  }

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        console.log("Stored user:", this.user);
      }
    }
  }

  onSave() {
    console.log("onSave() called");
    const loginData = {
      code: {
        codeAdherent: this.loginform.value.code
      },
      motDePasse: this.loginform.value.password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<Utilisateur>('http://localhost:8081/api/login', loginData, { headers })
      .subscribe(response => {
        console.log("Login successful", response);

        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(response));
          this.user = response;
          console.log("User after login:", this.user);
        }

        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, error => {
        console.error("Login failed", error);
        if (error.status === 401) {
          alert('Échec de la connexion. Veuillez vérifier vos informations.');
        } else {
          alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
      });
  }
}
