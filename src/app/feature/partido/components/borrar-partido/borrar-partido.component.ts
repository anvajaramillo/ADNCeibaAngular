import { Component, OnInit } from '@angular/core';
import { PartidoService } from 'src/app/feature/partido/shared/service/partido.service';
import { Partido } from 'src/app/feature/partido/shared/model/partido';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-partido',
  templateUrl: './borrar-partido.component.html',
  styleUrls: ['./borrar-partido.component.css']
})
export class BorrarPartidoComponent implements OnInit {

  public partido: Partido = new Partido();

  constructor(protected partidoService:  PartidoService, protected router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPartido();
  }

  cargarPartido(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.partidoService.consultarPartido(id).subscribe( partidoRespose => this.partido = partidoRespose)
        }
      }
    )
  }

  public delete(): void{
    this.partidoService.eliminar(this.partido).subscribe(
      a => {
        this.router.navigate(['/partido/listar']),
        swal.fire('Partido eliminado', `Partido ${this.partido.pais1} vs ${this.partido.pais2} eliminado con éxito`, 'success')
      }
    )
  }

}
