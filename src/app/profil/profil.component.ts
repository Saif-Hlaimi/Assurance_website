import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Utilisateur } from '../models/utilisateur.model';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  profileForm: FormGroup;
  user: Utilisateur | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.profileForm = new FormGroup({
      nom: new FormControl(""),
      prenom: new FormControl(""),
      numeroTelephone: new FormControl(""),
      email: new FormControl("")
    });
  }

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.profileForm.patchValue({
          nom: this.user?.nom || "",
          prenom: this.user?.prenom || "",
          numeroTelephone: this.user?.numeroTelephone || "",
          email: this.user?.email || ""
        });
      }
    }
  }

  onSubmit() {
    if (this.profileForm.valid && this.user) {
      const updatedUser = {
        ...this.user,
        ...this.profileForm.value
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.put<Utilisateur>('http://localhost:8081/api/utilisateurs/' + this.user.userId, updatedUser, { headers })
        .subscribe(response => {
          console.log("Profile updated successfully", response);

          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(response));
            this.user = response;
          }

          alert('Profil mis à jour avec succès.');
        }, error => {
          console.error("Profile update failed", error);
          alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        });
    }
  }
}
