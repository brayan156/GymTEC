import { Component, OnInit } from '@angular/core';
import { InventarioGym } from 'src/app/Clases/inventario-gym';
import { Producto } from 'src/app/Clases/producto';
import { ProductoGym } from 'src/app/Clases/productos-gym';
import { Sucursal } from 'src/app/Clases/sucursal';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-asociacion-productos',
  templateUrl: './asociacion-productos.component.html',
  styleUrls: ['./asociacion-productos.component.css']
})
export class AsociacionProductosComponent implements OnInit {

  constructor(private service: ServiciosService) { }

  ListaSucursales: Sucursal[] = [];
  superLista: { Sucursal: Sucursal, productos: ProductoGym[], productosNo: ProductoGym[] }[] = [];
  productoModal: ProductoGym = new ProductoGym();
  sucursalModal: Sucursal = new Sucursal();

  /**
   * Inisializa las variables para la vista de asociasion de productos
   */
  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
      lista.forEach(sucursal => {
        this.service.getProductos_gimnasio(sucursal.id).subscribe(productos => {
          this.superLista.push({
            Sucursal: sucursal,
            productos: productos.filter(t => t.disponibilidad == 'asociado'),
            productosNo: productos.filter(t => t.disponibilidad == 'no asociado'),
          })
        })
      })
    });
  }

  /**
   * Agrega un producro
   * @param producto producto a agrgaer
   * @param sucursal a la que se le desea agregar el prodcuto
   */
  agregarProducto(producto: ProductoGym, sucursal: Sucursal) {
    this.productoModal = producto;
    this.sucursalModal = sucursal;
  }

  /**
   * Asocia un producto especifico
   */
  asociarProducto() {
    this.service.postProductoSucursal(this.sucursalModal.id, this.productoModal.codigoBarras).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this.productoModal = new ProductoGym();
    });
  }

  /**
   * Borra un producto en una sucursal
   * @param producto a ser agregado
   * @param sucursal a la cual se le desea agregar el producto
   */
  borrarProducto(producto: ProductoGym, sucursal: Sucursal) {
    this.productoModal = producto;
    this.sucursalModal = sucursal;
  }

  /**
   * Desasociar un producto
   * @constructor
   */
  DesacocieProducto() {
    this.service.deleteProductoSucursal(this.sucursalModal.id, this.productoModal.codigoBarras).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this.productoModal = new ProductoGym();
    });
  }
}
