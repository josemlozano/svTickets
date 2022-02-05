import { TestBed } from '@angular/core/testing';

import { EventsServicesService } from './events-services.service';

describe('EventsServicesService', () => {
  let service: EventsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
