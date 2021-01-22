import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/div[1]/li/a'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/div[2]/li/a'));
    linkPartido = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/div[3]/li/a'));
    linkApuesta = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/div[4]/li/a'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonPartido() {
        await this.linkPartido.click();
    }

    async clickBotonApuesta() {
        await this.linkApuesta.click();
    }
}
