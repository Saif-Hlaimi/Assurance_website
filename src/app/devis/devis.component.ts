import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContratService } from '../contrat.service';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Inclure HttpClientModule ici
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  private apiUrl = 'http://localhost:8081/api/devis';
  assurances: any[] = [];
  currentUser: any;

  constructor(private http: HttpClient, private contratService: ContratService) {}

  ngOnInit(): void {
    this.loadAssurances();
    this.loadCurrentUser();
  }

  loadAssurances(): void {
    this.http.get('http://localhost:8081/api/assurances').subscribe(
      (data: any) => {
        this.assurances = data;
      },
      error => {
        console.error('Erreur lors du chargement des assurances', error);
      }
    );
  }

  loadCurrentUser(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.userId) {
      this.currentUser = user;
      // Optionnel : vérifier si un token est stocké et le fournir dans les en-têtes si nécessaire
      const token = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.http.get('http://localhost:8081/api/auth/current-user', { headers }).subscribe(
          (user: any) => {
            this.currentUser = user;
          },
          error => {
            console.error('Erreur lors du chargement de l\'utilisateur connecté', error);
          }
        );
      }
    } else {
      console.error('Aucun utilisateur trouvé dans localStorage');
    }
  }

  onSubmit(form: any): void {
    if (form.valid && this.currentUser) {
      const selectedAssuranceId = Number(form.value.typeAssurance);
      const selectedAssurance = this.assurances.find(
        assurance => assurance.assuranceId === selectedAssuranceId
      );

      if (selectedAssurance) {
        const devis = {
          utilisateur: { userId: this.currentUser.userId },
          assurance: { assuranceId: selectedAssurance.assuranceId },
          dateDevis: new Date(),
          montant: selectedAssurance.tarifBase
        };

        this.http.post(this.apiUrl, devis).subscribe(
          (response: any) => {
            console.log('Devis envoyé avec succès', response);
            alert('Devis passé avec succès. Vous allez recevoir un mail.');
            this.createContrat(response.devisId); // Create contract after successful quote
          },
          error => {
            console.error('Erreur lors de l\'envoi du devis', error);
          }
        );
      } else {
        console.error('Assurance sélectionnée non trouvée');
      }
    }
  }

  createContrat(devisId: number): void {
    this.contratService.createContrat({devisId}).subscribe(
      response => {
        console.log('Contrat créé avec succès', response);
        alert('Contrat créé avec succès.');
      },
      error => {
        console.error('Erreur lors de la création du contrat', error);
      }
    );
  }

}
