import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/component/login/login.component';
import { BackgroundLayoutComponent } from './shared/layouts/layout1/background-layout/background-layout.component';
import { CategoryComponent } from './features/category/components/category/category.component';
import { ProductComponent } from './features/product/components/product/product.component';

const routes: Routes = [
  // Route cho login
  { path: 'login', component: LoginComponent },

  // // Route cho layout với bảo vệ auth (chỉ cho phép truy cập khi đã đăng nhập)
  // {
  //   path: '',
  //   component: BackgroundLayoutComponent,
  //   // canActivate: [AuthGuard],  // Kiểm tra nếu người dùng đã đăng nhập hay chưa
  //   children: [
  //     { path: 'category', component: CategoryComponent },
  //     { path: 'product', component: ProductComponent },
  //     // Các route con khác trong layout
  //   ]
  // },

  // // Route mặc định (trường hợp không có trang nào được chỉ định)
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
