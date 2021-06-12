export class Empleado {
  constructor(cedula: number, email: string, distrito: string, canton: string, provinvia: string, nombre: string, primerApellido: string, segudoApellido: string, salario: number, imagen: number, idSucursal: number, idPuesto: number, idPlanilla: number) {
    this.cedula = cedula;
    this.email = email;
    this.distrito = distrito;
    this.canton = canton;
    this.provinvia = provinvia;
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segudoApellido = segudoApellido;
    this.salario = salario;
    this.imagen = imagen;
    this.idSucursal = idSucursal;
    this.idPuesto = idPuesto;
    this.idPlanilla = idPlanilla;
  }
  cedula: number;
  email: string;
  distrito: string;
  canton: string;
  provinvia: string;
  nombre: string;
  primerApellido: string;
  segudoApellido: string;
  salario: number;
  imagen: number;
  idSucursal: number;
  idPuesto: number;
  idPlanilla: number;
}
