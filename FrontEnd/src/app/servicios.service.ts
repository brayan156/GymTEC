import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Clase} from './Clases/clase';
import {Cliente} from './Clases/cliente';
import {Empleado} from './Clases/empleado';
import {Equipo} from './Clases/equipo';
import {Planilla} from './Clases/planilla';
import {Producto} from './Clases/producto';
import {Puesto} from './Clases/puesto';
import {Servicio} from './Clases/servicio';
import {Sucursal} from './Clases/sucursal';
import {TipoEquipo} from './Clases/tipo-equipo';
import {Tratamiento} from './Clases/tratamiento';
import { GenerarPlanilla } from './Clases/generar_planilla';
import { FiltroClase } from './Clases/filtro_clase';
import { FiltroClaseCliente } from './Clases/filtro_clase_cliente';
import { TratamientosGym } from './Clases/tratamiento_gym';
import { InventarioGym } from './Clases/inventario-gym';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  Url = 'https://localhost:44388/api/';
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

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerProducto(id: number){
    return this.htpp.get<Producto>(this.Url + 'Producto/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasProducto(){
    return this.htpp.get<Producto[]>(this.Url + 'Producto');
  }

  // tslint:disable-next-line:typedef
  public agregarProducto(producto: Producto){
    return this.htpp.post(this.Url + 'Producto', producto);
  }

  // tslint:disable-next-line:typedef
  public editarProducto(id: number, producto: Producto){
    return this.htpp.put(this.Url + 'Producto/' + id, producto);
  }

  // tslint:disable-next-line:typedef
  public eliminarProducto(id: number){
    return this.htpp.delete(this.Url + 'Producto/' + id);
  }


  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerPuesto(id: number){
    return this.htpp.get<Puesto>(this.Url + 'Puesto/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasPuesto(){
    return this.htpp.get<Puesto[]>(this.Url + 'Puesto');
  }

  // tslint:disable-next-line:typedef
  public agregarPuesto(puesto: Puesto){
    return this.htpp.post(this.Url + 'Puesto', puesto);
  }

  // tslint:disable-next-line:typedef
  public editarPuesto(id: number, puesto: Puesto){
    return this.htpp.put(this.Url + 'Puesto/' + id, puesto);
  }

  // tslint:disable-next-line:typedef
  public eliminarPuesto(id: number){
    return this.htpp.delete(this.Url + 'Puesto/' + id);
  }


  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerServicio(id: number){
    return this.htpp.get<Servicio>(this.Url + 'Servicio/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasServicio(){
    return this.htpp.get<Servicio[]>(this.Url + 'Servicio');
  }

  // tslint:disable-next-line:typedef
  public agregarServicio(servicio: Servicio){
    return this.htpp.post(this.Url + 'Servicio', servicio);
  }

  // tslint:disable-next-line:typedef
  public editarServicio(id: number, servicio: Servicio){
    return this.htpp.put(this.Url + 'Servicio/' + id, servicio);
  }

  // tslint:disable-next-line:typedef
  public eliminarServicio(id: number){
    return this.htpp.delete(this.Url + 'Servicio/' + id);
  }


// DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerSucursal(id: number){
    return this.htpp.get<Sucursal>(this.Url + 'Sucursal/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasSucursal(){
    return this.htpp.get<Sucursal[]>(this.Url + 'Sucursal');
  }

  // tslint:disable-next-line:typedef
  public agregarSucursal(sucursal: Sucursal){
    return this.htpp.post(this.Url + 'Sucursal', sucursal);
  }

  // tslint:disable-next-line:typedef
  public editarSucursal(id: string, sucursal: Sucursal){
    return this.htpp.put(this.Url + 'Sucursal/' + id, sucursal);
  }

  // tslint:disable-next-line:typedef
  public eliminarSucursal(id: string){
    return this.htpp.delete(this.Url + 'TipoEquipo/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerTipoEquipo(id: number){
    return this.htpp.get<TipoEquipo>(this.Url + 'TipoEquipo/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasTipoEquipo(){
    return this.htpp.get<TipoEquipo[]>(this.Url + 'TipoEquipo');
  }

  // tslint:disable-next-line:typedef
  public agregarTipoEquipo(tipoEquipo: TipoEquipo){
    return this.htpp.post(this.Url + 'TipoEquipo', tipoEquipo);
  }

  // tslint:disable-next-line:typedef
  public editarTipoEquipo(id: number, tipoEquipo: TipoEquipo){
    return this.htpp.put(this.Url + 'TipoEquipo/' + id, tipoEquipo);
  }

  // tslint:disable-next-line:typedef
  public eliminarTipoEquipo(id: number){
    return this.htpp.delete(this.Url + 'TipoEquipo/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  public obtenerTratamiento(id: number){
    return this.htpp.get<Tratamiento>(this.Url + 'Tratamiento/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListasTratamiento(){
    return this.htpp.get<Tratamiento[]>(this.Url + 'Tratamiento');
  }

  // tslint:disable-next-line:typedef
  public agregarTratamiento(tratamiento: Tratamiento){
    return this.htpp.post(this.Url + 'Tratamiento', tratamiento);
  }

  // tslint:disable-next-line:typedef
  public editarTratamiento(id: number, tratamiento: Tratamiento){
    return this.htpp.put(this.Url + 'Tratamiento/' + id, tratamiento);
  }

  // tslint:disable-next-line:typedef
  public eliminarTratamiento(id: number){
    return this.htpp.delete(this.Url + 'Tratamiento/' + id);
  }

  //Stored Procedures

  // tslint:disable-next-line:typedef
  public getTratamientosGym(idSucursal: number){
    return this.htpp.get<TratamientosGym[]>(this.Url + 'api/StoreProcedures/tratamientos_gimnasio/' + idSucursal);
  }

  public getServGym(idSucursal: number){
    return this.htpp.get<Servicio[]>(this.Url + 'api/StoreProcedures/servicios_gimnasio/' + idSucursal);
  }

  public getProductos_gimnasio(idSucursal:number){
    return this.htpp.get<Producto[]>(this.Url + 'api/StoreProcedures/productos_gimnasio/' + idSucursal);
  }

  public getClasesGym(idSucursal:number){
    return this.htpp.get<Clase[]>(this.Url + 'api/StoreProcedures/mostrar_clases_gimnasio/' + idSucursal);
  }

  public loginAdmin(contrasena:string, correo: string){
    return this.htpp.get<Empleado[]>(this.Url + 'api/StoreProcedures/login_admin/' + contrasena + '/' + correo);
  }

  public getInventarioGym(idSucursal:number){
    return this.htpp.get<InventarioGym[]>(this.Url + 'api/StoreProcedures/inventario_gimnasio/' + idSucursal);
  }

  public generarPlanilla(idSucursal:number){
    return this.htpp.get<GenerarPlanilla[]>(this.Url + 'api/StoreProcedures/generar_planilla/' + idSucursal);
  }

  public filtro_clases(idsucursal: number, nombre_servicio: string, fechainicio: string, fechafin: string) {
    let datos = {
      "idSucursal": idsucursal,
      "nombre_servicio":nombre_servicio,
      "fechainicio":fechainicio,
      "fechafin":fechafin
    }
    return this.htpp.get<FiltroClase[]>(this.Url + 'api/StoreProcedures/filtro_clases/' + datos);
  }

  public filtro_clases_cliente(idCliente:number) {
    return this.htpp.get<FiltroClaseCliente[]>(this.Url + 'api/StoreProcedures/filtro_clases_cliente/' + idCliente);
  }

  public copiar_gimnasio(sucursal: Sucursal) {
    return this.htpp.get<void>(this.Url + 'api/StoreProcedures/copiar_gimnasio/' + sucursal);
  }

  public copiar_calendario(fechainicio:string, fechaFinal:string) {
    return this.htpp.get<void>(this.Url + 'api/StoreProcedures/copiar_calendario/' + fechainicio + '/' + fechaFinal);
  }

  public postTratamientoSucursal(idSucursal: number, idTratamiento: number) {
    return this.htpp.post(this.Url + "api/TratamientoSucursal/"+ idTratamiento, idSucursal);
  }

  public deleteTratamientoSucursal(idSucursal: number, idTratamiento: number) {
    return this.htpp.delete(this.Url + "api/TratamientoSucursal/"+ idTratamiento +'/'+ idSucursal);
  }



}
