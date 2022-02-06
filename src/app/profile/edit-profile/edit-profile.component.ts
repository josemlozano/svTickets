import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() nameUser: string;
  @Input() emailUser: string;

  constructor(
    public modalCtrl: ModalController,
    public userServ: UsersService,
    public toast: ToastController
  ) {}

  ngOnInit(): void {}

  changeNameEmail() {
    if (this.nameUser === null && this.emailUser === null) {
      this.showToast(3000, 'The name and email are empty!');
      return;
    }

    this.userServ.putUserEmailName(this.emailUser, this.nameUser).subscribe(
      (ok) =>
        this.modalCtrl.dismiss({
          changed: true,
          name: this.nameUser,
          email: this.emailUser,
        }),
      (error) => this.showToast(3000, error)
    );
  }

  cancel() {
    this.modalCtrl.dismiss({
      changed: false,
      name: this.nameUser,
      email: this.emailUser,
    });
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
