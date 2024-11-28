import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundLayoutComponent } from '../layout/background-layout/background-layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { LoginComponent } from './module/login/login.component';
import { ProductComponent } from './module/product/product.component';
import { AddProductComponent } from './module/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './module/add-category/add-category.component';
import { CategoryComponent } from './module/category/category.component';
import { UpdateProductComponent } from './module/update-product/update-product.component';
import { UpdateCategoryComponent } from './module/update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    SidebarComponent,
    LoginComponent,
    AddProductComponent,
    AddCategoryComponent,
    CategoryComponent,
    UpdateProductComponent,
    UpdateCategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
