import { Injectable } from '@angular/core';
import { RickMorty } from '../Interface/RickMorty';

@Injectable({
  providedIn: 'root',
})
export class PeticionService {
  infoPagina: RickMorty[] = [];
  constructor() {}
  async solicitarinfo(contador: number) {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${contador}`
    );
    const res = await data.json();
    this.infoPagina = res.results;
  }

  async detallepersonaje(id: number) {
    const info = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const res = await info.json();
    return res;
  }

  async detallePersonajeEpisodio(url: any) {
    const info = await fetch(url);
    const res = await info.json();
    return res;
  }

  async solicitarEpisodio(id: number) {
    const info = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const res = await info.json();
    return res;
  }
}
