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
  /**
   * Construtctor del la vista genertaricon de de palnilla
   * @param service recisive un servicio para hacer las consultas
   */
  constructor(private service: ServiciosService) { }

  listaSucursales: Sucursal[] = [];
  sucursal: Sucursal = new Sucursal();
  mostrarHTML: GenerarPlanilla[] = [];

  /**
   * Incicializa los valores a mostrar
   */
  ngOnInit(): void {
    this.service.obtenerListasSucursal().subscribe(lista => {
      this.listaSucursales = lista;
      console.log(lista);
    });
  }

  /**
   * Llama al Store procedure para generar la planilla y mostrar en pantalla
   * @param id
   */
  public generarPlanilla(id: number): void{
    this.service.generarPlanilla(id).subscribe(lista =>
    this.mostrarHTML = lista);
  }

  public generarPDF(): void{

  }

}
