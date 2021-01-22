import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apuesta } from '../../shared/model/apuesta';
import { ApuestaService } from '../../shared/service/apuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-apuesta',
  templateUrl: './editar-apuesta.component.html',
  styleUrls: ['./editar-apuesta.component.css']
})
export class EditarApuestaComponent implements OnInit {

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

  public update(): void{
    this.apuestaService.editar(this.apuesta).subscribe(
      a => {
        this.router.navigate(['/apuesta/listar']),
        swal.fire('Apuesta actualizada', `Apuesta ${this.apuesta.partido.pais1} vs ${this.apuesta.partido.pais2}. cédula ${this.apuesta.cedula} actualizada con éxito`, 'success')
      }
    )
  }

}
