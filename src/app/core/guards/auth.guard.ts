import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';
  // Giả định bạn đã có AuthService để quản lý xác thực

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/auth/login']);  // Điều hướng đến trang đăng nhập nếu không đăng nhập
    return false;
  }
};
