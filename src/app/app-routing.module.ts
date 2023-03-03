import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ComponentsComponent } from './components/components.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EpisodioComponent } from './components/episodio/episodio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: ComponentsComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'episodio/:id', component: EpisodioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
