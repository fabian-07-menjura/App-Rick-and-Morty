import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RickMorty } from '../../Interface/RickMorty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() info!: RickMorty[];
  @Output() pagina = new EventEmitter<number>();
  constructor(private router: Router) {}

  solicitarPagina(contador: number) {
    this.pagina.emit(contador);
  }
  //la siguiente funcion me redirecciona a otra plantilla de navegacion, esta recibira el id del personaje donde hayamos hecho click que sera el mismo que neviaremos por params para la busqueda del mismo personaje
  detalleCard(id: number) {
    this.router.navigate(['detalle', id]);
  }
}
