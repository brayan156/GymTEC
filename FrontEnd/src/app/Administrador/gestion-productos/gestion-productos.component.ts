import { Component, OnInit } from '@angular/core';
import {TipoEquipo} from '../../Clases/tipo-equipo';
import {Sucursal} from '../../Clases/sucursal';
import {Equipo} from '../../Clases/equipo';
import {Producto} from '../../Clases/producto';
import {ServiciosService} from '../../servicios.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
  producto: Producto = new Producto();
  listaDeProductos: Producto[] = [];
  ActualProducto: Producto = new Producto();
  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
  }

  public crearProducto(producto: Producto): void{
    this.service.agregarProducto(producto).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }

  public editarProducto(producto: Producto): void{
    this.service.editarProducto(producto.codigoBarras , producto).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public eliminarProducto(producto: Producto): void{
    this.service.eliminarProducto(producto.codigoBarras).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }
}
