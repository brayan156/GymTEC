import { Component, OnInit } from '@angular/core';
import {Tratamiento} from '../../Clases/tratamiento';
import {ServiciosService} from '../../servicios.service';
import {Servicio} from '../../Clases/servicio';

@Component({
  selector: 'app-gestion-servicios',
  templateUrl: './gestion-servicios.component.html',
  styleUrls: ['./gestion-servicios.component.css']
})
export class GestionServiciosComponent implements OnInit {

  servicio: Servicio = new Servicio();
  listaServicio: Servicio[] = [];
  servicioActual: Servicio = new Servicio();

  constructor(private service: ServiciosService) { }

  /**
   * Incializa las variable para mostrar en gestion de servicios
   */
  ngOnInit(): void {
    this.service.obtenerListasServicio().subscribe(lista => {
      this.listaServicio = lista;
      console.log(this.listaServicio);
    });
  }

  /**
   * Crea un nuevo servicio
   * @param servicio servicio a crear
   */
  public creaServicio(servicio: Servicio): void{
    this.service.agregarServicio(servicio).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Edita un servicio especifico
   * @param servicio servicio a editar
   */
  public editarServicio(servicio: Servicio): void{
    this.service.editarServicio(servicio.id , servicio).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  /**
   * Elimina un servicio especifico
   * @param servicio a eliminar
   */
  public eliminarServicio(servicio: Servicio): void{
    this.service.eliminarServicio(servicio.id).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  /**
   * Obtine informacion de un servicio
   * @param servicio
   */
  public obtenerInformacionItem(servicio: Servicio): void{
    this.servicioActual = servicio;
  }
}
