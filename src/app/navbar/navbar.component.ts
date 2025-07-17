import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [NgIf],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus();
  }

  // Check login status based on localStorage
  checkLoginStatus() {
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('user');
      this.isLoggedIn = !!user; // Convert the value to boolean
    } else {
      this.isLoggedIn = false;
    }
  }

  // Logout and update the login status
  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Refresh the page to update the navbar
    });
  }
}
