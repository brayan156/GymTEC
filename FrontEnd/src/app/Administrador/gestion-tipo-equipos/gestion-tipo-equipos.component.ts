import { Component, OnInit } from '@angular/core';
import {Tratamiento} from '../../Clases/tratamiento';
import {ServiciosService} from '../../servicios.service';
import {TipoEquipo} from '../../Clases/tipo-equipo';
import {Sucursal} from '../../Clases/sucursal';

@Component({
  selector: 'app-gestion-tipo-equipos',
  templateUrl: './gestion-tipo-equipos.component.html',
  styleUrls: ['./gestion-tipo-equipos.component.css']
})
export class GestionTipoEquiposComponent implements OnInit {

  tipoEquipo: TipoEquipo = new TipoEquipo();
  listatipoEquipo: TipoEquipo[] = [];
  tipoEquipoActual: TipoEquipo = new TipoEquipo();
  constructor(private service: ServiciosService) {
  }

  /**
   * Inicializa las variables para que se muestren en la vista de gestion de tipo de equipo
   */
  ngOnInit(): void {
    this.service.obtenerListasTipoEquipo().subscribe(lista => {
      this.listatipoEquipo = lista;
      console.log(this.listatipoEquipo);
    });
  }

  /**
   * Crea un nuevo tipo de equipo
   * @param tipoEquipo tipo de equipo a crear
   */
  public creaTipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.agregarTipoEquipo(tipoEquipo).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });

  }

  /**
   * Editar tipo de equipo especifico
   * @param tipoEquipo tipo de equipo a editar
   */
  public editarTipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.editarTipoEquipo(tipoEquipo.id , tipoEquipo).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Elimina un tipo de equipo especifico
   * @param tipoEquipo tipo de equipo a eliminar
   */
  public eliminartipoEquipo(tipoEquipo: TipoEquipo): void {
    this.service.eliminarTipoEquipo(tipoEquipo.id).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Obtiene informacion especficia de un item, tipo de equipo
   * @param tipoEquipo informacion entrante
   */
  public obtenerInformacionItem(tipoEquipo: TipoEquipo): void{
    this.tipoEquipoActual = tipoEquipo;
  }
}
