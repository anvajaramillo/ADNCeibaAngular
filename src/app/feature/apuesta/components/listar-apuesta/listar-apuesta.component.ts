import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apuesta } from '../../shared/model/apuesta';
import { ApuestaService } from '../../shared/service/apuesta.service';

@Component({
  selector: 'app-listar-apuesta',
  templateUrl: './listar-apuesta.component.html',
  styleUrls: ['./listar-apuesta.component.css']
})
export class ListarApuestaComponent implements OnInit {

  public listaApuestas: Observable<Apuesta[]>;

  constructor(protected apuestaService: ApuestaService) { }

  ngOnInit(): void {
    this.listaApuestas = this.apuestaService.consultar();
  }

}
