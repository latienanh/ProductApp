import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupProductRoutingModule } from './group-product-routing.module';
import { GroupProductService } from './services/group-product.service';
import { AddGroupProductComponent } from './components/add-group-product/add-group-product.component';
import { UpdateGroupProductComponent } from './components/update-group-product/update-group-product.component';
import { GroupProductComponent } from './components/group-product/group-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareComponentModule } from "../../shared/components/share-component.module";


@NgModule({
  declarations: [AddGroupProductComponent,UpdateGroupProductComponent,GroupProductComponent],
  imports: [CommonModule, GroupProductRoutingModule, ReactiveFormsModule, ShareComponentModule],

  providers: [GroupProductService],
})
export class GroupProductModule {}
