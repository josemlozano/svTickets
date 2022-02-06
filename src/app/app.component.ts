import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Event list', url: '/events/list', icon: 'albums' },
    { title: 'New Event', url: '/events/add', icon: 'add-circle' },
    { title: 'Profile', url: '/profile/me', icon: 'person-circle' },
    // { title: 'Logout', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
