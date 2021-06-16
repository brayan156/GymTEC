import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../servicios.service';
import {Equipo} from '../../Clases/equipo';

@Component({
  selector: 'app-gestion-inventario',
  templateUrl: './gestion-inventario.component.html',
  styleUrls: ['./gestion-inventario.component.css']
})
export class GestionInventarioComponent implements OnInit {

  equipo: Equipo = new Equipo();
  listaDeEquipo: Equipo[] = [];
  ActualEquipo: Equipo = new Equipo();
  constructor(private service: ServiciosService) {
  }

  ngOnInit(): void {
    this.service.obtenerListaEquipo().subscribe(lista => {
      this.listaDeEquipo = lista;
      console.log(this.listaDeEquipo);
    });
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
