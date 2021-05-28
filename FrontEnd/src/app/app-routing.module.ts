import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Login/login/login.component';
import {NavbarComponent} from './Administrador/navbar/navbar.component';
import {GestionSucursalComponent} from './Administrador/gestion-sucursal/gestion-sucursal.component';

const routes: Routes = [{path: '', component: LoginComponent},
  { path: 'administrador', component: NavbarComponent,
    children: [{path: 'GestionSucursales', component: GestionSucursalComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
