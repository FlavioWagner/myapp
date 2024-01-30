import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { ErrorComponent } from './layouts/error/error.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page'},
    {path: 'cargos',  loadChildren: () => import('./components/cargo/cargo.routes').then(r => r.cargoRoutes)},
    {path: 'error', component: ErrorComponent, title: 'Error'},
];

export default routes;
