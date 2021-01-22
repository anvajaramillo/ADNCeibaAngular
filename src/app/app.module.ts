import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { PartidoModule } from 'src/app/feature/partido/partido.module';
import { ApuestaModule } from 'src/app/feature/apuesta/apuesta.module';
import { ResultadosModule } from 'src/app/feature/resultados/resultados.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidoModule,
    ApuestaModule,
    ResultadosModule,
    ProductoModule,
    CoreModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
