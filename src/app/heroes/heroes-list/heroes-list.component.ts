import { Component } from '@angular/core';
import { race } from 'rxjs'; //para trabajar formularios reactivos
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent {

  listFilter:string = '';
  

  //crear evento del boton
  muestraImg: boolean = true;
  showImage() {
    this.muestraImg = !this.muestraImg;
  }



  heroes:Heroes[] = [
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Kakaroto",
      race: "Saiyan",
      ki: 9000,
      descripcion: "es peleonero el wey"
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      race: "Namekian",
      ki: 5500,
      descripcion: "Es de peru"
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      race: "Saiyan",
      ki: 9500,
      descripcion: "otro peleonero pero responsable"
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Frezzer",
      race: "Sepa que sea",
      ki: 8900,
      descripcion: "da chamba con todo y prestaciones, dias libres, aguinaldo etc etc"
    }
  ]
}
