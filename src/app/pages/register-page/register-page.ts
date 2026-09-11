import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule, RouterLink],
  selector: 'app-register-page',
  styleUrl: './register-page.css',
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private http = inject(HttpClient);
  private router = inject(Router);

  name = '';
  email = '';
  password = '';
  errorMessage = '';

  register() {
    this.http.post<any>('http://localhost:8080/api/auth/register', {
      name: this.name,
      email: this.email,
      password: this.password,
      role: 'TENANT'
    }).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = "Registration failed. Email may already be taken."
      }
    });
  }
}
