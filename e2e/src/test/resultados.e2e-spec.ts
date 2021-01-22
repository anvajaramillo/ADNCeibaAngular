import { browser } from "protractor";
import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { PartidoPage } from "../page/partido/partido.po";
import { ResultadosPage } from "../page/resultados/resultados.po";

describe('workspace-project Resultados', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let partido: PartidoPage;
  let resultados: ResultadosPage;

  beforeEach( ()=> {
    page = new AppPage();
    navBar = new NavbarPage();
    partido = new PartidoPage();
    resultados = new ResultadosPage();
  })

  it('A Consultar resultados', () => {
    const id = "1";
    const horaFin = "2021-01-01 00:00:00";
    const puntajePais1 = "1";
    const puntajePais2 = "2";
    const pais1 = "Colombia";

    //finalizar partido
    page.navigateTo();
    navBar.clickBotonPartido();
    partido.clickLinkEditarPartido(id);
    browser.sleep(5000)
    partido.ingresarHoraFinEditarPartido(horaFin);
    partido.ingresarPuntajePais1EditarPartido(puntajePais1);
    partido.ingresarPuntajePais2EditarPartido(puntajePais2);
    partido.ingresarPais1EditarPartido(pais1);
    browser.sleep(5000)
    partido.clickLinkAceptarEditarPartido();

    page.navigateTo();
    navBar.clickBotonPartido();
    partido.clickLinkResultadosPartido(id);

    expect(1).toBe(resultados.contarResultados());
  })

})