import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1: number = 0;
  num2: number = 0;
  res: number = 0;
  operacion: string = 'suma';

  Calcula(): void {
    switch (this.operacion) {
      case "suma":
        this.res = this.num1 + this.num2;
        break;
      case "resta":
        this.res = this.num1 - this.num2;
        break;
      case "Multi":
        this.res = this.num1 * this.num2;
        break;
      case "division":
        this.res = this.num1 / this.num2;
        break;

      default:
        alert("dato no valido")
        break;
    }
  }
}


//hacer una operacion basica por cada boton
