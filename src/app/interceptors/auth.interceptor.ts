import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(Storage.get({ key: 'fs-token' })).pipe(
      switchMap((token) => {
        if (!token.value) {
          throw new Error();
        }

        const authReq = req.clone({
          headers: req.headers.set('Authorization', `bearer ${token.value}`),
        });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
      }),
      catchError((e) => next.handle(req))
    );
  }
}
