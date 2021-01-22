import { by, element } from 'protractor';

export class ResultadosPage {

  //html consultar resultados
  private listarResultados = element.all(by.css('.resultados')).all(by.css('.itemResultado'));

  //validaciones
  async contarResultados(){
    return await this.listarResultados.count();
  }

}