import { Component, OnInit } from '@angular/core';
import {Planilla} from '../../Clases/planilla';
import {ServiciosService} from '../../servicios.service';
import {Empleado} from '../../Clases/empleado';

@Component({
  selector: 'app-gestion-empleado',
  templateUrl: './gestion-empleado.component.html',
  styleUrls: ['./gestion-empleado.component.css']
})
export class GestionEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  listaEmpleado: Empleado[] = [];
  EmpleadoActual: Empleado = new Empleado();

  constructor(private service: ServiciosService) { }


  ngOnInit(): void {
    this.service.obtenerListaEmpleados().subscribe(lista => {
      this.listaEmpleado = lista;
      console.log(this.listaEmpleado);
    });
  }
  public crearEmpleado(empleado: Empleado): void{
    this.service.agregarEmpleado(empleado).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }

  public editarEmpleado(empleado: Empleado): void{
    this.service.editarEmpleado(empleado.cedula , empleado).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public eliminarEmpleado(empleado: Empleado): void{
    this.service.eliminaEmpleado(empleado.cedula).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

}
