import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundLayoutComponent } from './background-layout/background-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductModule } from '../../../features/product/product.module';
import { CategoryModule } from '../../../features/category/category.module';

@NgModule({
  declarations: [
    BackgroundLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [CommonModule,
    ProductModule,
    CategoryModule],
  exports:[BackgroundLayoutComponent,HeaderComponent,FooterComponent,SidebarComponent]
})
export class Layout1Module {}
