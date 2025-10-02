import { Component } from '@angular/core';
import { OnsOperaciones } from './opera';

@Component({
  selector: 'app-calculaoms',
  standalone: false,
  templateUrl: './calculaoms.component.html',
  styleUrls: ['./calculaoms.component.css']
})
export class CalculaomsComponent {
  operacion: OnsOperaciones = new OnsOperaciones();

  Banda1: number = 0;
  Banda2: number = 0;
  Banda3: number = 0;
  Tolerancia: string = "oro";

  Color1: string = "";
  Color2: string = "";
  Color3: string = "";
  ToleranciaColor: string = "";
  Valor: number = 0;
  Valor_maxi: number = 0;
  Valor_mini: number = 0;

  Color1Hex: string = "";
  Color2Hex: string = "";
  Color3Hex: string = "";

  procesar() {
    this.operacion.setColores(this.Banda1, this.Banda2, this.Banda3, this.Tolerancia);
    this.operacion.calcular();

    this.Color1 = this.operacion.Color1;
    this.Color2 = this.operacion.Color2;
    this.Color3 = this.operacion.Color3;
    this.ToleranciaColor = this.operacion.ToleranciaColor;
    this.Valor = this.operacion.Valor;
    this.Valor_maxi = this.operacion.Valor_maxi;
    this.Valor_mini = this.operacion.Valor_mini;

    this.Color1Hex = this.operacion.Colorchido1;
    this.Color2Hex = this.operacion.Colorchido2;
    this.Color3Hex = this.operacion.Colorchido3;
  }
}
