import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent/app.component';
import { LoginComponent } from './Login/login/login.component';
import { NavbarComponent } from './Administrador/navbar/navbar.component';
import { GestionSucursalComponent } from './Administrador/gestion-sucursal/gestion-sucursal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GestionSpaComponent } from './Administrador/gestion-spa/gestion-spa.component';
import { GestionDePuestosComponent } from './Administrador/gestion-de-puestos/gestion-de-puestos.component';
import { GestionEmpleadoComponent } from './Administrador/gestion-empleado/gestion-empleado.component';
import { GeneracionPlanillaComponent } from './Administrador/generacion-planilla/generacion-planilla.component';
import { FormsModule } from '@angular/forms';
import { GestionTipoEquiposComponent } from './Administrador/gestion-tipo-equipos/gestion-tipo-equipos.component';
import { GestionServiciosComponent } from './Administrador/gestion-servicios/gestion-servicios.component';
import { GestionInventarioComponent } from './Administrador/gestion-inventario/gestion-inventario.component';
import {HttpClientModule} from '@angular/common/http';
import { GestionProductosComponent } from './Administrador/gestion-productos/gestion-productos.component';
import { GestionTipoPlanillaComponent } from './Administrador/gestion-tipo-planilla/gestion-tipo-planilla.component';
import { AsociacionInventarioComponent } from './Dashboard/asociacion-inventario/asociacion-inventario.component';
import { AsociacionProductosComponent } from './Dashboard/asociacion-productos/asociacion-productos.component';
import { AsociacionTratamientosComponent } from './Dashboard/asociacion-tratamientos/asociacion-tratamientos.component';
import { CrearClaseComponent } from './Dashboard/crear-clase/crear-clase.component';
import { CalendarioComponent } from './Dashboard/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([
  dayGridPlugin,

])

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

    GestionTipoEquiposComponent,
    GestionServiciosComponent,
    GestionInventarioComponent,
    GestionProductosComponent,

    AsociacionInventarioComponent,
    AsociacionProductosComponent,
    AsociacionTratamientosComponent,
    CrearClaseComponent,
    CalendarioComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatButtonModule,
      MatSlideToggleModule,
      HttpClientModule,
      FormsModule,
      FullCalendarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
