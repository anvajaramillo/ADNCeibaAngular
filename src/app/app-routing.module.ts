import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'partido', loadChildren: () => import('src/app/feature/partido/partido.module').then(mod => mod.PartidoModule) },
  { path: 'apuesta', loadChildren: () => import('src/app/feature/apuesta/apuesta.module').then(mod => mod.ApuestaModule) },
  { path: 'resultados/:idPartido', loadChildren: () => import('src/app/feature/resultados/resultados.module').then(mod => mod.ResultadosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
