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

  public login(): void{
    this.servicio.loginAdmin(this.empleado.contrasena, this.empleado.email).subscribe(resp => {
      console.log(resp);
      if (resp.length !== 0){
        this.servicio.empleado = resp[0];
        this.servicio.obtenerPuesto(this.servicio.empleado.idPuesto).subscribe(a =>
          this.servicio.puesto = a);
        this.navegation();
      }else {
        alert('Gullipollas');
      }

    });
  }
  public navegation(): void{
    this.router.navigate(['/administrador']);
  }
}
