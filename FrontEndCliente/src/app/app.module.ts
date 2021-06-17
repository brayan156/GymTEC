import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './Componentes/login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Componentes/registro/registro.component';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioClienteComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FullCalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
