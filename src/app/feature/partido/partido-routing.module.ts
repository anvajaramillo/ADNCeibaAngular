import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidoComponent } from './components/partido/partido.component';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component';
import { EditarPartidoComponent } from './components/editar-partido/editar-partido.component';
import { BorrarPartidoComponent } from './components/borrar-partido/borrar-partido.component';
import { ListarPartidoComponent } from './components/listar-partido/listar-partido.component';


const routes: Routes = [
  {
    path: '', 
    component: PartidoComponent,
    children: [
      {
        path: '',
        component: PartidoComponent
      },
      {
        path: 'listar',
        component: ListarPartidoComponent
      },
      {
        path: 'crear',
        component: CrearPartidoComponent
      },
      {
        path: 'editar/:id',
        component: EditarPartidoComponent
      },
      {
        path: 'borrar/:id',
        component: BorrarPartidoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidoRoutingModule { }
