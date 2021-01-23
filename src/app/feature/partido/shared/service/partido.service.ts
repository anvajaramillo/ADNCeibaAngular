import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Partido } from '../model/partido'; 

@Injectable()
export class PartidoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Partido[]>(`${environment.endpoint}/partidos`, this.http.optsName('consultar partidos'));
  }

  public consultarPartido(id:number) {
    return this.http.doGet<Partido>(`${environment.endpoint}/partidos/consultarPartido/${id}`, this.http.optsName('consultar partido'));
  }

  public editar(partido: Partido){
    return this.http.doPut<Partido, boolean>(`${environment.endpoint}/partidos/${partido.idPartido}`, partido, this.http.optsName('editar partido'));
  }

  public eliminar(partido: Partido){
    return this.http.doDelete<boolean>(`${environment.endpoint}/partidos/${partido.idPartido}`, this.http.optsName('eliminar partido'));
  }

  public crear(partido: Partido){
    return this.http.doPost<Partido, boolean>(`${environment.endpoint}/partidos`, partido, this.http.optsName('crear partido'));
  }

}
