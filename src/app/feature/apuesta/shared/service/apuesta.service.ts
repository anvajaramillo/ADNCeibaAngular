import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Apuesta } from '../model/apuesta';

@Injectable({
  providedIn: 'root'
})
export class ApuestaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Apuesta[]>(`${environment.endpoint}/apuestas`, this.http.optsName('consultar apuestas'));
  }

  public consultarApuesta(id:number) {
    return this.http.doGet<Apuesta>(`${environment.endpoint}/apuestas/consultarApuesta/${id}`, this.http.optsName('consultar apuesta'));
  }

  public consultarResultados(idPartido:number){
    return this.http.doGet<Apuesta[]>(`${environment.endpoint}/apuestas/consultarResultados/${idPartido}`, this.http.optsName('consultar resultados'));
  }

  public editar(apuesta: Apuesta){
    return this.http.doPut<Apuesta, boolean>(`${environment.endpoint}/apuestas/${apuesta.id}`, apuesta, this.http.optsName('editar apuesta'));
  }

  public eliminar(apuesta: Apuesta){
    return this.http.doDelete<boolean>(`${environment.endpoint}/apuestas/${apuesta.id}`, this.http.optsName('eliminar apuesta'));
  }

  public crear(apuesta: Apuesta){
    return this.http.doPost<Apuesta, boolean>(`${environment.endpoint}/apuestas`, apuesta, this.http.optsName('crear apuesta'));
  }

}
