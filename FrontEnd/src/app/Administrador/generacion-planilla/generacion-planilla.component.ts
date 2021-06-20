import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../servicios.service';
import {Sucursal} from '../../Clases/sucursal';
import {Planilla} from '../../Clases/planilla';
import {GenerarPlanilla} from '../../Clases/generar_planilla';

@Component({
  selector: 'app-generacion-planilla',
  templateUrl: './generacion-planilla.component.html',
  styleUrls: ['./generacion-planilla.component.css']
})
export class GeneracionPlanillaComponent implements OnInit {
  constructor(private service: ServiciosService) { }

  listaSucursales: Sucursal[] = [];
  sucursal: Sucursal = new Sucursal();
  mostrarHTML: GenerarPlanilla[] = [];


  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.listaSucursales = lista;
      console.log(lista);
    });
  }

  public generarPlanilla(id: number): void{
    this.service.generarPlanilla(id).subscribe(lista =>
    this.mostrarHTML = lista);
  }

  public generarPDF(): void{

  }

}
