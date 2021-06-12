export class Clase {
  // tslint:disable-next-line:max-line-length
  constructor(imagen: string, horaFin: number, horaInicio: number, fecha: string, capacidad: number, id: string, idServicio: string, idEmpleado: string) {
    this.imagen = imagen;
    this.horaFin = horaFin;
    this.horaInicio = horaInicio;
    this.fecha = fecha;
    this.capacidad = capacidad;
    this.id = id;
    this.idServicio = idServicio;
    this.idEmpleado = idEmpleado;
  }
  imagen: string;
  horaFin: number;
  horaInicio: number;
  fecha: string;
  capacidad: number;
  id: string;
  idServicio: string;
  idEmpleado: string;
}
