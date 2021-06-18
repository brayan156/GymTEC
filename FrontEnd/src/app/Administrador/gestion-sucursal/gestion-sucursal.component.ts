import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiciosService} from '../../servicios.service';
import {Sucursal} from '../../Clases/sucursal';
import {Servicio} from '../../Clases/servicio';

@Component({
  selector: 'app-gestion-sucursal',
  templateUrl: './gestion-sucursal.component.html',
  styleUrls: ['./gestion-sucursal.component.css']
})
export class GestionSucursalComponent implements OnInit {

  ListaSucursales: Sucursal[] = [];
  // @ts-ignore
  sucursal: Sucursal = new Sucursal();
  sucursalActual: Sucursal = new Sucursal();
  sucusalEditar: Sucursal = new  Sucursal();
  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
    });
  }

  public creaSucursal(sucursal: Sucursal): void{
    this.service.agregarSucursal(sucursal).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  public editarSucursal(sucursal: Sucursal): void{
    this.service.editarSucursal(this.sucursalActual.id , sucursal).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  public eliminarSucursal(sucursal: Sucursal): void{
    this.service.eliminarSucursal(sucursal.id).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  public ActivarDesactivarSpa(sucursal: Sucursal): void{
    sucursal.spaActivo = !sucursal.spaActivo;
    this.service.editarSucursal(sucursal.id , sucursal).subscribe(a =>{
      console.log(a);
      this.ngOnInit();
    });
  }

  public ActivarDesactivarTienda(sucursal: Sucursal): void{
    sucursal.tiendaActiva = !sucursal.tiendaActiva;
    this.service.editarSucursal(sucursal.id , sucursal).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  public copiarSucursal(sucursal: Sucursal): void{
    this.service.copiarGimnasio(sucursal).subscribe(respuesta =>
    console.log(respuesta));
  }
  public obtenerInformacionItem(sucursal: Sucursal): void{
    this.sucursalActual = sucursal;
  }
}
