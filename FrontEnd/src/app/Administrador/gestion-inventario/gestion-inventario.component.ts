import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../servicios.service';
import {Equipo} from '../../Clases/equipo';
import {Sucursal} from '../../Clases/sucursal';
import {TipoEquipo} from '../../Clases/tipo-equipo';

@Component({
  selector: 'app-gestion-inventario',
  templateUrl: './gestion-inventario.component.html',
  styleUrls: ['./gestion-inventario.component.css']
})
export class GestionInventarioComponent implements OnInit {

  equipo: Equipo = new Equipo();
  listaDeEquipo: Equipo[] = [];
  ActualEquipo: Equipo = new Equipo();
  listaSucursales: Sucursal[] = [];
  sucursal: Sucursal = new Sucursal();
  listaTiposEquipo: TipoEquipo[] = [];
  tipoEquipo: TipoEquipo = new TipoEquipo();
  constructor(private service: ServiciosService) {
  }

  ngOnInit(): void {
    this.service.obtenerListaEquipo().subscribe(lista => {
      this.listaDeEquipo = lista;
      console.log(this.listaDeEquipo);
      this.service.obtenerListasSucursal().subscribe(lista2 => {
      this.listaSucursales = lista2;
      console.log(this.listaSucursales); });
      this.service.obtenerListasTipoEquipo().subscribe(lista3 => {
        this.listaTiposEquipo = lista3;
        console.log(this.listaTiposEquipo); });
    });
  }

  public obtenerTipo(tipoEquipo: TipoEquipo): void{
    this.equipo.idTipoEquipo = tipoEquipo.id;
  }

  public obtenerSucursal(sucursal: Sucursal): void{
    this.equipo.idSucursal = sucursal.id;
  }
  public crearEquipo(equipo: Equipo): void{
    this.service.agregarEquipo(equipo).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }

  public editarEquipo(equipo: Equipo): void{
    this.service.editarEquipo(equipo.nSerie , equipo).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public eliminarEquipo(equipo: Equipo): void{
    this.service.eliminaEquipo(equipo.nSerie).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }
}
