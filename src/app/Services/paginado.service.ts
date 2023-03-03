import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginadoService {
  constructor() {}
  pagina: number = 1;
}
