import { Component, ElementRef, ViewChild, } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { FullCalendarComponent } from "@fullcalendar/angular";
import { FullCalendarModule } from "@fullcalendar/angular";
import { INITIAL_EVENTS, createEventId } from './event-utils';


@Component({
  selector: 'InicioClienteComponent',
  styleUrls: ['inicio-cliente.component.css'],
  templateUrl: 'inicio-cliente.component.html',
})
export class InicioClienteComponent {

  SucursalesDisponibles = [
    {
      nombre: "Tibas"
    },
    {
      nombre: "Su mama"
    },
    {
      nombre: "Critobal Colon"
    }
  ]

  tiposClase = [
    {
      tipo: "Indoor Cycling"
    },
    {
      tipo: "Pilates"
    },
    {
      tipo: "Yoga"
    },
    {
      tipo: "Zumba"
    },
    {
      tipo: "Natación"
    }
  ];

  clases = [
    {
      imagen: "https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-HNVD/yoga_body_images-slide-HNVD-superJumbo.jpg",
      horaFin: "19:30",
      horaInicio: "17:30",
      fecha: "2021-06-24",
      capacidad: 8,
      id: 1,
      idServicio: 2,
      idEmpleado: 2,
      tipo: "Yoga",
      sucursal: 'San Marcos'
    },
    {
      imagen: "https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-HNVD/yoga_body_images-slide-HNVD-superJumbo.jpg",
      horaFin: "19:30",
      horaInicio: "17:30",
      fecha: "2021-06-24",
      capacidad: 8,
      id: 1,
      idServicio: 2,
      idEmpleado: 2,
      tipo: "Yoga",
      sucursal: 'San Marcos'
    }
  ]

  clase = {
    tipo: "",
    instructor: "",
    grupal: false,
    capacidad: 0,
    fecha: "",
    inicio: "",
    final: "",
    sucursal: ""
  };

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
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

  }

  inscribirme(clase:any) {

    let resp = confirm("Press a button!");
    if (resp == true) {
      this.calendarOptions.events = [{
        title: clase.tipo,
        date: clase.fecha
      }] 
    } else {
      //doSomething
    }
  }
}
