import { Component, } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/angular';
import { FiltroClase } from '../Clases/filtro_clase';
import { FiltroClaseCliente } from '../Clases/filtro_clase_cliente';
import { Servicio } from '../Clases/servicio';
import { Sucursal } from '../Clases/sucursal';
import { ClienteService } from '../services/cliente.service';
import { createEventId } from './event-utils';


@Component({
  selector: 'InicioClienteComponent',
  styleUrls: ['inicio-cliente.component.css'],
  templateUrl: 'inicio-cliente.component.html',
})
export class InicioClienteComponent {

  SucursalesDisponibles: Sucursal[];
  ServiciosDisponibles: Servicio[];
  clasesBusqueda: FiltroClase[];
  misClases: FiltroClaseCliente[];
  clase = {
    servicio: "",
    inicio: "",
    final: "",
    idSucursal: 0
  };
  myEvents: EventInput[] = [];

  constructor(private service: ClienteService) {

  }
  ngOnInit() {
    this.service.obtenerListasSucursal().subscribe(sucursales => {
      this.SucursalesDisponibles = sucursales;
      this.service.obtenerListasServicio().subscribe(servicios => {
        this.ServiciosDisponibles = servicios;
        
        this.service.filtro_clases_cliente(this.service.user.cedula).subscribe(clases => {
          console.log(clases);

          clases.forEach(clase => {
            let date = new Date(clase.fecha);
            date.setHours(clase.horaInicio);
            let stringDate = date.getFullYear() + '-' + (date.getMonth() +1) + '-' + date.getDate() + 'T' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

            this.calendarOptions.events = [{
              title: clase.nombreServicio,
              date: clase.fecha,
              
            }]

          })

          
        })
      })
    });
  }




  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.myEvents, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    events: [],
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Ingresa un título para tu evento');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`¿Seguro que deseas eliminar '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  buscarClase() {
    this.handleDateSelect.bind(this);
    console.log(this.clase);
    this.service.filtro_clases(this.clase.idSucursal, this.clase.servicio, this.clase.inicio, this.clase.final).subscribe(resp => {
      this.clasesBusqueda = resp;
      console.log(resp);
    })
  }

  todasClases() {
    this.handleDateSelect.bind(this);
    this.service.filtro_clases(0, "",null , null).subscribe(resp => {
      this.clasesBusqueda = resp;
      console.log(resp);

    })
  }

  inscribirme(clase: FiltroClase) {

    let resp = confirm("Confirma para inscribirte :)");
    if (resp == true) {
      this.calendarOptions.events = [{
        title: clase.nombreServicio,
        date: clase.fecha
      }]

      this.service.inscribirCliente(clase.id).subscribe(respo => {
        console.log(respo);
      });
    } else {
      //doSomething
    }
  }
}
