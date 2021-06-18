import { Component, OnInit } from '@angular/core';
import {Planilla} from '../../Clases/planilla';
import {ServiciosService} from '../../servicios.service';
import {Empleado} from '../../Clases/empleado';
import {MostrarEmpleado} from '../../Clases/mostrar-empleado';
import {Sucursal} from '../../Clases/sucursal';
import {Puesto} from '../../Clases/puesto';

@Component({
  selector: 'app-gestion-empleado',
  templateUrl: './gestion-empleado.component.html',
  styleUrls: ['./gestion-empleado.component.css']
})
export class GestionEmpleadoComponent implements OnInit {

  listaEmpleado: MostrarEmpleado[] = [];
  EmpleadoActual: Empleado = new Empleado();
  empleado: Empleado = new Empleado();

  listaSucursal: Sucursal[] = [];
  sucursalEmpleado: Sucursal = new Sucursal();

  ListaPuesto: Puesto[] = [];
  puestoEmpleado: Puesto = new Puesto();

  ListaPlanillas: Planilla[] = [];
  planillaEmpleado: Planilla = new Planilla();

  constructor(private service: ServiciosService) { }


  ngOnInit(): void {
    this.service.obtenerListasMostrarEmpleado().subscribe(lista => {
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
    this.service.editarEmpleado(empleado.cedula , empleado).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }

  public eliminarEmpleado(empleado: Empleado): void{
    this.service.eliminaEmpleado(empleado.cedula).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }


  public obtenerInformacionPlanilla(planilla: Planilla): void{
    this.service.obtenerPlanilla(planilla.id).subscribe(a => {
      this.planillaEmpleado = a;
      console.log(this.planillaEmpleado);
    });
  }

  public obtenerInformacionPuesto(puesto: Puesto): void{
    this.service.obtenerPuesto(puesto.id).subscribe(a => {
      this.puestoEmpleado = a;
      console.log(this.puestoEmpleado);
    });
  }

  public obtenerSucursal(sucursal: Sucursal): void{
    this.service.obtenerSucursal(sucursal.id).subscribe(a => {
      this.sucursalEmpleado = a;
      console.log(this.sucursalEmpleado);
    });
  }
}
