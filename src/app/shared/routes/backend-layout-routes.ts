
import { Routes } from '@angular/router';

export const BACKEND_LAYOUT: Routes = [
    {
        path: 'category',
        loadChildren: () => import('../../features/category/category.module').then(m => m.CategoryModule)
    },
    {
        path: 'product',
        loadChildren: () => import('../../features/product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'user',
        loadChildren: () => import('../../features/user/user.module').then(m => m.UserModule)
    },
    {
        path:'administrative-units',
        loadChildren:()=>import('../../features/administrative-units/administrative-units.module').then(m=>m.AdministrativeUnitsModule)
    }
]
