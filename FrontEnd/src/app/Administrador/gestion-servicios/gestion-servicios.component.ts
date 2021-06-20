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


  ngOnInit(): void {
    this.service.obtenerListasServicio().subscribe(lista => {
      this.listaServicio = lista;
      console.log(this.listaServicio);
    });
  }
  public creaServicio(servicio: Servicio): void{
    this.service.agregarServicio(servicio).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public editarServicio(servicio: Servicio): void{
    this.service.editarServicio(servicio.id , servicio).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public eliminarServicio(servicio: Servicio): void{
    this.service.eliminarServicio(servicio.id).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public obtenerInformacionItem(servicio: Servicio): void{
    this.servicioActual = servicio;
  }
}
