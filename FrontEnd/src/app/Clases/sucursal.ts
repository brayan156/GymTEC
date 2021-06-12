export class Sucursal {
  // tslint:disable-next-line:max-line-length
  constructor(id: string, imagen: string, telefono: number, horaInicio: number, capacidad: string, nombre: string, fechaApertura: string,
              distrito: string, canton: string, provincia: string, spaActivo: boolean, tiendaActiva: boolean, horaFinal: number) {
    this.id = id;
    this.imagen = imagen;
    this.telefono = telefono;
    this.horaInicio = horaInicio;
    this.capacidad = capacidad;
    this.nombre = nombre;
    this.fechaApertura = fechaApertura;
    this.distrito = distrito;
    this.canton = canton;
    this.provincia = provincia;
    this.spaActivo = spaActivo;
    this.tiendaActiva = tiendaActiva;
    this.horaFinal = horaFinal;
  }
  id: string;
  imagen: string;
  telefono: number;
  horaInicio: number;
  capacidad: string;
  nombre: string;
  fechaApertura: string;
  distrito: string;
  canton: string;
  provincia: string;
  spaActivo: boolean;
  tiendaActiva: boolean;
  horaFinal: number;
}
