export class Planilla {
  constructor(id: string, tipo: string, descripcion: string) {
    this.id = id;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
  id: string;
  tipo: string;
  descripcion: string;
}
