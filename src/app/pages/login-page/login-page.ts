import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-login-page',
  styleUrl: './login-page.css',
  templateUrl: './login-page.html',
})
export class LoginPage {
  private http = inject(HttpClient);
  private router = inject(Router);

  email = '';
  password = '';
  errorMessage = '';

  login() {
    this.http.post<any>('http://localhost:8080/api/auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = "Invalid email or password";
      }
    })
  }
}
