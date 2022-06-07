import { by, element, ElementFinder } from "protractor";

export class CrearTratamientoPage {
    private inputCodigoTratamiento = element(by.id('codigoTratamiento'));
    private selectMascota = element(by.id('idMascota'));
    private inputFechaInicio = element(by.id('fechaInicio'));
    private inputFechaFin = element(by.id('fechaFin'));
    private selectServicio = element(by.id('idServicio'));
    private inputTipoTratamiento = element(by.id('tipoTratamiento'));
    private selectCupon = element(by.id('idCupon'));
    private botonRegistrarTratamiento = element(by.id('botonRegistrarTratamiento'));
    private botonVolver = element(by.id('botonVolver'));
    private formRegistrarTratamiento = element(by.id('formRegistrarTratamiento'))

    async formularioRegistrarTratamiento() {
        await this.formRegistrarTratamiento.clear();
    }

    async ingresarCodigoTratamiento(codigoTratamiento) {
        await this.inputCodigoTratamiento.sendKeys(codigoTratamiento);
    }

    async seleccionarMascota(index: number) {
        await this.seleccionarOpcion(this.selectMascota, index);
    }

    async ingresarFechaInicio(fechaInicio) {
        await this.inputFechaInicio.sendKeys(fechaInicio);
    }

    async ingresarFechaFin(fechaFin) {
        await this.inputFechaFin.sendKeys(fechaFin);
    }

    async seleccionarServicio(descripcion) {
        await this.selectServicio.sendKeys(descripcion);
    }

    async ingresarTipoTratamiento(tipoTratamiento) {
        await this.inputTipoTratamiento.sendKeys(tipoTratamiento);
    }

    async seleccionarCupon(index) {
        await this.seleccionarOpcion(this.selectCupon, index);
    }

    async clickBotonRegistrarTratamiento() {
        await this.botonRegistrarTratamiento.click();
    }

    async clickBotonVolver() {
        await this.botonVolver.click();
    }

    async seleccionarOpcion(elemento: ElementFinder, index: number) {
        await elemento.click();
        await element.all(by.tagName('option')).get(index).click();
    }
}