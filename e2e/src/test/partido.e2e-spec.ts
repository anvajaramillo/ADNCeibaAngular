import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { PartidoPage } from "../page/partido/partido.po";
import { browser } from 'protractor';

describe('workspace-project Partido', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let partido: PartidoPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    partido = new PartidoPage();
  });

  it('A Listar partidos', () => {
    page.navigateTo();
    navBar.clickBotonPartido();

    expect(1).toBe(partido.contarPartidos());
  });

  it('B Crear partido', () => {
    const pais1 = "Ecuador";
    const pais2 = "Chile";
    const horaInicio = "3040-01-01 00:00:00";

    page.navigateTo();
    navBar.clickBotonPartido();
    partido.clickLinkCrearPartidos();
    partido.ingresarPais1CrearPartido(pais1);
    partido.ingresarPais2CrearPartido(pais2);
    partido.ingresarHoraInicioCrearPartido(horaInicio);
    partido.clickLinkAceptarCrearPartido();
    page.navigateTo();
    navBar.clickBotonPartido();

    expect(2).toBe(partido.contarPartidos());
  });

  it('C Editar partido', async () => {
    const id = "2";
    const pais1 = "Mexico";
    const pais2 = "Alemania";

    page.navigateTo();
    navBar.clickBotonPartido();
    partido.clickLinkEditarPartido(id);
    browser.sleep(5000)
    partido.ingresarPais1EditarPartido(pais1);
    partido.ingresarPais2EditarPartido(pais2);
    browser.sleep(5000)
    partido.clickLinkAceptarEditarPartido();
    page.navigateTo();
    navBar.clickBotonPartido();

    expect(partido.validarPartidoPais1(id)).toBe(pais1);
    expect(partido.validarPartidoPais2(id)).toBe(pais2);
  });

  it('D Eliminar partido', async () => {
    const id = "2";

    page.navigateTo();
    navBar.clickBotonPartido();
    partido.clickLinkEliminarPartido(id);
    browser.sleep(5000)
    partido.clickLinkAceptarEliminarPartido();
    browser.sleep(5000)
    page.navigateTo();
    navBar.clickBotonPartido();

    expect(1).toBe(partido.contarPartidos());
  });

});