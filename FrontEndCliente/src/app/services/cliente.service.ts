import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  Url = 'https://localhost:44328/api/Client';


  constructor(private htpp: HttpClient) {
  }

  login(contrasena: string, correo: string) {
    return this.htpp.get<Cliente[]>(this.Url + correo + '/' + contrasena);
  }

  register(cliente:Cliente) {
    return this.htpp.post(this.Url, cliente);
  }
}
