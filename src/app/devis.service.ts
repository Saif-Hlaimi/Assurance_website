// devis.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devis } from '../app/devis.model';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private apiUrl = 'http://localhost:8081/api/devis';

  constructor(private http: HttpClient) {}

  getDevisByUserId(userId: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/user/${userId}`);
  }
}
