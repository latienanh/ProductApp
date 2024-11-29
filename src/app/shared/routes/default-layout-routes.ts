
import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../../features/cms/cms.module').then(m => m.CmsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('../../features/auth/auth.module').then(m => m.AuthModule)
    }
]
