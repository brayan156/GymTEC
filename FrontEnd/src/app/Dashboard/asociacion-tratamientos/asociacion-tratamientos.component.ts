import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/Clases/sucursal';
import { TratamientosGym } from 'src/app/Clases/tratamiento_gym';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-asociacion-tratamientos',
  templateUrl: './asociacion-tratamientos.component.html',
  styleUrls: ['./asociacion-tratamientos.component.css']
})
export class AsociacionTratamientosComponent implements OnInit {

  constructor(private service: ServiciosService) { }

  ListaSucursales: Sucursal[] = [];
  misTratamientos: TratamientosGym[] = [];
  superLista: { Sucursal: Sucursal, tratamientos: TratamientosGym[], tratamientoNo: TratamientosGym[] }[] = [];
  tratamientoModal: TratamientosGym;
  sucursalModal: Sucursal;

  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
      lista.forEach(sucursal => {
        this.service.getTratamientosGym(sucursal.id).subscribe(tratamientos => {
          this.superLista.push({
            Sucursal: sucursal,
            tratamientos: tratamientos.filter(t => t.column1 == 'asociado'),
            tratamientoNo: tratamientos.filter(t => t.column1 == 'no asociado'),
          })
        })
      })
    });
  }

  agregarTratamiento(tratamiento: TratamientosGym, sucursal: Sucursal) {
    this.tratamientoModal = tratamiento;
    this.sucursalModal = sucursal;
  }

  asociarTratamiento() {
    this.service.postTratamientoSucursal(this.sucursalModal.id, this.tratamientoModal.id).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this.tratamientoModal = new TratamientosGym();
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
