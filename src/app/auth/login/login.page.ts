import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserLogin } from 'src/app/interfaces/svuser';
import { MyGeolocation } from 'src/app/mygeolocation/my-geolocation.service';
import { AuthServicesService } from '../services/auth-services.service';

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
}
