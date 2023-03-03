import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from '../../Services/peticion.service';
import { Episodio } from '../../Interface/Episodio';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css'],
})
export class EpisodioComponent {
  infoEpisodio: Episodio[] = [];
  imgUserEpisodio: string[] = [];
  arraypromises: any[] = [];
  userEpisodio: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private peticionService: PeticionService
  ) {
    //buscamos el episodio en especifico, segun en el cual haya hecho click el usuario
    let res = peticionService.solicitarEpisodio(
      this.route.snapshot.params['id']
    );
    res
      .then(async (x) => {
        this.infoEpisodio = [x];
        this.infoEpisodio[0].characters.map((e) => {
          let promesa = this.peticionService.detallePersonajeEpisodio(e);
          //generamos un arreglo de promesas
          this.arraypromises.push(promesa);
        });
        let resImg = await Promise.all(this.arraypromises);
        resImg.map((elem) => this.userEpisodio.push(elem.image)); // metemos a un arreglo unicamente las imagenes de los personajes, que son lo que pertenecieron a cada episodio
      })
      .catch((err) => alert('error al buscar el episodio'));
  }
}
