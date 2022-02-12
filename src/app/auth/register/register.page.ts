import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/svuser';
import { MyGeolocation } from 'src/app/mygeolocation/my-geolocation.service';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  lat = 0;
  lng = 0;
  validEmail = true;
  showImage: boolean;
  user!: User;
  avatarName!: string;

  email1Form = '';
  email2Form = '';

  constructor(
    private authService: AuthServicesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.showImage = false;
    this.user = {
      name: '',
      email: '',
      password: '',
      avatar: '',
      lat: this.lat,
      lng: this.lng,
    };
    this.locateUser();
  }

  createUser() {
    if (this.validateEmail()) {
      this.user.avatar = this.avatarName;
      this.authService.postRegister(this.user).subscribe({
        next: (us) => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          const text = error.error.message;
          this.presentAlert(text);
          console.log(error);
        },
      });
    } else {
      this.presentAlert('The emails are not equal');
    }
  }

  validateClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  validateEmail(): boolean {
    this.user.email = '';
    if (this.email1Form === this.email2Form) {
      this.validEmail = true;
      this.user.email = this.email1Form;
      return true;
    }

    this.validEmail = false;
    return false;
  }

  async presentAlert(text: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: text,
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async imagePicker() {
    const takePicture = await Camera.getPhoto({
      source: CameraSource.Prompt,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      // resultType: CameraResultType.Base64,
    });
    console.log(takePicture);
    console.log(takePicture.webPath);
    console.log(takePicture.dataUrl);

    this.avatarName = takePicture.dataUrl;
    this.showImage = true;

    const imgRes = [];
  }

  async locateUser() {
    const pos = await MyGeolocation.getLocation();
    this.lng = pos.longitude;
    this.lat = pos.latitude;
    this.user.lat = this.lat;
    this.user.lng = this.lng;
  }
}
