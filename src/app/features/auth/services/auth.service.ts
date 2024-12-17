import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { LoginRequest } from '../models/auth-request.model.ts/login-request.model';
import { LoginResponse } from '../models/auth-response.model.ts/login-response.model';
import { isPlatformBrowser } from '@angular/common';
import {environment} from "../../../../environments/environment";
import {ResponseWithDataModel} from "../../../core/models/reponse-with-data.model";
import { LocalStorageService } from '../../../core/services/local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private localStorageService : LocalStorageService
  ) {}

  login(loginRequest: LoginRequest): Observable<ResponseWithDataModel<LoginResponse>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
    });

    const body = JSON.stringify(loginRequest);

    return this.http.post<ResponseWithDataModel<LoginResponse>>(`${this.apiURL}/Auth/Login`, body, { headers });
  }
  getAccessToken(): string | null {
    return this.localStorageService.getItemLocalStorage('access-token')
  }
  setAccessToken(token: string): void {
    this.localStorageService.setItemLocalStorage('access-token',token)
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
  logout() {
    // const result = this.http.post<LoginResponse>(`${this.apiURL}/logout`, {});
    this.localStorageService.removeItemLocalStorage('access-token');
    this.localStorageService.removeItemLocalStorage('refresh-token');
  }
  
  isLoading() {
    return !this.localStorageService.isCheckPlatformBrowser();
  }
}
