import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeUnitsRoutingModule } from './administrative-units-routing.module';
import { WardComponent } from './component/ward/ward.component';
import { DistrictComponent } from './component/district/district.component';
import { ProvinceComponent } from './component/province/province.component';
import { DistrictService } from './services/district.service';
import { WardService } from './services/ward.service';
import { ProvinceService } from './services/province.service';
import { AddProvinceComponent } from './component/add-province/add-province.component';
import { UpdateProvinceComponent } from './component/update-province/update-province.component';
import { UpdateDistrictComponent } from './component/update-district/update-district.component';
import { AddDistrictComponent } from './component/add-district/add-district.component';
import { AddWardComponent } from './component/add-ward/add-ward.component';
import { UpdateWardComponent } from './component/update-ward/update-ward.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareComponentModule } from '../../shared/components/share-component.module';


@NgModule({
  declarations: [
    WardComponent,
    DistrictComponent,
    ProvinceComponent,
    AddProvinceComponent,
    UpdateProvinceComponent,
    UpdateDistrictComponent,
    AddDistrictComponent,
    AddWardComponent,
    UpdateWardComponent,
  ],
  imports: [
    CommonModule,
    AdministrativeUnitsRoutingModule,
    ReactiveFormsModule  ,
    ShareComponentModule
  ],
  exports: [WardComponent, DistrictComponent, ProvinceComponent],
  providers: [DistrictService, WardService, ProvinceService],
})
export class AdministrativeUnitsModule {}
