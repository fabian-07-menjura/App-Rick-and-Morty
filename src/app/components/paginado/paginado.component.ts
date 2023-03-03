import { Component, EventEmitter, Output } from '@angular/core';
import { PaginadoService } from '../../Services/paginado.service';

@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.css'],
})
export class PaginadoComponent {
  @Output() pagina = new EventEmitter<number>();
  constructor(public paginadoService: PaginadoService) {}

  siguientePagina() {
    this.paginadoService.pagina < 42
      ? (this.paginadoService.pagina += 1)
      : (this.paginadoService.pagina = 42);
    //emitimos evento al padre con el siguiente numero de paginacion
    this.pagina.emit(this.paginadoService.pagina);
  }
  anteriorPagina() {
    this.paginadoService.pagina > 1
      ? (this.paginadoService.pagina -= 1)
      : (this.paginadoService.pagina = 1);

    //emitimos evento al padre con el anterior numero de paginacion
    this.pagina.emit(this.paginadoService.pagina);
  }
}
