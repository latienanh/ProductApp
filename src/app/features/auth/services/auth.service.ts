import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { LoginRequest } from '../models/auth-request.model.ts/login-request.model';
import { LoginResponse } from '../models/auth-response.model.ts/login-response.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://test.nghiencuukhoahoc.com.vn/api/app/account';
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new HttpParams()
      .set('userName', loginRequest.userName)
      .set('password', loginRequest.password);
    var result = this.http.post<LoginResponse>(
      `${this.apiURL}/login`,
      body.toString(),
      { headers }
    );
    return result;
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access-token');
  }
  setAccessToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('access-token', token);
    }
  }
  // refreshToken(): Observable<string> {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const refreshToken = localStorage.getItem('refresh-token');
  //     if (refreshToken) {
  //       const body = new HttpParams().set('refreshToken', refreshToken);
  //       return this.http
  //         .post<{ accessToken: string }>(`${this.apiURL}/refresh`, body)
  //         .pipe(map((response) => response.accessToken));
  //     } else {
  //       return throwError(() => new Error('No refresh token available'));
  //     }
  //   } else {
  //     return throwError(() => new Error('LocalStorage is not available'));
  //   }
  // }
  isLoggedIn(): boolean {
    return this.getAccessToken() != null;
  }
  logout(): Observable<LoginResponse> {
    const result = this.http.post<LoginResponse>(`${this.apiURL}/logout`, {});
    this.removeItemLocalStorage('access-token');
    this.removeItemLocalStorage('refresh-token');
    return result;
  }
  removeItemLocalStorage(key: string): void {
    localStorage.removeItem(key); // Remove item from localStorage
  }
  isLoading() {
    return !isPlatformBrowser(this.platformId);
  }
}
