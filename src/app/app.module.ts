import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Thêm ReactiveFormsModule
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n'; // Gộp chung import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import { AdministrativeUnitsModule } from './features/administrative-units/administrative-units.module';
import { CategoryModule } from './features/category/category.module';
import { ProductModule } from './features/product/product.module';
import { BackendLayoutComponent } from './shared/layouts/backend-layout/backend-layout.component';
import { CommonLayoutsModule } from './shared/layouts/common-layouts/common-layouts.module';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Thêm ReactiveFormsModule
    CommonLayoutsModule,
    ProductModule,
    CategoryModule,
    AdministrativeUnitsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
  exports: [DefaultLayoutComponent, BackendLayoutComponent],
})
export class AppModule { }
