import { Component, OnInit } from '@angular/core';
import {Puesto} from '../../Clases/puesto';
import {ServiciosService} from '../../servicios.service';
import {Planilla} from '../../Clases/planilla';
import {Sucursal} from '../../Clases/sucursal';

@Component({
  selector: 'app-gestion-tipo-planilla',
  templateUrl: './gestion-tipo-planilla.component.html',
  styleUrls: ['./gestion-tipo-planilla.component.css']
})
export class GestionTipoPlanillaComponent implements OnInit {

  planilla: Planilla = new Planilla();
  listaPlanilla: Planilla[] = [];
  planillaActual: Planilla = new Planilla();

  constructor(private service: ServiciosService) { }


  ngOnInit(): void {
    this.service.obtenerListasPlanillas().subscribe(lista => {
      this.listaPlanilla = lista;
      console.log(this.listaPlanilla);
    });
  }
  public crearPlanilla(planilla: Planilla): void{
    this.service.agregarPlanilla(planilla).subscribe(respuesta =>
      console.log(respuesta));
    this.ngOnInit();
  }

  public editarPlanilla(planilla: Planilla): void{
    this.service.editarPlanilla(planilla.id , planilla).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public eliminarPlanilla(planilla: Planilla): void{
    this.service.eliminarPlanilla(planilla.id).subscribe(a =>
      console.log(a));
    this.ngOnInit();
  }

  public obtenerInformacionItem(planilla: Planilla): void{
    this.planillaActual = planilla;
  }
}
