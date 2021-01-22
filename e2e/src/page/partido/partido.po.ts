import { by, element } from 'protractor';

export class PartidoPage {

  //html listar partidos
  private linkCrearPartidos = element(by.id('linkCrearPartido'));
  private listarPartidos = element.all(by.css('.partidos')).all(by.css('.itemPartido'));

  //html crear partido
  private inputPais1CrearPartido = element(by.id('pais1CrearPartido'));
  private inputPais2CrearPartido = element(by.id('pais2CrearPartido'));
  private inputHoraInicioCrearPartido = element(by.id('horaInicioCrearPartido'));
  private linkAceptarCrearPartido = element(by.id('linkAceptarCrearPartido'));

  //html editar partido
  private inputPais1EditarPartido = element(by.id('pais1EditarPartido'));
  private inputPais2EditarPartido = element(by.id('pais2EditarPartido'));
  private inputHoraInicioEditarPartido = element(by.id('horaInicioEditarPartido'));
  private inputHoraFinEditarPartido = element(by.id('horaFinEditarPartido'));
  private inputPuntajePais1EditarPartido = element(by.id('puntajePais1EditarPartido'));
  private inputPuntajePais2EditarPartido = element(by.id('puntajePais2EditarPartido'));
  private inputIdPartidoEditarPartido = element(by.id('idPartidoEditarPartido'));
  private linkAceptarEditarPartido = element(by.id('linkAceptarEditarPartido'));

  //html borrar partido
  private inputPais1EliminarPartido = element(by.id('pais1EliminarPartido'));
  private inputPais2EliminarPartido = element(by.id('pais2EliminarPartido'));
  private inputHoraInicioEliminarPartido = element(by.id('horaInicioEliminarPartido'));
  private inputIdPartidoEliminarPartido = element(by.id('idPartidoEliminarPartido'));
  private linkAceptarEliminarPartido = element(by.id('linkAceptarEliminarPartido'));

  //funciones html listar partidos
  async clickLinkCrearPartidos(){
    await this.linkCrearPartidos.click();  
  }

  async clickLinkEditarPartido(id:string){
    await (element(by.id('linkEditarPartido'+id))).click();
  }

  async clickLinkEliminarPartido(id:string){
    await (element(by.id('linkEliminarPartido'+id))).click();
  }

  async clickLinkResultadosPartido(id:string){
    await (element(by.id('linkResultadosPartido'+id))).click();
  }


  //funciones html crear partidos
  async ingresarPais1CrearPartido(pais1){
    await this.inputPais1CrearPartido.sendKeys(pais1);
  }

  async ingresarPais2CrearPartido(pais2){
    await this.inputPais2CrearPartido.sendKeys(pais2);
  }

  async ingresarHoraInicioCrearPartido(horaInicio){
    await this.inputHoraInicioCrearPartido.sendKeys(horaInicio);
  }

  async clickLinkAceptarCrearPartido(){
    await this.linkAceptarCrearPartido.click();  
  }


  //funciones html editar partidos
  async ingresarPais1EditarPartido(pais1){
    await this.inputPais1EditarPartido.clear();
    await this.inputPais1EditarPartido.sendKeys(pais1);	
  }
  
  async ingresarPais2EditarPartido(pais2){
    await this.inputPais2EditarPartido.clear();
    await this.inputPais2EditarPartido.sendKeys(pais2);	
  }
  
  async ingresarHoraInicioEditarPartido(horaInicio){
    await this.inputHoraInicioEditarPartido.clear();
    await this.inputHoraInicioEditarPartido.sendKeys(horaInicio);	
  }
  
  async ingresarHoraFinEditarPartido(horaFin){
    await this.inputHoraFinEditarPartido.clear();
    await this.inputHoraFinEditarPartido.sendKeys(horaFin);	
  }
  
  async ingresarPuntajePais1EditarPartido(puntajePais1){
    await this.inputPuntajePais1EditarPartido.clear();
    await this.inputPuntajePais1EditarPartido.sendKeys(puntajePais1);	
  }
  
  async ingresarPuntajePais2EditarPartido(puntajePais2){
    await this.inputPuntajePais2EditarPartido.clear();
    await this.inputPuntajePais2EditarPartido.sendKeys(puntajePais2);	
  }
  
  async ingresarIdPartidoEditarPartido(idPartido){
    await this.inputIdPartidoEditarPartido.clear();
    await this.inputIdPartidoEditarPartido.sendKeys(idPartido);	
  }

  async clickLinkAceptarEditarPartido(){
    await this.linkAceptarEditarPartido.click()
  }


  //html borrar partido
  async ingresarPais1EliminarPartido(pais1){
    await this.inputPais1EliminarPartido.sendKeys(pais1);
  }
  
  async ingresarPais2EliminarPartido(pais2){
    await this.inputPais2EliminarPartido.sendKeys(pais2);
  }
  
  async ingresarHoraInicioEliminarPartido(horaInicio){
    await this.inputHoraInicioEliminarPartido.sendKeys(horaInicio);
  }
  
  async ingresarIdPartidoEliminarPartido(idPartido){
    await this.inputIdPartidoEliminarPartido.sendKeys(idPartido);
  }

  async clickLinkAceptarEliminarPartido(){
    await this.linkAceptarEliminarPartido.click();  
  }


  //validaciones
  async contarPartidos(){
    return await this.listarPartidos.count();
  }

  async validarPartidoPais1(id:string){
    let itemPartidoPais1 = element(by.id('itemPartidoPais1'+id));
    return await itemPartidoPais1.getText();
  }

  async validarPartidoPais2(id:string){
    let itemPartidoPais2 = element(by.id('itemPartidoPais2'+id));
    return await itemPartidoPais2.getText();
  }

  async validarPartidoHoraInicio(id:string){
    let itemPartidoHoraInicio = element(by.id('itemPartidoHoraInicio'+id));
    return await itemPartidoHoraInicio.getText();
  }

  async validarPartidoHoraFin(id:string){
    let itemPartidoHoraFin = element(by.id('itemPartidoHoraFin'+id));
    return await itemPartidoHoraFin.getText();
  }

  async validarPartidoPuntajePais1(id:string){
    let itemPartidoPuntajePais1 = element(by.id('itemPartidoPuntajePais1'+id));
    return await itemPartidoPuntajePais1.getText();
  }

  async validarPartidoPuntajePais2(id:string){
    let itemPartidoPuntajePais2 = element(by.id('itemPartidoPuntajePais2'+id));
    return await itemPartidoPuntajePais2.getText();
  }
  
}