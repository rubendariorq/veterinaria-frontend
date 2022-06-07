import { by, element } from 'protractor';

export class NavbarPage {
    linkMascota = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkTratamiento = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

    async clickBotonMascotas() {
        await this.linkMascota.click();
    }

    async clickBotonTratamientos() {
        await this.linkTratamiento.click();
    }
}
