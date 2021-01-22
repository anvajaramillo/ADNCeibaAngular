import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApuestaComponent } from './components/apuesta/apuesta.component';
import { CrearApuestaComponent } from './components/crear-apuesta/crear-apuesta.component';
import { EditarApuestaComponent } from './components/editar-apuesta/editar-apuesta.component';
import { BorrarApuestaComponent } from './components/borrar-apuesta/borrar-apuesta.component';
import { ListarApuestaComponent } from './components/listar-apuesta/listar-apuesta.component';

const routes: Routes = [
  {
    path: '', 
    component: ApuestaComponent,
    children: [
      {
        path: '',
        component: ApuestaComponent
      },
      {
        path: 'listar',
        component: ListarApuestaComponent
      },
      {
        path: 'crear',
        component: CrearApuestaComponent
      },
      {
        path: 'editar/:id',
        component: EditarApuestaComponent
      },
      {
        path: 'borrar/:id',
        component: BorrarApuestaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApuestaRoutingModule { }
