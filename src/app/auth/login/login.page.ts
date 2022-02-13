import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AlertController } from '@ionic/angular';
import { UserLogin, UserLoginGoogle } from 'src/app/interfaces/svuser';
import { MyGeolocation } from 'src/app/mygeolocation/my-geolocation.service';
import { AuthServicesService } from '../services/auth-services.service';
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@capacitor-community/facebook-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  lat = 0;
  lng = 0;
  user!: UserLogin;
  logged = false;
  userG = null;
  accessToken = '';

  constructor(
    private authService: AuthServicesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
    };
    this.locateUser();
  }

  loginUser() {
    this.user.lat = this.lat;
    this.user.lng = this.lng;

    this.authService.login(this.user).subscribe({
      next: (us) => {
        let isLoged = false;
        this.authService.loginChange$.forEach((e) => {
          isLoged = e;
        });

        if (isLoged) {
          this.router.navigate(['/events/list']);
        }
      },
      error: (error) => {
        const text = error.error.error;
        this.presentAlert(text);
      },
    });
  }

  validateClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  async locateUser() {
    const pos = await MyGeolocation.getLocation();
    this.lng = pos.longitude;
    this.lat = pos.latitude;
  }

  async presentAlert(text: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: text,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async login() {
    try {
      this.userG = await GoogleAuth.signIn();
      console.log(this.userG);
      console.log(this.userG.authentication);
      console.log(this.userG.authentication.idToken);

      const loginUser: UserLoginGoogle = {
        token: this.userG.authentication.idToken,
        lng: this.lng,
        lat: this.lat,
      };

      console.log(loginUser);

      this.authService.loginGoogle(loginUser).subscribe({
        next: (us) => {
          let isLoged = false;
          this.authService.loginChange$.forEach((e) => {
            isLoged = e;
          });

          if (isLoged) {
            this.router.navigate(['/events/list']);
          }
        },
        error: (error) => {
          const text = error.error.error;
          this.presentAlert(text);
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  async loginFB() {
    const resp = (await FacebookLogin.login({
      permissions: ['email'],
    })) as FacebookLoginResponse;
    if (resp.accessToken) {
      this.accessToken = resp.accessToken.token;
    }
  }
  async logoutFB() {
    await FacebookLogin.logout();
    this.accessToken = '';
  }

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    // Send this token to your server for register / login
    console.log(user.getAuthResponse().id_token);
    console.log(user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getEmail());
    console.log(user.getBasicProfile().getImageUrl());
  }
}
