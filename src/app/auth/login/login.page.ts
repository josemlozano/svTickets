import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
    };
    this.logoutUser();
    this.locateUser();
    // this.load();
  }

  // load() {
  //   this.mapComp.load.subscribe(() => {
  //     this.mapComp.mapInstance.resize(); // Necessary for full height
  //   });
  // }

  // isLogged() {
  //   this.authService.isLogged().subscribe({
  //     next: (log) => {
  //       console.log(log.valueOf());
  //       this.logged = !log.valueOf();
  //     },
  //   });
  // }

  async locateUser() {
    const pos = await MyGeolocation.getLocation();
    this.lng = pos.longitude;
    this.lat = pos.latitude;
  }

  logoutUser() {
    this.authService.logout();
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
      error: (error) => console.log('error: ' + error),
    });
  }

  validateClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }
}
