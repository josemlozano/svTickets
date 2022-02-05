import { User } from './svuser';

export interface LoginResponse {
  accessToken: TokenResponse;
}

export interface RegisterResponse {
  user: User;
}

export interface TokenResponse {
  accessToken: string;
}
