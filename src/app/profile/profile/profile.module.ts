import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { EditPassComponent } from '../edit-pass/edit-pass.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProfilePageRoutingModule],
  declarations: [ProfilePage, EditProfileComponent, EditPassComponent],
})
export class ProfilePageModule {}
