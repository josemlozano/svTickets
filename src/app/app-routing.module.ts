import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginActiveGuard } from './guards/login-active.guard';
import { LogoutActiveGuard } from './guards/logout-active.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LogoutActiveGuard],
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    canActivate: [LogoutActiveGuard],
    loadChildren: () =>
      import('./auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'events',
    redirectTo: 'events/list',
    pathMatch: 'full',
    // loadChildren: () =>
    //   import('./events/event-list/event-list.module').then(
    //     (m) => m.EventListPageModule
    //   ),
  },
  {
    path: 'events/list',
    canActivate: [LoginActiveGuard],
    loadChildren: () =>
      import('./events/event-list/event-list.module').then(
        (m) => m.EventListPageModule
      ),
  },
  {
    path: 'events/add',
    canActivate: [LoginActiveGuard],
    loadChildren: () =>
      import('./events/event-form/event-form.module').then(
        (m) => m.EventFormPageModule
      ),
  },
  {
    path: 'events/:id',
    canActivate: [LoginActiveGuard],
    loadChildren: () =>
      import('./events/event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'profile',
    canActivate: [LoginActiveGuard],
    loadChildren: () =>
      import('./profile/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'profile/:id',
    canActivate: [LoginActiveGuard],
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
