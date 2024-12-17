import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareComponentModule } from '../../shared/components/share-component.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareComponentModule
    
  ],
})
export class AuthModule { }
