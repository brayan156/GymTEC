export class Cliente {
  constructor(cedula: number, peso: number, imc: number, contrasena: string, email: string, edad: number, nombre: string,
              distrito: string, canton: string, provinvia: string, primerApellido: string, segudoApellido: string, naciemiento: number) {
    this.cedula = cedula;
    this.peso = peso;
    this.imc = imc;
    this.contrasena = contrasena;
    this.email = email;
    this.edad = edad;
    this.nombre = nombre;
    this.distrito = distrito;
    this.canton = canton;
    this.provinvia = provinvia;
    this.primerApellido = primerApellido;
    this.segudoApellido = segudoApellido;
    this.naciemiento = naciemiento;
  }
  cedula: number;
  peso: number;
  imc: number;
  contrasena: string;
  email: string;
  edad: number;
  nombre: string;
  distrito: string;
  canton: string;
  provinvia: string;
  primerApellido: string;
  segudoApellido: string;
  naciemiento: number;
}
