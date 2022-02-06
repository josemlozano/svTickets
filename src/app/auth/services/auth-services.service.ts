import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RegisterResponse, TokenResponse } from 'src/app/interfaces/svauth';
import { User, UserLogin } from 'src/app/interfaces/svuser';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  loginChange$ = new ReplaySubject<boolean>(1);
  private authURL = 'auth';
  private logged: boolean;

  constructor(private readonly http: HttpClient) {}

  login(user: UserLogin): Observable<void> {
    // return ;
    return this.http.post<TokenResponse>(this.authURL + '/login', user).pipe(
      map((response) => {
        localStorage.setItem('token', response.accessToken);
        this.logged = true;
        this.loginChange$.next(true);
      }),
      catchError(async () => {
        this.logged = false;

        this.loginChange$.next(false);
      })
    );
  }

  logout(): void {
    console.log(localStorage.getItem('token'));
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    this.logged = false;
    return this.loginChange$.next(false);
  }

  isLogged(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (this.logged && token !== null && token !== '') {
      of(true);
    } else if (!this.logged && token !== null && token !== '') {
      this.getValidate().subscribe({
        next: (ok) => {
          this.logged = true;
          this.loginChange$.next(true);
        },
        error: () => localStorage.removeItem('token'),
      });
    }
    return of(false);
  }

  postRegister(user: User): Observable<User> {
    return this.http
      .post<RegisterResponse>(this.authURL + '/register', user)
      .pipe(map((response) => response.user));
  }

  getValidate(): Observable<void> {
    return this.http.get<void>(this.authURL + '/validate');
  }
}
