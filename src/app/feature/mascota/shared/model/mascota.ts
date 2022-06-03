export class Mascota {
    id: Number;
    codigoMascota: String;
    nombre: String;
    tipoMascota: Number;
    especie: String;

    constructor(id: Number, codigoMascota: String, nombre: String, tipoMascota: Number, especie: String) {
        this.id = id;
        this.codigoMascota = codigoMascota;
        this.nombre = nombre;
        this.tipoMascota = tipoMascota;
        this.especie = especie;
    }
}