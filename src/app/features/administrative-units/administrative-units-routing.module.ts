import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WardComponent } from './component/ward/ward.component';
import { ProvinceComponent } from './component/province/province.component';
import { DistrictComponent } from './component/district/district.component';

const routes: Routes = [
  { path: 'ward', component: WardComponent },
  { path: 'province', component: ProvinceComponent },
  { path: 'district', component: DistrictComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeUnitsRoutingModule { }
