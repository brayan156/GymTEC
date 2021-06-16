import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Empleado} from '../../Clases/empleado';
import {ServiciosService} from '../../servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router , private servicio: ServiciosService ) { }
  // @ts-ignore
  empleado: Empleado = new Empleado();

  ngOnInit(): void {
  }

  public navegation(): void{
    this.router.navigate(['/administrador']);
  }
}
