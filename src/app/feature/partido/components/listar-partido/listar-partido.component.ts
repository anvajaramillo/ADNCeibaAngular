import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PartidoService } from 'src/app/feature/partido/shared/service/partido.service';
import { Partido } from 'src/app/feature/partido/shared/model/partido';

@Component({
  selector: 'app-listar-partido',
  templateUrl: './listar-partido.component.html',
  styleUrls: ['./listar-partido.component.css']
})
export class ListarPartidoComponent implements OnInit {

  public listaPartidos: Observable<Partido[]>;

  constructor(protected partidoService:  PartidoService) { }

  ngOnInit(): void {
    this.listaPartidos = this.partidoService.consultar();
  }

}
