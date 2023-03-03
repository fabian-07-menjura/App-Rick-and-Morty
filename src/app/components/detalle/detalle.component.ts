import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from '../../Services/peticion.service';
import { RickMorty } from '../../Interface/RickMorty';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {
  numero!: number;
  personaje: RickMorty[] = [];

  constructor(
    private route: ActivatedRoute,
    private peticionService: PeticionService,
    private router: Router
  ) {
    //recibimos el id enviado por params para la busqueda del mismo personaje en el que se dio click
    this.numero = this.route.snapshot.params['id'];
    let res = this.peticionService.detallepersonaje(this.numero);
    res.then((resp) => {
      this.personaje.push(resp);
    });
  }
  //recibimos el id de el episodio el cual el usuario dio click
  mostrarId(value: string) {
    let val = value.slice(-2);
    val.includes('/') ? (val = value.slice(-1)) : (val = val);
    let num: number = parseInt(val);
    //mandamos ese id del episodio por params para usarlo en otra plantilla web
    this.router.navigate(['episodio', num]);
  }
}
