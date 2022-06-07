import { by, element } from "protractor";

export class ListarTratamientoPage {
    private linkCrearTratamiento = element(by.id('linkCrearTratamiento'));
    private linkListarTratamiento = element(by.id('linkListarTratamiento'));
    private listaTratamientos = element.all(by.css('tbody tr'));
    private inputCodigoTratamientoModal = element(by.id('codigoTratamientoModal'))

    async clickBotonCrearTratamiento() {
        await this.linkCrearTratamiento.click();
    }

    async clickBotonListarTratamiento() {
        await this.linkListarTratamiento.click();
    }

    async contarTratamientos() {
        return this.listaTratamientos.count();
    }

    async clickBotonEliminarTratamiento(index) {
        await element(by.id('btnEliminarTratamiento' + index)).click();
    }

    async clickBotonConsultarTratamiento(index) {
        await element(by.id('btnConsultarTratamiento' + index)).click();
    }

    async formularioConsultaTratamientoDiligenciado() {
        return (this.inputCodigoTratamientoModal != null)
    }
}