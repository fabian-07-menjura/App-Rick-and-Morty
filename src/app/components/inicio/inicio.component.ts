import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from '../../Services/peticion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  @Output() pagina = new EventEmitter<number>();
  constructor(
    private router: Router,
    private peticionService: PeticionService
  ) {}

  ingresar() {
    this.pagina.emit(1);
    this.router.navigate(['home']);
  }
}
