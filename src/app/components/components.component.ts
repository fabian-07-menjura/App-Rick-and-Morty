import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../Services/peticion.service';
import { RickMorty } from '../Interface/RickMorty';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  constructor(private peticionService: PeticionService) {}
  arrayInfo: RickMorty[] = [];

  async ngOnInit() {
    //aca validamos bien se monte el componente si en el arreglo tenemos info respecto a la de una pagina, si no hacemos la solicitud con la pagina 1
    if (this.peticionService.infoPagina.length) {
      this.arrayInfo = this.peticionService.infoPagina;
    } else {
      await this.peticionService.solicitarinfo(1);
      this.arrayInfo = this.peticionService.infoPagina;
    }
  }
  //recibimos en evento emitido desde el componente hijo(paginado) y traemos la info correspondiente a el numero que venga en el evento
  async solicitarInfo(contador: number) {
    await this.peticionService.solicitarinfo(contador);
    this.arrayInfo = this.peticionService.infoPagina;
  }
}
