import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Clases/cliente';
import { Servicio } from '../Clases/servicio';
import { Sucursal } from '../Clases/sucursal';
import { FiltroClaseCliente } from '../Clases/filtro_clase_cliente';
import { FiltroClase } from '../Clases/filtro_clase';
import { ClassElement } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  UrlCliente = 'https://localhost:44328/api/Client';
  Url = 'https://localhost:44388/api/';
  user: Cliente;

  constructor(private htpp: HttpClient) {
  }

  login(contrasena: string, correo: string) {
    return this.htpp.get<Cliente[]>(this.UrlCliente + correo + '/' + contrasena);
  }

  register(cliente:Cliente) {
    return this.htpp.post(this.UrlCliente, cliente);
  }

  public obtenerListasSucursal(){
    return this.htpp.get<Sucursal[]>(this.Url + 'Sucursal');
  }

  public obtenerListasServicio(){
    return this.htpp.get<Servicio[]>(this.Url + 'Servicio');
  }

  public filtro_clases_cliente(idCliente:number) {
    return this.htpp.get<FiltroClaseCliente[]>(this.Url + 'api/StoreProcedures/filtro_clases_cliente/' + idCliente);
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
}
