import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApuestaRoutingModule } from './apuesta-routing.module';
import { ApuestaService } from './shared/service/apuesta.service';
import { ApuestaComponent } from './components/apuesta/apuesta.component';
import { CrearApuestaComponent } from './components/crear-apuesta/crear-apuesta.component';
import { EditarApuestaComponent } from './components/editar-apuesta/editar-apuesta.component';
import { BorrarApuestaComponent } from './components/borrar-apuesta/borrar-apuesta.component';
import { ListarApuestaComponent } from './components/listar-apuesta/listar-apuesta.component';

@NgModule({
  declarations: [
    ApuestaComponent, 
    CrearApuestaComponent, 
    EditarApuestaComponent, 
    BorrarApuestaComponent, 
    ListarApuestaComponent
  ],
  imports: [
    ApuestaRoutingModule,
    SharedModule
  ],
  providers: [ApuestaService]
})
export class ApuestaModule { }
