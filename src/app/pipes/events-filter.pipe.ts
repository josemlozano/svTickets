import { Pipe, PipeTransform } from '@angular/core';
import { SVEvent } from '../interfaces/svevent';

@Pipe({
  name: 'eventsFilter',
})
export class EventsFilterPipe implements PipeTransform {
  transform(events: SVEvent[], filterBy: string): SVEvent[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter
      ? events.filter(
          (ev) =>
            ev.title.toLocaleLowerCase().includes(filter) ||
            ev.description.toLocaleLowerCase().includes(filter)
        )
      : events;
  }
}
