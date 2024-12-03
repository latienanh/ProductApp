import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../features/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Bỏ qua yêu cầu đến endpoint 'login'
    if (req.url.includes('/auth/login')) {
      return next.handle(req);
    }

    let headersConfig: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    if (isPlatformBrowser(this.platformId)) {
      const token = this.authService.getAccessToken();
      if (token) {
        headersConfig['Authorization'] = `Bearer ${token}`;
      }
    }

    const clonedReq = req.clone({ setHeaders: headersConfig });

    return next.handle(clonedReq).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(() => new Error(error.message));
      })
    );
  }
}
