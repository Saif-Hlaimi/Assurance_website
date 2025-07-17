import {ApplicationConfig, Injectable} from '@angular/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current-user`);
  }
}
