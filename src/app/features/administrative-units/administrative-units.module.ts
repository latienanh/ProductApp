import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeUnitsRoutingModule } from './administrative-units-routing.module';
import { WardComponent } from './component/ward/ward.component';
import { DistrictComponent } from './component/district/district.component';
import { ProvinceComponent } from './component/province/province.component';


@NgModule({
  declarations: [
    WardComponent,
    DistrictComponent,
    ProvinceComponent
  ],
  imports: [
    CommonModule,
    AdministrativeUnitsRoutingModule
  ],
  exports:[
    WardComponent,
    DistrictComponent,
    ProvinceComponent
  ]
})
export class AdministrativeUnitsModule { }