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

  tiposClase: Servicio[] = [];
  clase: Clase = new Clase();
  instructores: Empleado[] = [];

  constructor(private service:ServiciosService) { }

  /**
   * Inicializa las variables para la vista de crear clase
   */
  ngOnInit(): void {
    this.service.obtenerListasServicio().subscribe(servicios => {
      this.tiposClase = servicios;
      this.service.obtenerListaEmpleados().subscribe(empleados => {
        this.instructores = empleados.filter(p => p.idPuesto == 2);
      })
    })
  }

  /**
   * Crea una nueva clase en la sucursal
   */
  crearClase() {
    console.log(this.clase);
    let tmpService = this.tiposClase.find(c => c.id == this.clase.idServicio);
    let tmpInstruct = this.instructores.find(c => c.cedula == this.clase.idEmpleado);
    if (tmpService?.idSucursal == tmpInstruct?.idSucursal) {
      this.service.agregarClase(this.clase).subscribe(resp => {
      });
    } else {
      alert("Las sucursales no corresponden.");
    }

  }
}
