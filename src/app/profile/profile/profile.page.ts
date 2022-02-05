import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/svuser';
import { EditPassComponent } from '../edit-pass/edit-pass.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  constructor(
    public modalCtrl: ModalController,
    public usersService: UsersService,
    public toast: ToastController
  ) {}

  ngOnInit() {}

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

  async showToast(durationToast: number, messageToast: string) {
    const toast = await this.toast.create({
      message: messageToast,
      duration: durationToast,
      position: 'middle',
      color: 'dark',
    });
    await toast.present();
  }
}
