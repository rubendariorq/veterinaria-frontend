import { by, element } from "protractor";

export class ListarMascotaPage {
    private linkCrearMascota = element(by.id('linkCrearMascota'));
    private linkListarMascota = element(by.id('linkListarMascota'));
    private listaMascotas = element.all(by.css('tbody tr'));

    async clickBotonCrearMascota() {
        await this.linkCrearMascota.click();
    }

    async clickBotonListarMascota() {
        await this.linkListarMascota.click();
    }

    async contarMascotas() {
        return this.listaMascotas.count();
    }
}