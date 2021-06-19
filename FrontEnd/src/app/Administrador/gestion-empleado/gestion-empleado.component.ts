import { Component, OnInit } from '@angular/core';
import {Planilla} from '../../Clases/planilla';
import {ServiciosService} from '../../servicios.service';
import {Empleado} from '../../Clases/empleado';
import {MostrarEmpleado} from '../../Clases/mostrar-empleado';
import {Sucursal} from '../../Clases/sucursal';
import {Puesto} from '../../Clases/puesto';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-gestion-empleado',
  templateUrl: './gestion-empleado.component.html',
  styleUrls: ['./gestion-empleado.component.css']
})
export class GestionEmpleadoComponent implements OnInit {

  constructor(private service: ServiciosService) { }



  listaEmpleado: MostrarEmpleado[] = [];
  EmpleadoActual: Empleado = new Empleado();

  empleado: Empleado = new Empleado();
  empleadoActual: Empleado = new Empleado();

  listaSucursal: Sucursal[] = [];
  sucursalEmpleado: Sucursal = new Sucursal();

  listaPuesto: Puesto[] = [];
  puestoEmpleado: Puesto = new Puesto();

  listaPlanillas: Planilla[] = [];
  planillaEmpleado: Planilla = new Planilla();
  aux: number;

  ngOnInit(): void {
    this.service.obtenerListasMostrarEmpleado().subscribe(lista => {
      this.listaEmpleado = lista;
      console.log(this.listaEmpleado);
      this.service.obtenerListasSucursal().subscribe(lista2 =>{
        this.listaSucursal = lista2;
        console.log(lista2);
      });
      this.service.obtenerListasPlanillas().subscribe(lista3 => {
        this.listaPlanillas = lista3;
        console.log(lista3);
      });
      this.service.obtenerListasPuesto().subscribe(lista4 => {
        this.listaPuesto = lista4;
        console.log(this.listaPuesto);
      });
    });
  }
  // tslint:disable-next-line:ban-types
  public obtenerId(): void{
    console.log(this.empleado);
  }

  public obtenerEmpleado(id: number): void{
    this.service.obtenerEmpleado(id).subscribe(emple => {
      this.empleadoActual = emple;
    });
  }
  public crearEmpleado(empleado: Empleado): void{
    this.obtenerId();
    this.service.agregarEmpleado(empleado).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public editarEmpleado(empleado: Empleado): void{
    this.service.editarEmpleado(empleado.cedula , empleado).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });

  }

  public eliminarEmpleado(empleado: Empleado): void{
    this.service.eliminaEmpleado(empleado.cedula).subscribe(respuesta =>{
      console.log(respuesta);
      this.ngOnInit();
    });
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
