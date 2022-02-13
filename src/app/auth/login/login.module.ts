import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginModule } from 'src/app/google-login/google-login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    GoogleLoginModule.forRoot(
      '224210719062-5ormf9hs04dql4g5er7gavoj3dusp25s.apps.googleusercontent.com'
    ),
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
