import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { from, Observable, of, ReplaySubject } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { RegisterResponse, TokenResponse } from 'src/app/interfaces/svauth';
import { User, UserLogin, UserLoginGoogle } from 'src/app/interfaces/svuser';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  loginChange$ = new ReplaySubject<boolean>(1);
  private authURL = 'auth';
  private logged: boolean;

  constructor(private readonly http: HttpClient) {}

  login(user: UserLogin): Observable<void> {
    return this.http.post<TokenResponse>(this.authURL + '/login', user).pipe(
      switchMap(async (response) => {
        try {
          await Storage.set({ key: 'fs-token', value: response.accessToken });
          this.setLogged(true);
        } catch (e) {
          throw new Error('Can not save authentication token in storage!');
        }
      })
    );
  }

  loginGoogle(tokenGoogle: UserLoginGoogle): Observable<void> {
    return this.http
      .post<TokenResponse>(this.authURL + '/google', tokenGoogle)
      .pipe(
        switchMap(async (response) => {
          try {
            await Storage.set({ key: 'fs-token', value: response.accessToken });
            this.setLogged(true);
          } catch (e) {
            throw new Error('Can not save authentication token in storage!');
          }
        })
      );
  }

  async logout(): Promise<void> {
    await Storage.remove({ key: 'fs-token' });
    this.setLogged(false);
  }

  isLogged(): Observable<boolean> {
    return from(Storage.get({ key: 'fs-token' })).pipe(
      switchMap((token) => {
        if (this.logged && token !== null && token.value !== '') {
          return of(true);
        }
        if (!this.logged && !token.value) {
          throw new Error();
        }
        return this.http.get('auth/validate').pipe(
          map(() => {
            this.setLogged(true);
            return true;
          }),
          catchError((error) => of(false))
        );
      }),
      catchError((e) => of(false))
    );
  }

  postRegister(user: User): Observable<User> {
    return this.http
      .post<RegisterResponse>(this.authURL + '/register', user)
      .pipe(map((response) => response.user));
  }

  getValidate(): Observable<string> {
    return this.http
      .get<string>(this.authURL + '/validate')
      .pipe(map((res) => res));
  }

  private setLogged(logged: boolean) {
    this.logged = logged;
    this.loginChange$.next(logged);
  }
}
