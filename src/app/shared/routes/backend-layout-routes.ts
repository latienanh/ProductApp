
import { Routes } from '@angular/router';

export const BACKEND_LAYOUT: Routes = [
    {
        path: 'category',
        loadChildren: () => import('../../features/category/category.module').then(m => m.CategoryModule)
    },
    {
        path: 'product',
        loadChildren: () => import('../../features/product/product.module').then(m => m.ProductModule)
    }
]
