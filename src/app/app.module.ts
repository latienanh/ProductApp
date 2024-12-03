import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './features/category/category.module';
import { ProductModule } from './features/product/product.module';
import { BackendLayoutComponent } from './shared/layouts/backend-layout/backend-layout.component';
import { CommonLayoutsModule } from './shared/layouts/common-layouts/common-layouts.module';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';
import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import { AdministrativeUnitsModule } from './features/administrative-units/administrative-units.module';

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, BackendLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
  ],
  bootstrap: [AppComponent],
  exports: [DefaultLayoutComponent, BackendLayoutComponent],
})
export class AppModule {}
