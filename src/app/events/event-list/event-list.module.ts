import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventListPageRoutingModule } from './event-list-routing.module';

import { EventListPage } from './event-list.page';
import { EventsFilterPipe } from 'src/app/pipes/events-filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EventListPageRoutingModule],
  declarations: [EventListPage, EventsFilterPipe],
})
export class EventListPageModule {}
