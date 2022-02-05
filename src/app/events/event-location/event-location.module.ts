import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventLocationPageRoutingModule } from './event-location-routing.module';

import { EventLocationPage } from './event-location.page';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventLocationPageRoutingModule,
    NgxMapboxGLModule,
  ],
  declarations: [EventLocationPage],
})
export class EventLocationPageModule {}
