export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  lat: number;
  lng: number;
  me?: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
  lat?: number;
  lng?: number;
}

export interface UserResponse {
  user: User;
}

export interface Avatar {
  avatar: string;
}

export interface AvatarResponse {
  avatar: Avatar;
}
