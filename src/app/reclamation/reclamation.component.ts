import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ReclamationService } from '../reclamation.service';
import { NgForOf } from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reclamation',
  standalone: true,
  templateUrl: './reclamation.component.html',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  reclamationForm: FormGroup;
  currentUser: any;
  userContracts: any[] = [];

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    this.reclamationForm = this.fb.group({
      nomPrenom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      categorie: ['', Validators.required],
      sujet: ['', Validators.required],
      description: ['', Validators.required],
      contrat: ['']  // Contrat n'est plus obligatoire
    });
  }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.userId) {
      this.currentUser = user;
      this.loadUserContracts(user.userId);
    } else {
      console.error('Aucun utilisateur trouvé dans localStorage');
    }
  }

  loadUserContracts(userId: number): void {
    this.reclamationService.getUserContracts(userId).subscribe(
      (contracts: any[]) => {
        this.userContracts = contracts;
      },
      error => {
        console.error('Erreur lors du chargement des contrats de l\'utilisateur', error);
      }
    );
  }

  onSubmit(): void {
    if (this.reclamationForm.valid && this.currentUser) {
      const reclamation = {
        ...this.reclamationForm.value,
        utilisateur: { userId: this.currentUser.userId },
        contrat: this.reclamationForm.value.contrat ? { contratId: this.reclamationForm.value.contrat } : null // Vérifiez si contrat est fourni
      };
      console.log('Reclamation:', reclamation); // Ajoutez ce log pour déboguer
      this.reclamationService.createReclamation(reclamation).subscribe({
        next: (response) => {
          console.log('Réclamation envoyée avec succès', response);
          alert('Votre réclamation a été envoyée avec succès');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de la réclamation', error);
        }
      });
    }
  }
}
