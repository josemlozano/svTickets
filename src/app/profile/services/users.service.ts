import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Avatar,
  AvatarResponse,
  User,
  UserResponse,
} from 'src/app/interfaces/svuser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userURL = 'users';
  constructor(private readonly http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(this.userURL + '/' + id)
      .pipe(map((response) => response.user));
  }

  getUserConnected(): Observable<User> {
    return this.http
      .get<UserResponse>(this.userURL + '/me')
      .pipe(map((response) => response.user));
  }

  putUserEmailName(userEmail: string, userName: string): Observable<void> {
    const userInfo = {
      email: userEmail,
      name: userName,
    };
    return this.http.put<void>(this.userURL + '/me', userInfo);
  }

  changePassword(pass: string): Observable<void> {
    return this.http.put<void>(this.userURL + '/me/password', {
      password: pass,
    });
  }

  putUserAvatar(image: string): Observable<Avatar> {
    return this.http
      .put<AvatarResponse>(this.userURL + '/me/photo', {
        avatar: image,
      })
      .pipe(map((response) => response.avatar));
  }
}
