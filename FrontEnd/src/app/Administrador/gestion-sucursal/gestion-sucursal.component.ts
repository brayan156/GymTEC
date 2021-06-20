import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiciosService} from '../../servicios.service';
import {Sucursal} from '../../Clases/sucursal';
import {Servicio} from '../../Clases/servicio';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-gestion-sucursal',
  templateUrl: './gestion-sucursal.component.html',
  styleUrls: ['./gestion-sucursal.component.css']
})
export class GestionSucursalComponent implements OnInit {

  ListaSucursales: Sucursal[] = [];
  // @ts-ignore
  sucursal: Sucursal = new Sucursal();
  sucursalActual: Sucursal = new Sucursal();
  sucusalEditar: Sucursal = new  Sucursal();
  constructor(private service: ServiciosService) { }

  /**
   * Inicialisa las varibles para ls vista de gestion de sucursal
   */
  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
    });
  }

  /**
   * Crea una nueva sucursal
   * @param sucursal sucursal a crear
   */
  public creaSucursal(sucursal: Sucursal): void{
    this.service.agregarSucursal(sucursal).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Edita una sucursal especifica
   * @param sucursal a editar
   */
  public editarSucursal(sucursal: Sucursal): void{
    this.service.editarSucursal(this.sucursalActual.id , sucursal).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  /**
   * Elimina  una sucursal especfica
   * @param sucursal a eliminar
   */
  public eliminarSucursal(sucursal: Sucursal): void{
    try{
    this.service.eliminarSucursal(sucursal.id).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
    }
    catch (e) {
      this.alerta();
    }
  }

  /**
   * Funcion para activar o desactivar el SPA
   * @param sucursal sucursal a la cual deseo desactivar/activar el spa
   * @constructor
   */
  public ActivarDesactivarSpa(sucursal: Sucursal): void{
    sucursal.spaActivo = !sucursal.spaActivo;
    this.service.editarSucursal(sucursal.id , sucursal).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }
  /**
   * Funcion para activar o desactivar la tienda
   * @param sucursal sucursal a la cual deseo desactivar/activar la tienda
   * @constructor
   */
  public ActivarDesactivarTienda(sucursal: Sucursal): void{
    sucursal.tiendaActiva = !sucursal.tiendaActiva;
    this.service.editarSucursal(sucursal.id , sucursal).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  public copiarSucursal(sucursal: Sucursal): void{
    this.service.copiar_gimnasio(sucursal).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public obtenerInformacionItem(sucursal: Sucursal): void{
    this.sucursalActual = sucursal;
  }

  public alerta(): void{
    alert('Error favor desligar todos los servicios,Empleados,Equipos de esta sucursal');
  }
}
