import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apuesta } from '../../shared/model/apuesta';
import { ApuestaService } from '../../shared/service/apuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-apuesta',
  templateUrl: './borrar-apuesta.component.html',
  styleUrls: ['./borrar-apuesta.component.css']
})
export class BorrarApuestaComponent implements OnInit {

  public apuesta: Apuesta = new Apuesta();

  constructor(protected apuestaService:  ApuestaService, protected router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarApuesta();
  }

  cargarApuesta(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.apuestaService.consultarApuesta(id).subscribe(
            apuestaResponse => this.apuesta = apuestaResponse
          )
        }
      }
    )
  }

  public delete(): void{
    this.apuestaService.eliminar(this.apuesta).subscribe(
      a => {
        this.router.navigate(['/apuesta/listar']),
        swal.fire('Apuesta eliminada', `Apuesta ${this.apuesta.partido.pais1} vs ${this.apuesta.partido.pais2}. cédula ${this.apuesta.cedula} eliminada con éxito`, 'success')
      }
    )
  }

}
