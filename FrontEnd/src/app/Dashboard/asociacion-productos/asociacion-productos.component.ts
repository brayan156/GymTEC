import { Component, OnInit } from '@angular/core';
import { InventarioGym } from 'src/app/Clases/inventario-gym';
import { Sucursal } from 'src/app/Clases/sucursal';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-asociacion-productos',
  templateUrl: './asociacion-productos.component.html',
  styleUrls: ['./asociacion-productos.component.css']
})
export class AsociacionProductosComponent implements OnInit {

  constructor(private service:ServiciosService) { }

  ListaSucursales: Sucursal[] = [];
  superLista: { Sucursal: Sucursal, equipos: InventarioGym[], equiposNo: InventarioGym[] }[] = [];
  inventariooModal: InventarioGym;
  sucursalModal: Sucursal;

  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
      lista.forEach(sucursal => {
        this.service.getInventarioGym(sucursal.id).subscribe(inventario => {
          this.superLista.push({
            Sucursal: sucursal,
            equipos: inventario.filter(t => t.column1 == 'asociado'),
            equiposNo: inventario.filter(t => t.column1 == 'no asociado'),
          })
        })
      })
    });
  }

  agregarInventario(inventario: InventarioGym, sucursal: Sucursal) {
    this.inventariooModal = inventario;
    this.sucursalModal = sucursal;
  }

  asociarInventario() {
    this.service.postTratamientoSucursal(this.sucursalModal.id, this.tratamientoModal.id).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this. = new TratamientosGym();
    });

  }

  borrarTratamiento(tratamiento: TratamientosGym, sucursal: Sucursal) {
    this.tratamientoModal = tratamiento;
    this.sucursalModal = sucursal;
  }

  DesacocieTratamiento() {
    this.service.deleteTratamientoSucursal(this.sucursalModal.id, this.tratamientoModal.id).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this.tratamientoModal = new TratamientosGym();
    });
  }

}
