import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../servicios.service';
import {Tratamiento} from '../../Clases/tratamiento';
import {Sucursal} from '../../Clases/sucursal';

@Component({
  selector: 'app-gestion-spa',
  templateUrl: './gestion-spa.component.html',
  styleUrls: ['./gestion-spa.component.css']
})
export class GestionSpaComponent implements OnInit {

  tratamiento: Tratamiento = new Tratamiento();
  listaTratamientos: Tratamiento[] = [];
  tratamientoActual: Tratamiento = new Tratamiento();
  constructor(private service: ServiciosService) {
  }

  /**
   * Incializa las variables a mostrar en la vista de gestion de spa
   */
  ngOnInit(): void {
    this.service.obtenerListasTratamiento().subscribe(lista => {
      this.listaTratamientos = lista;
      console.log(this.listaTratamientos);
    });
  }

  /**
   * Crea un nuevo tratamiento
   * @param tratamiento tratamien a crear
   */
  public creaTratamiento(tratamiento: Tratamiento): void{
    this.service.agregarTratamiento(tratamiento).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Edita un tratamiento especifico
   * @param tratamiento tratamiento a editar
   */
  public editarTratamiento(tratamiento: Tratamiento): void{
    this.service.editarTratamiento(tratamiento.id , tratamiento).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  /**
   * Eliminar un tratamiento especifico
   * @param tratamiento tratamiento a eliminar
   */
  public eliminarTratamiento(tratamiento: Tratamiento): void{
    this.service.eliminarTratamiento(tratamiento.id).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  /**
   * Obtiene informacion de un item
   * @param tratamiento item del cual quiero obtener la informacion
   */
  public obtenerInformacionItem(tratamiento: Tratamiento): void{
    this.tratamientoActual = tratamiento;
  }
}
