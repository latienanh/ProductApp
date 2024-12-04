import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginationComponent,
    FormInputComponent
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
