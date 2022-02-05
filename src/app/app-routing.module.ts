import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/event-list/event-list.module').then(
        (m) => m.EventListPageModule
      ),
  },
  {
    path: 'events/add',
    loadChildren: () =>
      import('./events/event-form/event-form.module').then(
        (m) => m.EventFormPageModule
      ),
  },
  {
    path: 'events/:id',
    loadChildren: () =>
      import('./events/event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./profile/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
