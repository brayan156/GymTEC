import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiciosService} from '../../servicios.service';
import {Sucursal} from '../../Clases/sucursal';

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
    this.service.agregarSucursal(sucursal).subscribe(respuesta =>
    console.log(respuesta));
    this.ngOnInit();
  }

  public editarSucursal(sucursal: Sucursal): void{
    this.service.editarSucursal(this.sucursalActual.id , sucursal).subscribe(a =>
    console.log(a));
    this.ngOnInit();
  }

  public eliminarSucursal(): void{

  }
}
