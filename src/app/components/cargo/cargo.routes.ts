
import { Routes } from '@angular/router';
import { CargoComponent } from './cargo.component';
import { CargoViewComponent } from './cargo-view/cargo-view.component';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';

export const cargoRoutes: Routes = [
  { path: '', component: CargoComponent, title: 'Gerenciar' },
  { path: 'view/:id', component: CargoViewComponent, title: 'Visualizar' },
  { path: 'create', component: CargoEditComponent, title: 'Novo' },    
  { path: 'edit/:id', component: CargoEditComponent, title: 'Editar' },
  { path: 'delete/:id', component: CargoEditComponent, title: 'Remover' },  
];

export default cargoRoutes;
