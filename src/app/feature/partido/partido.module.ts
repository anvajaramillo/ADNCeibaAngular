import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PartidoRoutingModule } from './partido-routing.module';
import { PartidoService } from './shared/service/partido.service';
import { PartidoComponent } from './components/partido/partido.component';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component';
import { EditarPartidoComponent } from './components/editar-partido/editar-partido.component';
import { BorrarPartidoComponent } from './components/borrar-partido/borrar-partido.component';
import { ListarPartidoComponent } from './components/listar-partido/listar-partido.component';

@NgModule({
    declarations: [
        PartidoComponent,
        CrearPartidoComponent,
        EditarPartidoComponent,
        BorrarPartidoComponent,
        ListarPartidoComponent
    ],
    imports: [
      PartidoRoutingModule,
      SharedModule
    ],
    providers: [PartidoService]
  })
  export class PartidoModule { }