import { Component, OnInit } from '@angular/core';
import {Tratamiento} from '../../Clases/tratamiento';
import {ServiciosService} from '../../servicios.service';
import {TipoEquipo} from '../../Clases/tipo-equipo';

@Component({
  selector: 'app-gestion-tipo-equipos',
  templateUrl: './gestion-tipo-equipos.component.html',
  styleUrls: ['./gestion-tipo-equipos.component.css']
})
export class GestionTipoEquiposComponent implements OnInit {

  tipoEquipo: TipoEquipo = new TipoEquipo();
  listatipoEquipo: TipoEquipo[] = [];
  TipoEquipo: TipoEquipo = new TipoEquipo();
  constructor(private service: ServiciosService) {
  }

  ngOnInit(): void {
    this.service.obtenerListasTipoEquipo().subscribe(lista => {
      this.listatipoEquipo = lista;
      console.log(this.listatipoEquipo);
    });
  }

  public creaTipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.agregarTipoEquipo(tipoEquipo).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }

  public editarTipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.editarTipoEquipo(tipoEquipo.id , tipoEquipo).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public eliminartipoEquipo(tipoEquipo: TipoEquipo): void{
    this.service.eliminarTipoEquipo(tipoEquipo.id).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }
}
