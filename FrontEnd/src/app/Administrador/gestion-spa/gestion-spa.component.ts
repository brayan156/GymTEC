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

  ngOnInit(): void {
    this.service.obtenerListasTratamiento().subscribe(lista => {
      this.listaTratamientos = lista;
      console.log(this.listaTratamientos);
    });
  }

  public creaTratamiento(tratamiento: Tratamiento): void{
    this.service.agregarTratamiento(tratamiento).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public editarTratamiento(tratamiento: Tratamiento): void{
    this.service.editarTratamiento(tratamiento.id , tratamiento).subscribe(a =>{
      console.log(a);
      this.ngOnInit();
    });
  }

  public eliminarTratamiento(tratamiento: Tratamiento): void{
    this.service.eliminarTratamiento(tratamiento.id).subscribe(a =>{
      console.log(a);
      this.ngOnInit();
    });
  }
  public obtenerInformacionItem(tratamiento: Tratamiento): void{
    this.tratamientoActual = tratamiento;
  }
}
