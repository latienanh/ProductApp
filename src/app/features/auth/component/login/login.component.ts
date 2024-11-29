import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth-request.model.ts/login-request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginRequest: LoginRequest = { userName: '', password: '' };
  constructor(private authService: AuthService,private router: Router) {}

  submitLogin() {
    console.log('vao day');
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('access-token', response.access_token); 
        localStorage.setItem('refresh-token', response.refresh_token);
        this.router.navigate(["backend/product"])
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
