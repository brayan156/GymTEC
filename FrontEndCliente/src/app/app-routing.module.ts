import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Componentes/login/login.component";
import { RegistroComponent } from './Componentes/registro/registro.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';

const routes: Routes = [{ path: '', component: LoginComponent },
  { path: 'inicio', component: InicioClienteComponent },
  {path: 'register', component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
