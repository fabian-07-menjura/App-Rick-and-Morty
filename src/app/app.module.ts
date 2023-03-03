import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CargandoComponent } from './components/cargando/cargando.component';
import { PaginadoComponent } from './components/paginado/paginado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { NumEpisodioPipe } from './pipes/num-episodio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
    CardComponent,
    CargandoComponent,
    PaginadoComponent,
    InicioComponent,
    DetalleComponent,
    EpisodioComponent,
    NumEpisodioPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
