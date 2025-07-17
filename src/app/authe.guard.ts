import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifiez si l'utilisateur est connecté en vérifiant la présence de données utilisateur dans le localStorage
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('user');

      if (user) {
        // L'utilisateur est connecté
        return true;
      } else {
        // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // Si localStorage n'est pas défini, redirigez l'utilisateur vers la page de connexion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
