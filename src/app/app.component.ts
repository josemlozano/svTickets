import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { AuthServicesService } from './auth/services/auth-services.service';
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
  constructor(
    private authService: AuthServicesService,
    private router: Router,
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log(this.platform);

    if (this.platform.is('capacitor')) {
      this.platform.ready().then(() => {
        GoogleAuth.init();
      });
    }
  }

  async logoutUser() {
    await this.authService.logout();
    this.router.navigate(['/']);
  }
}
