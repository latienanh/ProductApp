import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductComponent } from './components/product/product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductComponent, 
    AddProductComponent, 
    UpdateProductComponent,
  ],
  imports: [CommonModule, ProductRoutingModule,FormsModule],
  providers:[ProductService],
  exports:[ProductComponent, AddProductComponent, UpdateProductComponent]
})
export class ProductModule {}
