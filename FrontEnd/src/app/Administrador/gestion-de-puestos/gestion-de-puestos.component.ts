import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../servicios.service';
import {Puesto} from '../../Clases/puesto';
import {Servicio} from '../../Clases/servicio';

@Component({
  selector: 'app-gestion-de-puestos',
  templateUrl: './gestion-de-puestos.component.html',
  styleUrls: ['./gestion-de-puestos.component.css']
})
export class GestionDePuestosComponent implements OnInit {

  puesto: Puesto = new Puesto();
  listaPuesto: Puesto[] = [];
  puestoActual: Puesto = new Puesto();

  constructor(private service: ServiciosService) { }

  /**
   * Inicializa las variales para mostrar las lista puestos
   */
  ngOnInit(): void {
    this.service.obtenerListasPuesto().subscribe(lista => {
      this.listaPuesto = lista;
      console.log(this.listaPuesto);
    });
  }

  /**
   * Crea un nuevo puesto
   * @param puesto el puesto a crear
   */
  public crearPuesto(puesto: Puesto): void{
    this.service.agregarPuesto(puesto).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Edita un puesto especifico
   * @param puesto el puesto a editar
   */
  public editarPuesto(puesto: Puesto): void{
    this.service.editarPuesto(puesto.id , puesto).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  /**
   * Eliminar un puesto especifico
   * @param puesto el puesto a eliminar
   */
  public eliminarPuesto(puesto: Puesto): void{
    this.service.eliminarPuesto(puesto.id).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  /**
   * obtiene informacion de un puesto espesifico
   * @param puesto
   */
  public obtenerInformacionItem(puesto: Puesto): void{
    this.puestoActual = puesto;
  }

}
