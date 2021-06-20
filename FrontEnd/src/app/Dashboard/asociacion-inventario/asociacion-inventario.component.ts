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

  ListaSucursales: Sucursal[] =[];
  superLista: { sucursal: Sucursal, equipos: InventarioGym[], equiposNo: InventarioGym[] }[] =[];
  inventariooModal: InventarioGym= new InventarioGym();
  sucursalModal: Sucursal= new Sucursal();
  inventario: Equipo[] = [];

  /**
   * Inicialza las variablles para inicalizar la asociasion de inventario
   */
  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(lista);
      lista.forEach(sucursal => {
        this.service.getInventarioGym(sucursal.id).subscribe(inventario => {
          console.log(inventario);
          this.superLista.push({
            sucursal: sucursal,
            equipos: inventario.filter(t => t.disponibilidad == 'asociado'),
            equiposNo: inventario.filter(t => t.disponibilidad == 'no asociado'),
          })
        })
      })
    });
  }

  /**
   * Agrega un inventario especifico a una surursal especificia
   * @param inventario a agregar en susucursal
   * @param sucursal que recibe el inventarion
   */
  agregarInventario(inventario: InventarioGym, sucursal: Sucursal) {
    this.inventariooModal = inventario;
    this.sucursalModal = sucursal;
  }

  /**
   * Asociar inventario a la sucursal
   */
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

  /**
   * Elimina el inventario de la sucursal
   * @param inventario a eliminar
   * @param sucursal sucursla a la que se le desea eliminar
   */
  borrarInventario(inventario: InventarioGym, sucursal: Sucursal) {
    this.inventariooModal = inventario;
    this.sucursalModal = sucursal;
  }

  /**
   * Desasosia inventario de las sucursales
   * @constructor
   */
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
