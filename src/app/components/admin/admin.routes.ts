
import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
    {path: 'docs',  loadChildren: () => import('./docs/docs.routes').then(r => r.docsRoutes)},
];

export default adminRoutes;
