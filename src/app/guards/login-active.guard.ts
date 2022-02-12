import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../auth/services/auth-services.service';

@Injectable({
  providedIn: 'root',
})
export class LoginActiveGuard implements CanActivate {
  constructor(public authServices: AuthServicesService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authServices.isLogged();
  }
}
