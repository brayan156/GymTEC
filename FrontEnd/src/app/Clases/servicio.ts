export class Servicio {
  constructor(id: string, nombre: string, descripcion: string, imagen: string, idSucursal: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.idSucursal = idSucursal;
  }
 id: string;
 nombre: string;
 descripcion: string;
 imagen: string;
 idSucursal: string;
}
