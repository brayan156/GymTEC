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

  ngOnInit(): void {
    this.service.obtenerListasTipoEquipo().subscribe(lista => {
      this.listatipoEquipo = lista;
      console.log(this.listatipoEquipo);
    });
  }

  public creaTipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.agregarTipoEquipo(tipoEquipo).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });

  }

  public editarTipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.editarTipoEquipo(tipoEquipo.id , tipoEquipo).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public eliminartipoEquipo(tipoEquipo: TipoEquipo): void {
    this.service.eliminarTipoEquipo(tipoEquipo.id).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public obtenerInformacionItem(tipoEquipo: TipoEquipo): void{
    this.tipoEquipoActual = tipoEquipo;
  }
}
