import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './models/utilisateur.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/api/utilisateurs'; // Base URL for API

  constructor(private http: HttpClient) {}

  // Get all users
  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  // Get a user by ID
  getUserById(userId: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${userId}`);
  }

  // Add a new user
  addUser(user: Utilisateur): Observable<Utilisateur> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Utilisateur>(this.apiUrl, user, { headers });
  }

  // Update an existing user
  updateUser(user: Utilisateur): Observable<Utilisateur> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Utilisateur>(`${this.apiUrl}/${user.userId}`, user, { headers });
  }

  // Delete a user by ID
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
