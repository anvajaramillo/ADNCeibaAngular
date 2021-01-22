import { browser } from "protractor";
import { AppPage } from "../app.po"
import { ApuestaPage } from "../page/apuesta/apuesta.po";
import { NavbarPage } from "../page/navbar/navbar.po";

describe('workspace-project Apuesta', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let apuesta: ApuestaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    apuesta = new ApuestaPage();
  });

  it('A Listar apuestas', () => {
    page.navigateTo();
    navBar.clickBotonApuesta();

    expect(1).toBe(apuesta.contarApuestas());
  });

  it('B Crear apuesta', () => {

    const nombre = "Angie Jaramillo";
    const cedula = "78963";
    const dineroApostar = "300000";
    const puntajePais1 = "1";
    const puntajePais2 = "1";
    const pais1 = "Colombia";
    const pais2 = "Venezuela";
    const horaInicio = "3020-01-01 00:00:00";

    page.navigateTo();
    navBar.clickBotonApuesta();
    apuesta.clickLinkCrearApuesta();
    apuesta.ingresarCedulaCrearApuesta(cedula);
    apuesta.ingresarDineroCrearApuesta(dineroApostar);
    apuesta.ingresarPuntajePais1CrearApuesta(puntajePais1);
    apuesta.ingresarPuntajePais2CrearApuesta(puntajePais2);
    apuesta.ingresarPais1CrearApuesta(pais1);
    apuesta.ingresarPais2CrearApuesta(pais2);
    apuesta.ingresarHoraInicioCrearApuesta(horaInicio);
    apuesta.ingresarNombreCrearApuesta(nombre);
    apuesta.clickLinkAceptarCrearApuesta();
    page.navigateTo();
    navBar.clickBotonApuesta();

    expect(2).toBe(apuesta.contarApuestas());

  });

  it('C Editar Apuesta', () => {

    const id = "2";
    const dineroApostar = "400000";

    page.navigateTo();
    navBar.clickBotonApuesta();
    apuesta.clickLinkEditarApuesta(id);
    browser.sleep(5000);
    apuesta.ingresarDineroEditarApuesta(dineroApostar);
    browser.sleep(5000);
    apuesta.clickLinkAceptarEditarApuesta();
    page.navigateTo();
    navBar.clickBotonApuesta();

    expect(apuesta.validarItemApuestaDinero(id)).toBe(dineroApostar);

  })

  it('D Eliminar Apuesta', () => {

    const id = "2";

    page.navigateTo();
    navBar.clickBotonApuesta();
    apuesta.clickLinkEliminarApuesta(id);
    browser.sleep(5000);
    apuesta.clickLinkAceptarEliminarApuesta();
    browser.sleep(5000);
    page.navigateTo();
    navBar.clickBotonApuesta();

    expect(1).toBe(apuesta.contarApuestas());

  })

})