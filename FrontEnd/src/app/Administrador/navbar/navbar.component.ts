import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Empleado} from '../../Clases/empleado';
import {ServiciosService} from '../../servicios.service';
import {Puesto} from '../../Clases/puesto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  empleado: Empleado = new Empleado();
  puesto: Puesto = new Puesto();
  constructor(private router: Router, private service: ServiciosService) { }

  ngOnInit(): void {

  }

  /**
   * Navega dentro de la pagina web
   * @param url especifica a que parte de la web se quiere dirigir
   */
  public navigate(url: string): void {
    this.empleado = this.service.empleado;
    this.puesto = this.service.puesto;
    this.router.navigateByUrl('/administrador/'.concat(url));
  }

  /**
   * Vueve al meno de login
   */
  public salrir(): void{
    this.router.navigateByUrl('');
  }
}
