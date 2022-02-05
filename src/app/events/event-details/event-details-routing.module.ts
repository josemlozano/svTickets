import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDetailsPage } from './event-details.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsPage,
    children: [
      {
        path: 'info',
        loadChildren: () =>
          import('../event-info/event-info.module').then(
            (m) => m.EventInfoPageModule
          ),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('../event-location/event-location.module').then(
            (m) => m.EventLocationPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDetailsPageRoutingModule {}
