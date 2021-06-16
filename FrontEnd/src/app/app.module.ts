import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent/app.component';
import { LoginComponent } from './Login/login/login.component';
import { NavbarComponent } from './Administrador/navbar/navbar.component';
import { GestionSucursalComponent } from './Administrador/gestion-sucursal/gestion-sucursal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GestionSpaComponent } from './Administrador/gestion-spa/gestion-spa.component';
import { GestionDePuestosComponent } from './Administrador/gestion-de-puestos/gestion-de-puestos.component';
import { GestionTipoPlanillaComponent } from './Administrador/gestion-tipo-planilla/gestion-tipo-planilla.component';
import { GestionEmpleadoComponent } from './Administrador/gestion-empleado/gestion-empleado.component';
import { GeneracionPlanillaComponent } from './Administrador/generacion-planilla/generacion-planilla.component';
import { AsociacionTratamientosComponent } from './Dashboard/asociacion-tratamientos/asociacion-tratamientos.component';
import { AsociacionProductosComponent } from './Dashboard/asociacion-productos/asociacion-productos.component';
import { AsociacionInventarioComponent } from './Dashboard/asociacion-inventario/asociacion-inventario.component';
import { CrearClaseComponent } from './Dashboard/crear-clase/crear-clase.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    GestionSucursalComponent,
    GestionSpaComponent,
    GestionDePuestosComponent,
    GestionTipoPlanillaComponent,
    GestionEmpleadoComponent,
    GeneracionPlanillaComponent,
    AsociacionTratamientosComponent,
    AsociacionProductosComponent,
    AsociacionInventarioComponent,
    CrearClaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
