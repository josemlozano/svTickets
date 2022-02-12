import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServicesService } from '../auth/services/auth-services.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutActiveGuard implements CanActivate {
  constructor(
    public authServices: AuthServicesService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authServices.isLogged().pipe(
      map((ok) => {
        if (ok) {
          return this.router.createUrlTree(['/events/list']);
        }
        return !ok;
      })
    );
  }
}
