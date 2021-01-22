import { Component, OnInit } from '@angular/core';
import { PartidoService } from 'src/app/feature/partido/shared/service/partido.service';
import { Partido } from 'src/app/feature/partido/shared/model/partido';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.css']
})
export class CrearPartidoComponent implements OnInit {

  public partido: Partido = new Partido();

  constructor(protected partidoService:  PartidoService, protected router: Router) { }

  ngOnInit(): void {
  }

  public crear(): void{
    this.partidoService.crear(this.partido).subscribe(
      a => {
        this.router.navigate(['/partido/listar']),
        swal.fire('Partido creado', `Partido ${this.partido.pais1} vs ${this.partido.pais2} creado con éxito`, 'success')
      }
    )
  }

}
