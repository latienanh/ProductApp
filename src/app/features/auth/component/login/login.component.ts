import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BaseResponse } from '../../../../core/models/base-response.model';
import { ResponseWithDataModel } from '../../../../core/models/reponse-with-data.model';
import { LoginRequest } from '../../models/auth-request.model.ts/login-request.model';
import { LoginResponse } from '../../models/auth-response.model.ts/login-response.model';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) {
    this.loginForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
        ],
      ],
    });
  }
  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
  submitLogin() {
   
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: ResponseWithDataModel<LoginResponse>) => {
          localStorage.setItem('access-token', response.data.accessToken);
          localStorage.setItem('refresh-token', response.data.refreshToken);
          this.notification.create(
            'success',
            `${response.title}`,
            `${response.message}`,
            {
              nzDuration: 2000,
            }
          );

          this.router.navigate(['backend/product']);
        },
        error: (error: BaseResponse) => {
          const statusCode = error.status;
          if (statusCode > 400) {
            this.notification.create(
              'error',
              `${error.title}`,
              `${error.message}`
            );
          }
        },
      });
    }
    this.submitted = true;
  }
}
