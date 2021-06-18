import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/Clases/sucursal';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-asociacion-inventario',
  templateUrl: './asociacion-inventario.component.html',
  styleUrls: ['./asociacion-inventario.component.css']
})
export class AsociacionInventarioComponent implements OnInit {

  constructor(private service: ServiciosService) { }

  ListaSucursales: Sucursal[] = [];

  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.ListaSucursales = lista;
      console.log(this.ListaSucursales);
    });
  }




}
