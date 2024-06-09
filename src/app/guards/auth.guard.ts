import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.getIsAuthenticated();
  if (!isAuthenticated) {
    alert("Login Required")
    router.navigate(['/login']);
    return false;
  }
  return true;
};