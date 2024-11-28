import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryComponent,
    UpdateCategoryComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule, FormsModule],
  providers: [CategoryService],
  exports: [AddCategoryComponent, CategoryComponent, UpdateCategoryComponent],
})
export class CategoryModule {}
