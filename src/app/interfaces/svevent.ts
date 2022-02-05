import { User } from './svuser';

export interface SVEvent {
  id?: number;
  title: string;
  description: string;
  price: number;
  lat: number;
  lng: number;
  address: string;
  image: string;
  date: string;
  creator?: User;
  distance?: number;
  numAttend?: number;
  attend?: boolean;
  mine?: boolean;
}

export interface EventsResponse {
  events: SVEvent[];
}

export interface EventResponse {
  event: SVEvent;
}

export interface Comment {
  id: number;
  comment: string;
  date: string;
  user: User;
}

export interface CommentsResponse {
  comments: Comment[];
}

export interface CommentResponse {
  comment: Comment;
}

export interface AttendeesResponse {
  users: User[];
}
