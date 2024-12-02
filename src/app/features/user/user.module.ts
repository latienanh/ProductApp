import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[ProfileComponent],
  providers:[UserService]
})
export class UserModule { }
