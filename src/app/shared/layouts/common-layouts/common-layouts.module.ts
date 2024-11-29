import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonLayoutsRoutingModule } from './common-layouts-routing.module';

import { CustomizeComponent } from './customize/customize.component';
import { DefaultWrapComponent } from './default-wrap/default-wrap.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [

    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CustomizeComponent,
    DefaultWrapComponent,
  ],
  imports: [
    CommonModule,
    CommonLayoutsRoutingModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CustomizeComponent,
    DefaultWrapComponent
  ]
})
export class CommonLayoutsModule { }
