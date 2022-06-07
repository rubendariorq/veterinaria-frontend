import { by, element } from "protractor";

export class CrearMascotaPage {
    private inputCodigoMascota = element(by.id('codigoMascota'));
    private inputNombre = element(by.id('nombre'));
    private inputTipoMascota = element(by.id('tipoMascota'));
    private botonRegistrarrMascota = element(by.id('btnRegistrarMascota'));
    private botonVolver = element(by.id('btnVolver'));
    private formularioCrearMascota = element(by.id('formRegistrarMascota'))

    async formularioRegistrarMascota() {
        await this.formularioCrearMascota.clear();
    }

    async ingresarCodigoMascota(codigoMascota) {
        await this.inputCodigoMascota.sendKeys(codigoMascota);
    }

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarTipoMascota(tipoMascota) {
        await this.inputTipoMascota.sendKeys(tipoMascota);
    }

    async clickBotonRegistarMascota() {
        await this.botonRegistrarrMascota.click();
    }

    async clickBotonVolver() {
        await this.botonVolver.click();
    }
}