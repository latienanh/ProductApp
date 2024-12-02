import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../../features/auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getAccessToken();
    let authReq = req;

    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
    }

    return next.handle(authReq).pipe(
      catchError(error => {
        // Kiểm tra nếu lỗi 401 và làm mới token
        if (error.status === 401) {
          return this.authService.refreshToken().pipe(
            switchMap((newToken: string) => {
              // Lưu token mới và lặp lại yêu cầu
              this.authService.setAccessToken(newToken);
              const newAuthReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${newToken}`)
              });
              return next.handle(newAuthReq);
            })
          );
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}
