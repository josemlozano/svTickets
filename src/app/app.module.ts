import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BaseUrlInterceptorInterceptor } from './interceptors/base-url-interceptor.interceptor';
import { environment } from 'src/environments/environment';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { GoogleLoginModule } from './google-login/google-login.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapkey,
    }),
    GoogleLoginModule.forRoot(
      '224210719062-5ormf9hs04dql4g5er7gavoj3dusp25s.apps.googleusercontent.com'
    ),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
