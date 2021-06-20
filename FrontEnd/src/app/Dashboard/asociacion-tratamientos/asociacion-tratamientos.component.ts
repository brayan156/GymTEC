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
  tratamientoModal: TratamientosGym = new TratamientosGym();
  sucursalModal: Sucursal = new Sucursal();

  /**
   * Inicializa las variables denteo de las vista asociar tratamiento
   */
  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
      lista.forEach(sucursal => {
        this.service.getTratamientosGym(sucursal.id).subscribe(tratamientos => {
          this.superLista.push({
            Sucursal: sucursal,
            tratamientos: tratamientos.filter(t => t.disponibilidad == 'asociado'),
            tratamientoNo: tratamientos.filter(t => t.disponibilidad == 'no asociado'),
          })
        })
      })
    });
  }

  /**
   * Agregar un nuevo tratamiento a una sucursal
   * @param tratamiento tratamiento a asociar
   * @param sucursal sucursal a asociar
   */
  agregarTratamiento(tratamiento: TratamientosGym, sucursal: Sucursal) {
    this.tratamientoModal = tratamiento;
    this.sucursalModal = sucursal;
  }

  /**
   * Asociar el tratamiento
   */
  asociarTratamiento() {
    this.service.postTratamientoSucursal(this.sucursalModal.id, this.tratamientoModal.id).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this.tratamientoModal = new TratamientosGym();
    });

  }

  /**
   * Borra un tratamiento a una sucursal especifica
   * @param tratamiento tratamiento a borrar
   * @param sucursal sucrusal a la cual se le va a borra el tratamientp
   */
  borrarTratamiento(tratamiento: TratamientosGym, sucursal: Sucursal) {
    this.tratamientoModal = tratamiento;
    this.sucursalModal = sucursal;
  }

  /**
   * Desasocia el tratamiento
   * @constructor
   */
  DesacocieTratamiento() {
    this.service.deleteTratamientoSucursal(this.sucursalModal.id, this.tratamientoModal.id).subscribe(() => {
      this.sucursalModal = new Sucursal();
      this.tratamientoModal = new TratamientosGym();
    });
  }



}
