import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WardComponent } from './component/ward/ward.component';
import { ProvinceComponent } from './component/province/province.component';
import { DistrictComponent } from './component/district/district.component';
import { AddWardComponent } from './component/add-ward/add-ward.component';
import { UpdateWardComponent } from './component/update-ward/update-ward.component';
import { AddProvinceComponent } from './component/add-province/add-province.component';
import { UpdateProductComponent } from '../product/components/update-product/update-product.component';
import { AddDistrictComponent } from './component/add-district/add-district.component';
import { UpdateDistrictComponent } from './component/update-district/update-district.component';
import { UpdateProvinceComponent } from './component/update-province/update-province.component';

const routes: Routes = [
  { path: 'ward', component: WardComponent },
  { path: 'ward/add', component: AddWardComponent },
  { path: 'ward/update/:id', component: UpdateWardComponent },
  { path: 'province', component: ProvinceComponent },
  { path: 'province/add', component: AddProvinceComponent },
  { path: 'province/update', component: UpdateProvinceComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'district/add', component: AddDistrictComponent },
  { path: 'district/update', component: UpdateDistrictComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeUnitsRoutingModule { }
