import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Apuesta } from 'src/app/feature/apuesta/shared/model/apuesta';
import { ApuestaService } from 'src/app/feature/apuesta/shared/service/apuesta.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public listaApuestas: Observable<Apuesta[]>;

  constructor(protected apuestaService: ApuestaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarResultados();
  }

  cargarResultados(){
    this.activatedRoute.params.subscribe(
      params => {
        let idPartido = params['idPartido']
        if(idPartido){
          this.listaApuestas = this.apuestaService.consultarResultados(idPartido);
          console.log(this.listaApuestas);
        }
      }
    )
  }

}
