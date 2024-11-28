import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundLayoutComponent } from './background-layout/background-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BackgroundLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [CommonModule],
})
export class Layout1Module {}
