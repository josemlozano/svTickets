import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.component.html',
  styleUrls: ['./edit-pass.component.scss'],
})
export class EditPassComponent {
  @Input() name: string;
  password: string;
  password2: string;

  constructor(
    public modalCtrl: ModalController,
    public userServ: UsersService,
    public toast: ToastController
  ) {}

  changePass() {
    if (this.password !== this.password2) {
      this.showToast(3000, 'Passwords do not match!');
      return;
    }

    this.userServ.changePassword(this.password).subscribe(
      (ok) => this.modalCtrl.dismiss({ changed: true }),
      (error) => this.showToast(3000, error)
    );
  }

  cancel() {
    this.modalCtrl.dismiss({ changed: false });
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
