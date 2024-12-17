import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupProductRoutingModule } from './group-product-routing.module';
import { GroupProductService } from './services/group-product.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, GroupProductRoutingModule],

  providers: [GroupProductService],
})
export class GroupProductModule {}
