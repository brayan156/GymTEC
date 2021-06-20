import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/Clases/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private service: ClienteService, private router: Router) {
    this.cliente = new Cliente();
  }

  cliente: Cliente;

  ngOnInit(): void {
  }

  register() {
    console.log(this.cliente)
    this.service.register(this.cliente).subscribe(() => { alert("Sus datos han sido registrados."); this.router.navigateByUrl(""); });
  }


}


