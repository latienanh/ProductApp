import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './shared/layouts/backend-layout/backend-layout.component';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';
import { BACKEND_LAYOUT } from './shared/routes/backend-layout-routes';
import { DEFAULT_ROUTES } from './shared/routes/default-layout-routes';

const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: DEFAULT_ROUTES },
  { path: 'backend', component: BackendLayoutComponent, children: BACKEND_LAYOUT },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
