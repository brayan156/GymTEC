import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Clases/cliente';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() {
    this.cliente = new Cliente();
   }

  cliente: Cliente;

  ngOnInit(): void {
  }

  register() {
    console.log(this.cliente)
  }

}
