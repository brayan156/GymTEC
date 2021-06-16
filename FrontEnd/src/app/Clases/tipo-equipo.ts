export class TipoEquipo {
  constructor(id: number, nombre: string, descripcion: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}
