import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apuesta } from '../../shared/model/apuesta';
import { ApuestaService } from '../../shared/service/apuesta.service';
import swal from 'sweetalert2';
import { Partido } from 'src/app/feature/partido/shared/model/partido';


@Component({
  selector: 'app-crear-apuesta',
  templateUrl: './crear-apuesta.component.html',
  styleUrls: ['./crear-apuesta.component.css']
})
export class CrearApuestaComponent implements OnInit {

  public apuesta: Apuesta = new Apuesta();
  public partido: Partido = new Partido();

  constructor(protected apuestaService:  ApuestaService, protected router: Router) { }

  ngOnInit(): void {
    this.apuesta.partido = this.partido;
  }

  public crear(): void{
    this.apuestaService.crear(this.apuesta).subscribe(
      a => {
        this.router.navigate(['/apuesta/listar']),
        swal.fire('Apuesta creada', `Apuesta ${this.apuesta.partido.pais1} vs ${this.apuesta.partido.pais2}. cédula ${this.apuesta.cedula} creada con éxito`, 'success')
      }
    )
  }

}
