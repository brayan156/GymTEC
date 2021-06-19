import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/Clases/clase';
import { Empleado } from 'src/app/Clases/empleado';
import { Puesto } from 'src/app/Clases/puesto';
import { Servicio } from 'src/app/Clases/servicio';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  tiposClase: Servicio[];
  clase: Clase;
  instructores: Empleado[];

  constructor(private service:ServiciosService) { }

  ngOnInit(): void {
    this.service.obtenerListasServicio().subscribe(servicios => {
      this.tiposClase = servicios;
      this.service.obtenerListaEmpleados().subscribe(empleados => {
        this.instructores = empleados.filter(p => p.idPuesto == 1);
      })
    })
  }

  crearClase() {
    console.log(this.clase);
    this.service.agregarClase(this.clase);
  }
}
