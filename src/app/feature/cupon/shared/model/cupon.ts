export class Cupon {
    codigoCupon: String;
    valorDescuento: Number;
    fechaVigencia: String;
    idMascota: Number

    constructor(codigoCupon: String, valorDescuento: Number, fechaVigencia: String, idMascota: Number) {
        this.codigoCupon = codigoCupon;
        this.valorDescuento = valorDescuento;
        this.fechaVigencia = fechaVigencia;
        this.idMascota = idMascota;
    }
}