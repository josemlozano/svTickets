import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/svuser';
import { EditPassComponent } from '../edit-pass/edit-pass.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  showImage = false;
  avatarName!: string;

  constructor(
    public modalCtrl: ModalController,
    public usersService: UsersService,
    public toast: ToastController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = {
      name: '',
      email: '',
      avatar: '',
      lat: 0,
      lng: 0,
      me: false,
    };
    this.getUser();
  }

  getUser() {
    if (
      this.route.snapshot.params.id !== null &&
      this.route.snapshot.params.id.length > 1
    ) {
      this.usersService.getUser(this.route.snapshot.params.id).subscribe({
        next: (us) => (this.user = us),
        error: (error) => console.error(error),
      });
    } else {
      this.usersService.getUserConnected().subscribe({
        next: (us) => (this.user = us),
        error: (error) => console.error(error),
      });
    }
  }

  changeImage() {
    this.usersService.putUserAvatar(this.avatarName).subscribe({
      next: (avatar) => {
        this.user.avatar = avatar.avatar;
        this.showImage = false;
        this.avatarName = null;
      },
      error: (er) => console.log(er),
    });
  }

  async openChangePass() {
    const modal = await this.modalCtrl.create({
      component: EditPassComponent,
      componentProps: { name: this.user.name },
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (result.data.changed) {
      this.showToast(3000, 'Password updated successfully!');
    }
  }

  async openCardModal() {
    const modal = await this.modalCtrl.create({
      component: EditProfileComponent,
      componentProps: { nameUser: this.user.name, emailUser: this.user.email },
      swipeToClose: true,
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (result.data.changed) {
      this.user.name = result.data.name;
      this.user.email = result.data.email;
      this.showToast(3000, 'Name/email updated successfully!');
    }
  }

  async showToast(durationToast: number, messageToast: string) {
    const toast = await this.toast.create({
      message: messageToast,
      duration: durationToast,
      position: 'middle',
      color: 'dark',
    });
    await toast.present();
  }

  async imagePicker() {
    const takePicture = await Camera.getPhoto({
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
}
