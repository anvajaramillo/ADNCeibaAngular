import { Component, OnInit } from '@angular/core';
import { PartidoService } from 'src/app/feature/partido/shared/service/partido.service';
import { Partido } from 'src/app/feature/partido/shared/model/partido';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar-partido',
  templateUrl: './editar-partido.component.html',
  styleUrls: ['./editar-partido.component.css']
})
export class EditarPartidoComponent implements OnInit {

  public partido: Partido = new Partido();
  public partidoObservable: Observable<Partido>;

  constructor(protected partidoService:  PartidoService, protected router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPartido();
  }

  cargarPartido(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.partidoService.consultarPartido(id).subscribe( 
            partidoRespose => this.partido = partidoRespose
          )
        }
      }
    )
  }

  public update(): void{
    this.partidoService.editar(this.partido).subscribe(
      a => {
        this.router.navigate(['/partido/listar']),
        swal.fire('Partido actualizado', `Partido ${this.partido.pais1} vs ${this.partido.pais2} actualizado con éxito`, 'success')
      }
    )
  }


}
