import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../features/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    let headersConfig: { [key: string]: string } = {
      // 
    };

    if (isPlatformBrowser(this.platformId)) {
      const token = this.authService.getAccessToken();
      if (token) {
        headersConfig['Authorization'] = `Bearer ${token}`;
      }
    }

    const clonedReq = req.clone({ setHeaders: headersConfig });

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Lỗi:', error);
        return throwError(() => error.error);
      })
    );
  }
}
