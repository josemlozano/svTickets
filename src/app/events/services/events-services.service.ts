import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttendeesResponse,
  Comment,
  CommentsResponse,
  EventResponse,
  EventsResponse,
  SVEvent,
} from 'src/app/interfaces/svevent';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/interfaces/svuser';

@Injectable({
  providedIn: 'root',
})
export class EventsServicesService {
  private eventURL = 'events';

  constructor(private readonly http: HttpClient) {}

  getEvents(): Observable<SVEvent[]> {
    return this.http
      .get<EventsResponse>(this.eventURL)
      .pipe(map((response) => response.events));
  }

  getEvent(id: number): Observable<SVEvent> {
    return this.http
      .get<EventResponse>(this.eventURL + '/' + id)
      .pipe(map((response) => response.event));
  }

  addEvent(event: SVEvent): Observable<SVEvent> {
    return this.http
      .post<EventResponse>(this.eventURL, event)
      .pipe(map((response) => response.event));
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(this.eventURL + '/' + id);
  }

  updateAttend(id: number): Observable<string> {
    return this.http
      .post<string>(this.eventURL + '/' + id + '/attend', '')
      .pipe(map((response) => response));
  }

  deleteAttend(id: number): Observable<void> {
    return this.http.delete<void>(this.eventURL + '/' + id + '/attend');
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http
      .get<CommentsResponse>(this.eventURL + '/' + id + '/comments')
      .pipe(map((response) => response.comments));
  }

  getUsersAttend(id: number): Observable<User[]> {
    return this.http
      .get<AttendeesResponse>(this.eventURL + '/' + id + '/attend')
      .pipe(map((response) => response.users));
  }

  addNewComment(id: number, text: string): Observable<Comment> {
    const commentPost = {
      comment: text,
    };
    return this.http
      .post<Comment>(this.eventURL + '/' + id + '/comments', commentPost)
      .pipe(map((response) => response));
  }
}
