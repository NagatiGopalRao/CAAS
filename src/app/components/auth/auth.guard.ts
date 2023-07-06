import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { AuthServiceService } from './auth-service.service';

export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthServiceService);
    const router = inject(Router);
  
    return authService.isLoggedIn.pipe(
      map(() => true),
      catchError(() => {
        router.navigate(['route-to-fallback-page']);
        return of(false);
      })
    );
  };
  
  export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);