import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    PaginationComponent,
    FormInputComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PaginationComponent,
    FormInputComponent
  ]
})
export class ShareComponentModule { }
