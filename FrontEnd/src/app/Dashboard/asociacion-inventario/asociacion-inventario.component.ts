import { Component, OnInit } from '@angular/core';
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
  misTratamientos: TratamientosGym[] = [];
  superLista:object[] = [];


  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
      lista.forEach(sucursal => {
        this.service.getTratamientosGym(sucursal.id).subscribe(tratamiento => {
          this.superLista.push({
            Sucursal: sucursal,
            tratamientos: tratamiento
          })
        })
      })
    });
  }





}
