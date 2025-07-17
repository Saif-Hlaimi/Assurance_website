import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [
    HttpClientModule,
    FormsModule,
  ],
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  utilisateur = {
    email: '',
    numeroTelephone: '',
    nom: '',
    prenom: '',
    adresse: '',
    dateNaissance: '',
    etatCivil: '',
    sexe: '',
    motDePasse: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSignup(form: NgForm) {
    if (form.valid) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post('http://localhost:8081/api/utilisateurs', this.utilisateur, { headers }).subscribe(response => {
        console.log(response);
        this.router.navigate(['/login']);
      }, error => {
        console.error("Signup failed", error);
        if (error.status === 409) {
          alert('L\'adresse e-mail existe déjà. Veuillez utiliser une autre adresse e-mail.');
        } else {
          alert('Échec de l\'inscription. Veuillez vérifier vos informations.');
        }
      });
    }
  }
}
