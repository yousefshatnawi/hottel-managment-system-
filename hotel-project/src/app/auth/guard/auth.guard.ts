import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user?.userType === route.data['role']) {
    return true;
  }

  this.router.navigate(['forbidden']);
  return false;
}
}

