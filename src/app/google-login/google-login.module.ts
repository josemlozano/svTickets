import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginDirective } from './directives/google-login.directive';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@NgModule({
  declarations: [GoogleLoginDirective],
  imports: [CommonModule],
})
export class GoogleLoginModule {
  user = null;
  async login() {
    try {
      this.user = await GoogleAuth.signIn();
    } catch (err) {
      console.error(err);
    }
  }
}
