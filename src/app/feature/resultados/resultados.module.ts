import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './components/resultados/resultados.component';



@NgModule({
  declarations: [ResultadosComponent],
  imports: [
    ResultadosRoutingModule,
    SharedModule
  ]
})
export class ResultadosModule { }
