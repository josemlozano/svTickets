import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { SVEvent } from 'src/app/interfaces/svevent';
import { EventsServicesService } from '../services/events-services.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: SVEvent;
  event$: Observable<SVEvent>;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsServicesService
  ) {
    this.event$ = this.eventsService
      .getEvent(this.route.snapshot.params.id)
      .pipe(shareReplay(1));
  }

  ngOnInit() {
    this.event$.subscribe((event) => (this.event = event));
  }

  getEvent(): Observable<SVEvent> {
    return this.event ? of(this.event) : this.event$;
  }
}
