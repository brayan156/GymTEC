export class Equipo {
  // @ts-ignore
  constructor(nSerie: number, marca: string, costo: string, imagen: string, idTipoEquipo: string, idSucursal: string) {
    this.nSerie = nSerie;
    this.marca = marca;
    this.costo = costo;
    this.imagen = imagen;
    this.idTipoEquipo = idTipoEquipo;
    this.idSucursal = idSucursal;
  }
  nSerie: number;
  marca: string;
  costo: string;
  imagen: string;
  idTipoEquipo: string;
  idSucursal: string;
}
