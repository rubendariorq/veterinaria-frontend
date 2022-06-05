export class Tratamiento {
  id: Number;
  codigoTratamiento: String;
  idMascota: Number;
  fechaInicio: String;
  fechaFin: String;
  idServicio: Number;
  tipoTratamiento: Number;
  idCupon: Number;
  nombreTipoTratamiento: String;

  constructor(id: Number, codigoTratamiento: String, idMascota: Number, fechaInicio: String, fechaFin: String, idServicio: Number, tipoTratamiento: Number, idCupon: Number,
    nombreTipoTratamiento: String) {
    this.id = id;
    this.codigoTratamiento = codigoTratamiento;
    this.idMascota = idMascota;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.idServicio = idServicio;
    this.tipoTratamiento = tipoTratamiento;
    this.idCupon = idCupon;
    this.nombreTipoTratamiento = nombreTipoTratamiento;
  } 
}