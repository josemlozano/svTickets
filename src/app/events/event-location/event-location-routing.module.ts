import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventLocationPage } from './event-location.page';

const routes: Routes = [
  {
    path: '',
    component: EventLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventLocationPageRoutingModule {}
