export class Producto {
  constructor(codigoBarras: number, nombre: string, costo: number, descripcion: string, imagen: string) {
    this.codigoBarras = codigoBarras;
    this.nombre = nombre;
    this.costo = costo;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
  codigoBarras: number;
  nombre: string;
  costo: number;
  descripcion: string;
  imagen: string;
}
