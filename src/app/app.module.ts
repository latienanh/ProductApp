import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './features/category/category.module';
import { HomeComponent } from './features/cms/component/home/home.component';
import { PageNotFoundComponent } from './features/cms/component/page-not-found/page-not-found.component';
import { ProductModule } from './features/product/product.module';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './shared/layouts/backend-layout/backend-layout.component';
import { CommonLayoutsModule } from './shared/layouts/common-layouts/common-layouts.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    CommonLayoutsModule,
    ProductModule,
    CategoryModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports:[DefaultLayoutComponent,
    BackendLayoutComponent]
})
export class AppModule { }
