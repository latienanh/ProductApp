import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../features/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private createHeaders() {
    const headersConfig: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };
    if (isPlatformBrowser(this.platformId)) {
      const token = this.authService.getAccessToken();
      if (token) {
        headersConfig['Authorization'] = `Bearer ${token}`;
      }
    }
    return new HttpHeaders(headersConfig);
  }

  private handleError(error: HttpErrorResponse) {
    // Xử lý lỗi tại đây
    console.error('Error:', error);
    return throwError(() => new Error(error.message));
  }

  get<T>(url: string): Observable<T> {
    const headers = this.createHeaders();
    return this.http
      .get<T>(url, { headers })
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any): Observable<T> {
    const headers = this.createHeaders();
    return this.http
      .post<T>(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  put<T>(url: string, body: any): Observable<T> {
    const headers = this.createHeaders();
    return this.http
      .put<T>(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  delete<T>(url: string): Observable<T> {
    const headers = this.createHeaders();
    return this.http
      .delete<T>(url, { headers })
      .pipe(catchError(this.handleError));
  }
}
