import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductComponent } from './components/product/product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';
import { ShareComponentModule } from "../../shared/components/share-component.module";

@NgModule({
  declarations: [ProductComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [CommonModule, ProductRoutingModule,ReactiveFormsModule, ShareComponentModule],
  providers:[ProductService],
})
export class ProductModule {}
