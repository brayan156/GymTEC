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
  actualProducto: Producto = new Producto();
  constructor(private service: ServiciosService) { }

  /**
   * Incializa la vista gestion de productos
   */
  ngOnInit(): void {
    this.service.obtenerListasProducto().subscribe(lista => {
    this.listaDeProductos = lista;
    console.log(this.listaDeProductos);
    });
  }

  /**
   * Crea un nuevo producto
   * @param producto producto a crear
   */
  public crearProducto(producto: Producto): void{
    this.service.agregarProducto(producto).subscribe(respuesta => {
      console.log(respuesta);
      this.ngOnInit();
    });
  }

  /**
   * Editar un producto especifico
   * @param producto a editar
   */
  public editarProducto(producto: Producto): void{
    this.service.editarProducto(producto.codigoBarras , producto).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });
  }

  /**
   * Eliminar un nuevo producto
   * @param producto a editar
   */
  public eliminarProducto(producto: Producto): void{
    this.service.eliminarProducto(producto.codigoBarras).subscribe(a => {
      console.log(a);
      this.ngOnInit();
    });

  }

  /**
   * Obtener informacion de un producto especifico
   * @param producto actual
   */
  public obtenerInformacionItem(producto: Producto): void{
    this.actualProducto = producto;
  }
}
