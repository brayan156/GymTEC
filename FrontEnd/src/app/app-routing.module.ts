import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Login/login/login.component';
import {NavbarComponent} from './Administrador/navbar/navbar.component';
import {GestionSucursalComponent} from './Administrador/gestion-sucursal/gestion-sucursal.component';
import {GestionSpaComponent} from './Administrador/gestion-spa/gestion-spa.component';
import {GestionDePuestosComponent} from './Administrador/gestion-de-puestos/gestion-de-puestos.component';
import {GestionTipoPlanillaComponent} from './Administrador/gestion-tipo-planilla/gestion-tipo-planilla.component';
import {GestionEmpleadoComponent} from './Administrador/gestion-empleado/gestion-empleado.component';
import {GeneracionPlanillaComponent} from './Administrador/generacion-planilla/generacion-planilla.component';

const routes: Routes = [{path: '', component: LoginComponent},
  { path: 'administrador', component: NavbarComponent,
    children: [{path: 'GestionSucursales', component: GestionSucursalComponent},
      {path: 'GestionSpa' , component: GestionSpaComponent},
      {path: 'GestionPuestos' , component: GestionDePuestosComponent},
      {path: 'GestionPlanilla' , component: GestionTipoPlanillaComponent},
      {path: 'GestionEmpleados' , component: GestionEmpleadoComponent},
      {path: 'GeneracionPlanilla' , component: GeneracionPlanillaComponent},

    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
