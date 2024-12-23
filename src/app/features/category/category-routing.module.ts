import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: 'update/:id', component: UpdateCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
