import { by, element } from 'protractor';

export class ApuestaPage {

  //html listar apuestas
  private linkCrearApuesta = element(by.id('linkCrearApuesta'));
  private listarApuestas = element.all(by.css('.apuestas')).all(by.css('.itemApuesta'));

  //html crear apuesta
  private inputNombreCrearApuesta = element(by.id('nombreCrearApuesta'));
  private inputCedulaCrearApuesta = element(by.id('cedulaCrearApuesta'));
  private inputDineroCrearApuesta = element(by.id('dineroCrearApuesta'));
  private inputPuntajePais1CrearApuesta = element(by.id('puntajePais1CrearApuesta'));
  private inputPuntajePais2CrearApuesta = element(by.id('puntajePais2CrearApuesta'));
  private inputPais1CrearApuesta = element(by.id('pais1CrearApuesta'));
  private inputPais2CrearApuesta = element(by.id('pais2CrearApuesta'));
  private inputHoraInicioCrearApuesta = element(by.id('horaInicioCrearApuesta'));
  private linkAceptarCrearApuesta = element(by.id('linkAceptarCrearApuesta'));

  //html editar apuesta
  private inputNombreEditarApuesta = element(by.id('nombreEditarApuesta'));
  private inputCedulaEditarApuesta = element(by.id('cedulaEditarApuesta'));
  private inputDineroEditarApuesta = element(by.id('dineroEditarApuesta'));
  private inputPuntajePais1EditarApuesta = element(by.id('puntajePais1EditarApuesta'));
  private inputPuntajePais2EditarApuesta = element(by.id('puntajePais2EditarApuesta'));
  private inputPais1EditarApuesta = element(by.id('pais1EditarApuesta'));
  private inputPais2EditarApuesta = element(by.id('pais2EditarApuesta'));
  private inputHoraInicioEditarApuesta = element(by.id('horaInicioEditarApuesta'));
  private inputIdEditarApuesta = element(by.id('idEditarApuesta'));
  private linkAceptarEditarApuesta = element(by.id('linkAceptarEditarApuesta'));

  //html eliminar apuesta
  private inputNombreEliminarApuesta = element(by.id('nombreEliminarApuesta'));
  private inputCedulaEliminarApuesta = element(by.id('cedulaEliminarApuesta'));
  private inputPais1EliminarApuesta = element(by.id('pais1EliminarApuesta'));
  private inputPais2EliminarApuesta = element(by.id('pais2EliminarApuesta'));
  private inputHoraInicioEliminarApuesta = element(by.id('horaInicioEliminarApuesta'));
  private inputIdEliminarApuesta = element(by.id('idEliminarApuesta'));
  private linkAceptarEliminarApuesta = element(by.id('linkAceptarEliminarApuesta'));

  //funciones html listar apuestas
  async clickLinkCrearApuesta(){
    await this.linkCrearApuesta.click();
  }

  async clickLinkEditarApuesta(id:string){
    await (element(by.id('linkEditarApuesta'+id))).click();
  }
  
  async clickLinkEliminarApuesta(id:string){
    await (element(by.id('linkEliminarApuesta'+id))).click();
  }


  //funciones html crear apuestas
  async ingresarNombreCrearApuesta(nombreCrearApuesta){
    await this.inputNombreCrearApuesta.sendKeys(nombreCrearApuesta);	
  }
  
  async ingresarCedulaCrearApuesta(cedulaCrearApuesta){
    await this.inputCedulaCrearApuesta.sendKeys(cedulaCrearApuesta);	
  }
  
  async ingresarDineroCrearApuesta(dineroCrearApuesta){
    await this.inputDineroCrearApuesta.sendKeys(dineroCrearApuesta);	
  }
  
  async ingresarPuntajePais1CrearApuesta(puntajePais1CrearApuesta){
    await this.inputPuntajePais1CrearApuesta.sendKeys(puntajePais1CrearApuesta);	
  }
  
  async ingresarPuntajePais2CrearApuesta(puntajePais2CrearApuesta){
    await this.inputPuntajePais2CrearApuesta.sendKeys(puntajePais2CrearApuesta);	
  }
  
  async ingresarPais1CrearApuesta(pais1CrearApuesta){
    await this.inputPais1CrearApuesta.sendKeys(pais1CrearApuesta);	
  }
  
  async ingresarPais2CrearApuesta(pais2CrearApuesta){
    await this.inputPais2CrearApuesta.sendKeys(pais2CrearApuesta);	
  }
  
  async ingresarHoraInicioCrearApuesta(horaInicioCrearApuesta){
    await this.inputHoraInicioCrearApuesta.sendKeys(horaInicioCrearApuesta);	
  }

  async clickLinkAceptarCrearApuesta(){
    await this.linkAceptarCrearApuesta.click();
  }


  //funciones html editar apuestas
  async ingresarNombreEditarApuesta(nombreEditarApuesta){
    await this.inputNombreEditarApuesta.clear();
    await this.inputNombreEditarApuesta.sendKeys(nombreEditarApuesta);	
  }
  
  async ingresarCedulaEditarApuesta(cedulaEditarApuesta){
    await this.inputCedulaEditarApuesta.clear();
    await this.inputCedulaEditarApuesta.sendKeys(cedulaEditarApuesta);	
  }
  
  async ingresarDineroEditarApuesta(dineroEditarApuesta){
    await this.inputDineroEditarApuesta.clear();
    await this.inputDineroEditarApuesta.sendKeys(dineroEditarApuesta);	
  }
  
  async ingresarPuntajePais1EditarApuesta(puntajePais1EditarApuesta){
    await this.inputPuntajePais1EditarApuesta.clear();
    await this.inputPuntajePais1EditarApuesta.sendKeys(puntajePais1EditarApuesta);	
  }
  
  async ingresarPuntajePais2EditarApuesta(puntajePais2EditarApuesta){
    await this.inputPuntajePais2EditarApuesta.clear();
    await this.inputPuntajePais2EditarApuesta.sendKeys(puntajePais2EditarApuesta);	
  }
  
  async ingresarPais1EditarApuesta(pais1EditarApuesta){
    await this.inputPais1EditarApuesta.clear();
    await this.inputPais1EditarApuesta.sendKeys(pais1EditarApuesta);	
  }
  
  async ingresarPais2EditarApuesta(pais2EditarApuesta){
    await this.inputPais2EditarApuesta.clear();
    await this.inputPais2EditarApuesta.sendKeys(pais2EditarApuesta);	
  }
  
  async ingresarHoraInicioEditarApuesta(horaInicioEditarApuesta){
    await this.inputHoraInicioEditarApuesta.clear();
    await this.inputHoraInicioEditarApuesta.sendKeys(horaInicioEditarApuesta);	
  }
  
  async ingresarIdEditarApuesta(idEditarApuesta){
    await this.inputIdEditarApuesta.clear();
    await this.inputIdEditarApuesta.sendKeys(idEditarApuesta);	
  }

  async clickLinkAceptarEditarApuesta(){
    await this.linkAceptarEditarApuesta.click();
  }


  //funciones html borrar apuesta
  async ingresarNombreEliminarApuesta(nombreEliminarApuesta){
    await this.inputNombreEliminarApuesta.sendKeys(nombreEliminarApuesta);	
  }
  
  async ingresarCedulaEliminarApuesta(cedulaEliminarApuesta){
    await this.inputCedulaEliminarApuesta.sendKeys(cedulaEliminarApuesta);	
  }
  
  async ingresarPais1EliminarApuesta(pais1EliminarApuesta){
    await this.inputPais1EliminarApuesta.sendKeys(pais1EliminarApuesta);	
  }
  
  async ingresarPais2EliminarApuesta(pais2EliminarApuesta){
    await this.inputPais2EliminarApuesta.sendKeys(pais2EliminarApuesta);	
  }
  
  async ingresarHoraInicioEliminarApuesta(horaInicioEliminarApuesta){
    await this.inputHoraInicioEliminarApuesta.sendKeys(horaInicioEliminarApuesta);	
  }
  
  async ingresarIdEliminarApuesta(idEliminarApuesta){
    await this.inputIdEliminarApuesta.sendKeys(idEliminarApuesta);	
  }

  async clickLinkAceptarEliminarApuesta(){
    await this.linkAceptarEliminarApuesta.click();
  }

  //validaciones
  async contarApuestas(){
    return await this.listarApuestas.count();
  }

  async validarItemApuestaNombre(id:string){
    let itemApuestaNombre = element(by.id('itemApuestaNombre'+id));
    return await itemApuestaNombre.getText();
  }
  
  async validarItemApuestaCedula(id:string){
    let itemApuestaCedula = element(by.id('itemApuestaCedula'+id));
    return await itemApuestaCedula.getText();
  }
  
  async validarItemApuestaDinero(id:string){
    let itemApuestaDinero = element(by.id('itemApuestaDinero'+id));
    return await itemApuestaDinero.getText();
  }
  
  async validarItemApuestaPuntajePais1(id:string){
    let itemApuestaPuntajePais1 = element(by.id('itemApuestaPuntajePais1'+id));
    return await itemApuestaPuntajePais1.getText();
  }
  
  async validarItemApuestaPuntajePais2(id:string){
    let itemApuestaPuntajePais2 = element(by.id('itemApuestaPuntajePais2'+id));
    return await itemApuestaPuntajePais2.getText();
  }
  
  async validarItemApuestaDineroGanado(id:string){
    let itemApuestaDineroGanado = element(by.id('itemApuestaDineroGanado'+id));
    return await itemApuestaDineroGanado.getText();
  }
  
  async validarItemApuestaPartidoPais1(id:string){
    let itemApuestaPartidoPais1 = element(by.id('itemApuestaPartidoPais1'+id));
    return await itemApuestaPartidoPais1.getText();
  }
  
  async validarItemApuestaPartidoPais2(id:string){
    let itemApuestaPartidoPais2 = element(by.id('itemApuestaPartidoPais2'+id));
    return await itemApuestaPartidoPais2.getText();
  }
  
  async validarItemApuestaPartidoHoraInicio(id:string){
    let itemApuestaPartidoHoraInicio = element(by.id('itemApuestaPartidoHoraInicio'+id));
    return await itemApuestaPartidoHoraInicio.getText();
  }


}