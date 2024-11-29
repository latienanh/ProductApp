import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


@NgModule({
  declarations: [HomeComponent,PageNotFoundComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ],
  exports:[HomeComponent,PageNotFoundComponent]
})
export class CmsModule { }
