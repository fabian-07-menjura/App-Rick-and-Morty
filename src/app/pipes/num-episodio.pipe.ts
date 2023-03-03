import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numEpisodio',
})
export class NumEpisodioPipe implements PipeTransform {
  transform(value: string) {
    let val = value.slice(-2);
    return val.includes('/') ? (val = value.slice(-1)) : val;
  }
}
