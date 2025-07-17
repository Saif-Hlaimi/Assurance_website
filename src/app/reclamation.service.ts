import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Reclamation {
  // ... other fields
  utilisateur: any;
  contrat: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8081/api/reclamations';

  constructor(private http: HttpClient) {}

  getUserContracts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/utilisateurs/${userId}/contrats`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createReclamation(reclamation: Reclamation): Observable<Reclamation> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Reclamation>(this.apiUrl, reclamation, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
