import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Clases/equipo';
import { InventarioGym } from 'src/app/Clases/inventario-gym';
import { Sucursal } from 'src/app/Clases/sucursal';
import { TratamientosGym } from 'src/app/Clases/tratamiento_gym';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-asociacion-inventario',
  templateUrl: './asociacion-inventario.component.html',
  styleUrls: ['./asociacion-inventario.component.css']
})
export class AsociacionInventarioComponent implements OnInit {

  constructor(private service: ServiciosService) { }

  ListaSucursales: Sucursal[] = [];
  superLista: { Sucursal: Sucursal, equipos: InventarioGym[], equiposNo: InventarioGym[] }[] = [];
  inventariooModal: InventarioGym;
  sucursalModal: Sucursal;
  inventario: Equipo[];

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
    this.service.obtenerListaEquipo().subscribe(inventarios => {
     let  equipo = inventarios.find(e => e.nSerie == this.inventariooModal.nSerie);
      equipo!.idSucursal = this.sucursalModal.id;
      this.service.editarEquipo(equipo!.nSerie, equipo!).subscribe(() => {
        this.sucursalModal = new Sucursal();
        this.inventariooModal = new InventarioGym();
      });
    })
  }

  borrarInventario(inventario: InventarioGym, sucursal: Sucursal) {
    this.inventariooModal = inventario;
    this.sucursalModal = sucursal;
  }

  DesacocieInventario() {
    this.service.obtenerListaEquipo().subscribe(inventarios => {
      let  equipo = inventarios.find(e => e.nSerie == this.inventariooModal.nSerie);
       equipo!.idSucursal = 0;
       this.service.editarEquipo(equipo!.nSerie, equipo!).subscribe(() => {
         this.sucursalModal = new Sucursal();
         this.inventariooModal = new InventarioGym();
       });
     })
  }

}
