import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Clase} from './Clases/clase';
import {Cliente} from './Clases/cliente';
import {Empleado} from './Clases/empleado';
import {Equipo} from './Clases/equipo';
import {Planilla} from './Clases/planilla';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  Url = 'https://localhost:44341/api/';
  private valores = new BehaviorSubject('');
  public valoresActuales = this.valores.asObservable();

  constructor(private htpp: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public obtenerListaClases(){
    return this.htpp.get<Clase[]>(this.Url + 'Clase/');
  }

  // tslint:disable-next-line:typedef
  public obtenerClase(id: number){
    return this.htpp.get<Clase>(this.Url + 'Clase/' + id);
  }

  // tslint:disable-next-line:typedef
  public eliminarClase(id: number){
    return this.htpp.delete(this.Url + 'Clase/' + id);
  }

  // tslint:disable-next-line:typedef
  public editarLaClase(id: number , clase: Clase){
    return this.htpp.put(this.Url + 'Clase/' + id , clase);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerCliente(id: number){
    return this.htpp.get<Cliente>(this.Url + 'Cliente/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListaClientes(){
    return this.htpp.get<Cliente[]>(this.Url + 'Cliente');
  }

  // tslint:disable-next-line:typedef
  public nuevoCliente(cliente: Cliente){
    return this.htpp.post(this.Url + 'Cliente', cliente);
  }

  // tslint:disable-next-line:typedef
  public editarCliente(id: number, cliente: Cliente){
    return this.htpp.put(this.Url + 'Cliente/' + id, cliente);
  }

  // tslint:disable-next-line:typedef
  public eliminarCliente(id: number){
    return this.htpp.delete(this.Url + 'Cliente/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerEmpleado(id: number){
    return this.htpp.get<Empleado>(this.Url + 'Empleado/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListaEmpleados(){
    return this.htpp.get<Empleado[]>(this.Url + 'Empleado');
  }

  // tslint:disable-next-line:typedef
  public agregarEmpleado(empleado: Empleado){
    return this.htpp.post(this.Url + 'Empleado', empleado);
  }

  // tslint:disable-next-line:typedef
  public editarEmpleado(id: number, empleado: Empleado){
    return this.htpp.put(this.Url + 'Empleado/' + id, empleado);
  }

  // tslint:disable-next-line:typedef
  public eliminaEmpleado(id: number){
    return this.htpp.delete(this.Url + 'Empleado/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerEquipo(id: number){
    return this.htpp.get<Equipo>(this.Url + 'Equipo/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListaEquipo(){
    return this.htpp.get<Equipo[]>(this.Url + 'Equipo');
  }

  // tslint:disable-next-line:typedef
  public agregarEquipo(equipo: Equipo){
    return this.htpp.post(this.Url + 'Equipo', equipo);
  }

  // tslint:disable-next-line:typedef
  public editarEquipo(id: number, equipo: Equipo){
    return this.htpp.put(this.Url + 'Equipo/' + id, equipo);
  }

  // tslint:disable-next-line:typedef
  public eliminaEquipo(id: number){
    return this.htpp.delete(this.Url + 'Equipo/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerPlanilla(id: number){
    return this.htpp.get<Planilla>(this.Url + 'Planilla/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasPlanillas(){
    return this.htpp.get<Planilla[]>(this.Url + 'Planilla');
  }

  // tslint:disable-next-line:typedef
  public agregarPlanilla(planilla: Planilla){
    return this.htpp.post(this.Url + 'Planilla', planilla);
  }

  // tslint:disable-next-line:typedef
  public editarPlanilla(id: number, planilla: Planilla){
    return this.htpp.put(this.Url + 'Planilla/' + id, planilla);
  }

  // tslint:disable-next-line:typedef
  public eliminarPlanilla(id: number){
    return this.htpp.delete(this.Url + 'Planilla/' + id);
  }






}
