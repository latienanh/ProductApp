import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth-request.model.ts/login-request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {ResponseWithDataModel} from "../../../../core/models/reponse-with-data.model";
import {LoginResponse} from "../../models/auth-response.model.ts/login-response.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginRequest: LoginRequest = { userName: '', password: '' };
  constructor(private authService: AuthService,private router: Router) {}

  submitLogin() {
    this.authService.login(this.loginRequest).subscribe({
      next: (response: ResponseWithDataModel<LoginResponse>) => {
        console.log('Login successful:', response.data);
        localStorage.setItem('access-token', response.data.accessToken);
        localStorage.setItem('refresh-token', response.data.refreshToken);
        this.router.navigate(["backend/product"])
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
