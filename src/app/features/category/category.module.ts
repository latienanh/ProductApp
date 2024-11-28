import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';


@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
