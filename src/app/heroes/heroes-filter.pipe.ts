import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from './heroes';
import { filter } from 'rxjs';

@Pipe({
  name: 'heroesFilter',
  standalone: false
})
export class HeroesFilterPipe implements PipeTransform {
  //Creaba un filtro de buscado en el campo de busqueda donde toLocaleLowerCase sirve para detectar minusculas y mayusculas
  transform(value: Heroes[], args: string): Heroes[] {
    let filter: string = args ? args.toLocaleLowerCase() : '';
    return filter ? value.filter((hero: Heroes) =>
      hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1) : value;
  }
}
