import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../servicios.service';
import {Equipo} from '../../Clases/equipo';
import {Sucursal} from '../../Clases/sucursal';
import {TipoEquipo} from '../../Clases/tipo-equipo';
import {MostrarInventario} from '../../Clases/mostrar-inventario';

@Component({
  selector: 'app-gestion-inventario',
  templateUrl: './gestion-inventario.component.html',
  styleUrls: ['./gestion-inventario.component.css']
})
export class GestionInventarioComponent implements OnInit {
  mostrarInventario: MostrarInventario[] = [];
  equipo: Equipo = new Equipo();
  equipoActual: Equipo = new Equipo();
  listaDeEquipo: Equipo[] = [];

  listaSucursales: Sucursal[] = [];
  sucursal: Sucursal = new Sucursal();

  listaTiposEquipo: TipoEquipo[] = [];
  tipoEquipo: TipoEquipo = new TipoEquipo();
  constructor(private service: ServiciosService) {
  }

  /**
   * Inicializa la lista para mostra la vista de gestion de inventario
   */
  ngOnInit(): void {
    this.service.obtenerListaMostrarInventario().subscribe(listaMI => {
      this.mostrarInventario = listaMI;
      console.log(listaMI);
      this.service.obtenerListasSucursal().subscribe(lista2 => {
        this.listaSucursales = lista2;
      });
      this.service.obtenerListasTipoEquipo().subscribe(lista3 => {
        this.listaTiposEquipo = lista3;
      });
    });
  }

  /**
   * Obtiene informacion del equipo
   * @param id del equipo que se desea a obtener
   */
  public obtenerEquipo(id: number): void{
    this.service.obtenerEquipo(id).subscribe(respuesta => {
      this.equipoActual = respuesta;
      console.log(respuesta);
    });
  }

  /**
   * Crea un nuevo equipo
   * @param equipo que se va a crear
   */
  public crearEquipo(equipo: Equipo): void{
    this.service.agregarEquipo(equipo).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Edita un equipo especifico
   * @param equipo equipo que se va a editar
   */
  public editarEquipo(equipo: Equipo): void{
    this.service.editarEquipo(equipo.nSerie , equipo).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Elimina un equipo especifico
   * @param equipo a eliminar
   */
  public eliminarEquipo(equipo: Equipo): void{
    this.service.eliminaEquipo(equipo.nSerie).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }
}
