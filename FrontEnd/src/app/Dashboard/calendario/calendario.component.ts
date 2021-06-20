import { Component, OnInit } from '@angular/core';
import { EventInput, CalendarOptions, EventApi, DateSelectArg, EventClickArg, EventSourceInput } from '@fullcalendar/angular';
import { FiltroClase } from 'src/app/Clases/filtro_clase';
import { FiltroClaseCliente } from 'src/app/Clases/filtro_clase_cliente';
import { Servicio } from 'src/app/Clases/servicio';
import { Sucursal } from 'src/app/Clases/sucursal';
import { ServiciosService } from 'src/app/servicios.service';
import { createEventId } from './event-utils';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  clasesActuales: FiltroClase[];
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

  constructor(private service: ServiciosService) {

  }
  ngOnInit() {
    this.service.obtenerListasSucursal().subscribe(sucursales => {
      this.SucursalesDisponibles = sucursales;
      this.service.obtenerListasServicio().subscribe(servicios => {
        this.ServiciosDisponibles = servicios;
        this.service.mostrarClases().subscribe(resp => {
          this.misClases = resp;
          console.log(resp);

          let tmp: { title: string, date: string }[] = [];
            resp.forEach(clase => {
              let date = new Date(clase.fecha);
              date.setHours(clase.horaInicio);
              let stringDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + 'T' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

              tmp.push({
                title: clase.nombreServicio + ": " + clase.horaInicio + '-' + clase.horaFin,
                date: clase.fecha
              })
            })
          this.calendarOptions.events = tmp;
        })
      });
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

  copiarCalendario() {
    this.service.copiar_calendario(this.clase.inicio, this.clase.final).subscribe(data => {
      this.ngOnInit();
    })
  }

  todasClases() {
    this.handleDateSelect.bind(this);

  }

  inscribirme(clase: FiltroClase) {

    let resp = confirm("Confirma para inscribirte :)");
    if (resp == true) {
      //doSomething
    } else {
      //doSomething
    }
  }

}
