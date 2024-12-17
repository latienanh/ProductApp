import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupProductComponent } from './components/group-product/group-product.component';
import { AddGroupProductComponent } from './components/add-group-product/add-group-product.component';
import { UpdateGroupProductComponent } from './components/update-group-product/update-group-product.component';

const routes: Routes = [
  { path: '', component: GroupProductComponent },
  { path: 'add', component: AddGroupProductComponent },
  { path: 'update/:id', component: UpdateGroupProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupProductRoutingModule { }
