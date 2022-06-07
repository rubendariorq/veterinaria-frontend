import { by, element } from 'protractor';

export class NavbarPage {
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkMascota = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkTratamiento = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonMascotas() {
        await this.linkMascota.click();
    }

    async clickBotonTratamientos() {
        await this.linkTratamiento.click();
    }
}
