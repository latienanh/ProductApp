import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/auth-request.model.ts/login-request.model';
import { LoginResponse } from '../models/auth-response.model.ts/login-response.model';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://test.nghiencuukhoahoc.com.vn/api/app/account';
  constructor(private http: HttpClient) {}
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams()
      .set('userName', loginRequest.userName)
      .set('password', loginRequest.password);
    var result = this.http.post<LoginResponse>(
      `http://test.nghiencuukhoahoc.com.vn/api/app/account/login`,
      body.toString(),
      {headers}
    );
    return result;
  }
}
