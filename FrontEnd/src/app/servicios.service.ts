import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
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
import {MostrarEmpleado} from './Clases/mostrar-empleado';
import {MostrarInventario} from './Clases/mostrar-inventario';
import { TratamientosGym } from './Clases/tratamiento_gym';
import { InventarioGym } from './Clases/inventario-gym';
import { ProductoGym } from './Clases/productos-gym';
import { MostrarEmpleado } from './Clases/mostrar-empleado';
import { MostrarInventario } from './Clases/mostrar-inventario';

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

  /**
   * Obtiene la lista completa de clases
   * @returns 
   */
  public obtenerListaClases(){
    return this.htpp.get<Clase[]>(this.Url + 'Clase/');
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene una clase segun el id
   * @param id 
   * @returns 
   */
  public obtenerClase(id: number){
    return this.htpp.get<Clase>(this.Url + 'Clase/' + id);
  }

  /**
   * Elimina una clase
   * @param id 
   * @returns 
   */
  // tslint:disable-next-line:typedef
  public eliminarClase(id: number){
    return this.htpp.delete(this.Url + 'Clase/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita una clase
   * @param id 
   * @param clase 
   * @returns 
   */
  public editarLaClase(id: number , clase: Clase){
    return this.htpp.put(this.Url + 'Clase/' + id , clase);
  }

  /**
   * Agrega una clase
   * @param clase 
   * @returns 
   */
  public agregarClase(clase: Clase){
    return this.htpp.post(this.Url + 'Clase/', clase);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene un cliente segun el id
   * @param id 
   * @returns 
   */
  public obtenerCliente(id: number){
    return this.htpp.get<Cliente>(this.Url + 'Cliente/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene lista completa de clientes
   * @returns 
   */
  public obtenerListaClientes(){
    return this.htpp.get<Cliente[]>(this.Url + 'Cliente');
  }

  // tslint:disable-next-line:typedef
  /**
   * Crea un nuevo cliente
   * @param cliente 
   * @returns 
   */
  public nuevoCliente(cliente: Cliente){
    return this.htpp.post(this.Url + 'Cliente', cliente);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un cliente
   * @param id 
   * @param cliente 
   * @returns 
   */
  public editarCliente(id: number, cliente: Cliente){
    return this.htpp.put(this.Url + 'Cliente/' + id, cliente);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un cliente
   * @param id 
   * @returns 
   */
  public eliminarCliente(id: number){
    return this.htpp.delete(this.Url + 'Cliente/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene un empleado 
   * @param id 
   * @returns 
   */
  public obtenerEmpleado(id: number){
    return this.htpp.get<Empleado>(this.Url + 'Empleado/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene la lista completa de empleados
   * @returns 
   */
  public obtenerListaEmpleados(){
    return this.htpp.get<Empleado[]>(this.Url + 'Empleado');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un empleado nuevo
   * @param empleado 
   * @returns 
   */
  public agregarEmpleado(empleado: Empleado){
    return this.htpp.post(this.Url + 'Empleado', empleado);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un empleado
   * @param id 
   * @param empleado 
   * @returns 
   */
  public editarEmpleado(id: number, empleado: Empleado){
    return this.htpp.put(this.Url + 'Empleado/' + id, empleado);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un empleado
   * @param id 
   * @returns 
   */
  public eliminaEmpleado(id: number){
    return this.htpp.delete(this.Url + 'Empleado/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  /**
   * Obtiene un equipo
   * @param id 
   * @returns 
   */
  public obtenerEquipo(id: number){
    return this.htpp.get<Equipo>(this.Url + 'Equipo/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene una lista de equipos
   * @returns 
   */
  public obtenerListaEquipo(){
    return this.htpp.get<Equipo[]>(this.Url + 'Equipo');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un equipo nuevo
   * @param equipo 
   * @returns 
   */
  public agregarEquipo(equipo: Equipo){
    return this.htpp.post(this.Url + 'Equipo', equipo);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un equipo
   * @param id 
   * @param equipo 
   * @returns 
   */
  public editarEquipo(id: number, equipo: Equipo){
    return this.htpp.put(this.Url + 'Equipo/' + id, equipo);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un equipo
   * @param id 
   * @returns 
   */
  public eliminaEquipo(id: number){
    return this.htpp.delete(this.Url + 'Equipo/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  /**
   * Obtiene una planilla
   * @param id 
   * @returns 
   */
  public obtenerPlanilla(id: number){
    return this.htpp.get<Planilla>(this.Url + 'Planilla/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene la lista de planillas
   * @returns 
   */
  public obtenerListasPlanillas(){
    return this.htpp.get<Planilla[]>(this.Url + 'Planilla');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega una planilla
   * @param planilla 
   * @returns 
   */
  public agregarPlanilla(planilla: Planilla){
    return this.htpp.post(this.Url + 'Planilla', planilla);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita una planilla
   * @param id 
   * @param planilla 
   * @returns 
   */
  public editarPlanilla(id: number, planilla: Planilla){
    return this.htpp.put(this.Url + 'Planilla/' + id, planilla);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina una planilla
   * @param id 
   * @returns 
   */
  public eliminarPlanilla(id: number){
    return this.htpp.delete(this.Url + 'Planilla/' + id);
  }

  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  /**
   * Obtiene un producto
   * @param id 
   * @returns 
   */
  public obtenerProducto(id: number){
    return this.htpp.get<Producto>(this.Url + 'Producto/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene una lista completa de productos
   * @returns 
   */
  public obtenerListasProducto(){
    return this.htpp.get<Producto[]>(this.Url + 'Producto');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un producto
   * @param producto 
   * @returns 
   */
  public agregarProducto(producto: Producto){
    return this.htpp.post(this.Url + 'Producto', producto);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un producto
   * @param id 
   * @param producto 
   * @returns 
   */
  public editarProducto(id: number, producto: Producto){
    return this.htpp.put(this.Url + 'Producto/' + id, producto);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un producto
   * @param id 
   * @returns 
   */
  public eliminarProducto(id: number){
    return this.htpp.delete(this.Url + 'Producto/' + id);
  }


  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  /**
   * Obtiene un puesto
   * @param id 
   * @returns 
   */
  public obtenerPuesto(id: number){
    return this.htpp.get<Puesto>(this.Url + 'Puesto/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene una lista completa de puestos
   * @returns 
   */
  public obtenerListasPuesto(){
    return this.htpp.get<Puesto[]>(this.Url + 'Puesto');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un puesto nuevo
   * @param puesto 
   * @returns 
   */
  public agregarPuesto(puesto: Puesto){
    return this.htpp.post(this.Url + 'Puesto', puesto);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un puesto
   * @param id 
   * @param puesto 
   * @returns 
   */
  public editarPuesto(id: number, puesto: Puesto){
    return this.htpp.put(this.Url + 'Puesto/' + id, puesto);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un puesto
   * @param id 
   * @returns 
   */
  public eliminarPuesto(id: number){
    return this.htpp.delete(this.Url + 'Puesto/' + id);
  }


  // DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  /**
   * Obtiene un servicio segun el id
   * @param id 
   * @returns 
   */
  public obtenerServicio(id: number){
    return this.htpp.get<Servicio>(this.Url + 'Servicios/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene una la lista de servicios completos
   * @returns 
   */
  public obtenerListasServicio(){
    return this.htpp.get<Servicio[]>(this.Url + 'Servicios');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un servicio nuevo
   * @param servicio 
   * @returns 
   */
  public agregarServicio(servicio: Servicio){
    return this.htpp.post(this.Url + 'Servicios', servicio);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un servicio
   * @param id 
   * @param servicio 
   * @returns 
   */
  public editarServicio(id: number, servicio: Servicio){
    return this.htpp.put(this.Url + 'Servicios/' + id, servicio);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un servicio
   * @param id 
   * @returns 
   */
  public eliminarServicio(id: number){
    return this.htpp.delete(this.Url + 'Servicios/' + id);
  }


// DUDAS SOBRE ESTOS METODOS
  // tslint:disable-next-line:typedef
  /**
   * Obtiene una lista de sucursal
   * @param id 
   * @returns 
   */
  public obtenerSucursal(id: number){
    return this.htpp.get<Sucursal>(this.Url + 'Sucursal/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene una lista completas de las sucursales
   * @returns 
   */
  public obtenerListasSucursal(){
    return this.htpp.get<Sucursal[]>(this.Url + 'Sucursal');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega una sucursal
   * @param sucursal 
   * @returns 
   */
  public agregarSucursal(sucursal: Sucursal){
    return this.htpp.post(this.Url + 'Sucursal', sucursal);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita una sucursal
   * @param id 
   * @param sucursal 
   * @returns 
   */
  public editarSucursal(id: number, sucursal: Sucursal){
    return this.htpp.put(this.Url + 'Sucursal/' + id, sucursal);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina una sucursal
   * @param id 
   * @returns 
   */
  public eliminarSucursal(id: number){
    return this.htpp.delete(this.Url + 'TipoEquipo/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene un tipo de equipo segun el id
   * @param id 
   * @returns 
   */
  public obtenerTipoEquipo(id: number){
    return this.htpp.get<TipoEquipo>(this.Url + 'TipoEquipo/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene las listas de tipo de equipo
   * @returns 
   */
  public obtenerListasTipoEquipo(){
    return this.htpp.get<TipoEquipo[]>(this.Url + 'TipoEquipo');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un tipo de equipo
   * @param tipoEquipo 
   * @returns 
   */
  public agregarTipoEquipo(tipoEquipo: TipoEquipo){
    return this.htpp.post(this.Url + 'TipoEquipo', tipoEquipo);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un tipo de equipo
   * @param id 
   * @param tipoEquipo 
   * @returns 
   */
  public editarTipoEquipo(id: number, tipoEquipo: TipoEquipo){
    return this.htpp.put(this.Url + 'TipoEquipo/' + id, tipoEquipo);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un tipo de equipo
   * @param id 
   * @returns 
   */
  public eliminarTipoEquipo(id: number){
    return this.htpp.delete(this.Url + 'TipoEquipo/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene un tratamiento segun el id
   * @param id 
   * @returns 
   */
  public obtenerTratamiento(id: number){
    return this.htpp.get<Tratamiento>(this.Url + 'Tratamiento/' + id);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene la lista completa de tratmientos
   * @returns 
   */
  public obtenerListasTratamiento(){
    return this.htpp.get<Tratamiento[]>(this.Url + 'Tratamiento');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agrega un tratamiento nuevo
   * @param tratamiento 
   * @returns 
   */
  public agregarTratamiento(tratamiento: Tratamiento){
    return this.htpp.post(this.Url + 'Tratamiento', tratamiento);
  }

  // tslint:disable-next-line:typedef
  /**
   * Edita un tratamiento 
   * @param id 
   * @param tratamiento 
   * @returns 
   */
  public editarTratamiento(id: number, tratamiento: Tratamiento){
    return this.htpp.put(this.Url + 'Tratamiento/' + id, tratamiento);
  }

  // tslint:disable-next-line:typedef
  /**
   * Elimina un tratamiento de un gimnasio
   * @param id 
   * @returns 
   */
  public eliminarTratamiento(id: number){
    return this.htpp.delete(this.Url + 'Tratamiento/' + id);
  }


  // tslint:disable-next-line:typedef
  /**
   * Obtiene los tratamientos de un gimnasio
   * @param idSucursal 
   * @returns 
   */
  public getTratamientosGym(idSucursal: number) {
    return this.htpp.get<TratamientosGym[]>(this.Url + 'StoreProcedures/tratamientos_gimnasio/' + idSucursal);
  }

/**
 * Obtiene los servicios de un gym
 * @param idSucursal 
 * @returns 
 */
  public getServGym(idSucursal: number){
    return this.htpp.get<Servicio[]>(this.Url + 'StoreProcedures/servicios_gimnasio/' + idSucursal);
  }

  /**
   * Obtiene todos los productos de un gym
   * @param idSucursal 
   * @returns 
   */
  public getProductos_gimnasio(idSucursal:number){
    return this.htpp.get<ProductoGym[]>(this.Url + 'StoreProcedures/productos_gimnasio/' + idSucursal);
  }

  /**
   * Obtiene todas las clases de un gym
   * @param idSucursal 
   * @returns 
   */
  public getClasesGym(idSucursal:number){
    return this.htpp.get<Clase[]>(this.Url + 'StoreProcedures/mostrar_clases_gimnasio/' + idSucursal);
  }

  /**
   * Realiza el login del administrador
   * @param contrasena 
   * @param correo 
   * @returns 
   */
  public loginAdmin(contrasena:string, correo: string){
    return this.htpp.get<Empleado[]>(this.Url + 'StoreProcedures/login_admin/' + contrasena + '/' + correo);
  }

  /**
   * Obtiene el inventario de una sucursal
   * @param idSucursal 
   * @returns 
   */
  public getInventarioGym(idSucursal:number){
    return this.htpp.get<InventarioGym[]>(this.Url + 'StoreProcedures/inventario_gimnasio/' + idSucursal);
  }

  /**
   * Genera la planilla completa de una sucursal
   * @param idSucursal 
   * @returns 
   */
  public generarPlanilla(idSucursal:number){
    return this.htpp.get<GenerarPlanilla[]>(this.Url + 'StoreProcedures/generar_planilla/' + idSucursal);
  }

  /**
   * Filtro para obtener una clase a la cual asociar un cliente segun los parametros dados
   * @param idsucursal 
   * @param nombre_servicio 
   * @param fechainicio 
   * @param fechafin 
   * @returns 
   */
  public filtro_clases(idsucursal: number, nombre_servicio: string, fechainicio: string, fechafin: string) {
    let datos = {
      "idSucursal": idsucursal,
      "nombre_servicio":nombre_servicio,
      "fechainicio":fechainicio,
      "fechafin":fechafin
    }
    return this.htpp.get<FiltroClase[]>(this.Url + 'StoreProcedures/filtro_clases/' + datos);
  }

  /**
   * Genera un filtro de las clases a las cuales esta inscrito un cliente
   * @param idCliente 
   * @returns 
   */
  public filtro_clases_cliente(idCliente:number) {
    return this.htpp.get<FiltroClaseCliente[]>(this.Url + 'StoreProcedures/filtro_clases_cliente/' + idCliente);
  }

  /**
   * Copia un gimnasio completo de una sucursal
   * @param sucursal 
   * @returns 
   */
  public copiar_gimnasio(sucursal: Sucursal) {
    return this.htpp.get<void>(this.Url + 'StoreProcedures/copiar_gimnasio/' + sucursal);
  }

  /**
   * Copia un calendario entero entre las fechas dadas
   * @param fechainicio 
   * @param fechaFinal 
   * @returns 
   */
  public copiar_calendario(fechainicio:string, fechaFinal:string) {
    return this.htpp.get<void>(this.Url + 'StoreProcedures/copiar_calendario/' + fechainicio + '/' + fechaFinal);
  }

  /**
   * Asocia un tratamiento a una sucursal
   * @param idSucursal 
   * @param idTratamiento 
   * @returns 
   */
  public postTratamientoSucursal(idSucursal: number, idTratamiento: number) {
    return this.htpp.post(this.Url + "TratamientoSucursal/"+ idTratamiento, idSucursal);
  }

  /**
   * Elimina un tratamiento de una sucursal
   * @param idSucursal 
   * @param idTratamiento 
   * @returns 
   */
  public deleteTratamientoSucursal(idSucursal: number, idTratamiento: number) {
    return this.htpp.delete(this.Url + "TratamientoSucursal/"+ idTratamiento +'/'+ idSucursal);
  }

  /**
   * Crea una relacion entre un producto y una sucursal
   * @param idSucursal 
   * @param idProducto 
   * @returns 
   */
  public postProductoSucursal(idSucursal: number, idProducto: number) {
    return this.htpp.post(this.Url + "ProductoSucursal/"+ idProducto, idSucursal);
  }

  /**
   * Elimina un productoSucursal a partir del id del producto y de la sucursal
   * @param idSucursal 
   * @param idProducto 
   * @returns 
   */
  public deleteProductoSucursal(idSucursal: number, idProducto: number) {
    return this.htpp.delete(this.Url + "ProductoSucursal/"+ idProducto +'/'+ idSucursal);
  }

  // tslint:disable-next-line:typedef
  /**
   * Obtiene el objeto MostrarEmpleado a partir de su id
   * @param id 
   * @returns 
   */
  public obtenerMostrarEmpleado(id: number) {
    return this.htpp.get<MostrarEmpleado>(this.Url + 'mostrar_empleados/' + id);
  }

  // tslint:disable-next-line:typedef
  public obtenerListaMostrarInventario(){
    return this.htpp.get<MostrarInventario[]>(this.Url + 'mostrar_inventario/');
  }

  /**
   * Obtiene la lista de MostrarEmpleado
   * @returns 
   */
  // tslint:disable-next-line:typedef
  public obtenerListasMostrarEmpleado(){
    return this.htpp.get<MostrarEmpleado[]>(this.Url + 'mostrar_empleados');
  }

  // tslint:disable-next-line:typedef
  /**
   * Agregar un objeto MostrarEMpleado
   * @param mostrarEmpleado 
   * @returns 
   */
  public agregarMostrarEmpleado(mostrarEmpleado: MostrarEmpleado){
    return this.htpp.post(this.Url + 'mostrar_empleados', mostrarEmpleado);
  }


  /**
   * elimina a un empleado de mostrarEmpleado
   * @param id 
   * @returns 
   */
  // tslint:disable-next-line:typedef
  public eliminarMostrarEmpleado(id: number){
    return this.htpp.delete(this.Url + 'mostrar_empleados/' + id);
  }

  // Mostrar Inventario

  // tslint:disable-next-line:typedef
  /**
   * Obtiene el view de mostrarInventario
   * @returns 
   */
  public obtenerListaMostrarInventario() {
    return this.htpp.get<MostrarInventario[]>(this.Url + 'mostrar_inventario/');
  }

}
