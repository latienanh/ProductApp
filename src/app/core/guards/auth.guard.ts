import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  const isLoading = authService.isLoading();
  if (isLoading) {
    router.navigate(['/loading']);
    return false;
  } else {
    const isLoggedIn = authService.isLoggedIn();
    if (isLoggedIn && (state.url === '/auth/login' || state.url === '/')) {
      router.navigate(['/backend/product']);
      return false;
    } else if (!isLoggedIn && state.url !== '/auth/login') {
      router.navigate(['/auth/login']);
      return false;
    }
  }
  return true;
};
