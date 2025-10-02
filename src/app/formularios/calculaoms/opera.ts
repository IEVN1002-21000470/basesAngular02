export class OnsOperaciones {
  Banda1: number = 0;
  Banda2: number = 0;
  Banda3: number = 0;
  Tolerancia: number = 0.5;
  Color1: string = "";
  Color2: string = "";
  Color3: string = "";
  ToleranciaColor: string = "Oro";

  Colorchido1: string = "";
  Colorchido2: string = "";
  Colorchido3: string = "";

  Valor: number = 0;
  Valor_maxi: number = 0;
  Valor_mini: number = 0;

  setColores(b1: number, b2: number, b3: number, tol: string) {
    this.Banda1 = b1;
    this.Banda2 = b2;
    this.Banda3 = b3;

    this.Color1 = this.getColorName(b1);
    this.Color2 = this.getColorName(b2);
    this.Color3 = this.getColorName(b3);

    this.Colorchido1 = this.ConseguirColor(b1);
    this.Colorchido2 = this.ConseguirColor(b2);
    this.Colorchido3 = this.ConseguirColor(b3);

    if (tol == "oro") {
      this.Tolerancia = 0.5;
      this.ToleranciaColor = "Oro";
    } else {
      this.Tolerancia = 0.10;
      this.ToleranciaColor = "Plata";
    }
  }

  getColorName(valor: number): string {
    switch (valor) {
      case 0: return "Negro";
      case 1: return "Marron";
      case 2: return "Rojo";
      case 3: return "Naranja";
      case 4: return "Amarillo";
      case 5: return "Verde";
      case 6: return "Azul";
      case 7: return "Violeta";
      case 8: return "Gris";
      case 9: return "Blanco";
      default: return "";
    }
  }

  ConseguirColor(valor: number): string {
    switch (valor) {
      case 0: return "black";
      case 1: return "brown";
      case 2: return "red";
      case 3: return "orange";
      case 4: return "yellow";
      case 5: return "green";
      case 6: return "blue";
      case 7: return "violet";
      case 8: return "gray";
      case 9: return "white";
      default: return "transparent";
    }
  }

  calcular() {
    let numeroBase = Number(String(this.Banda1) + String(this.Banda2));
    let multiplicador = Math.pow(10, this.Banda3);
    let resultado = numeroBase * multiplicador;

    this.Valor = resultado;
    this.Valor_maxi = resultado + (resultado * this.Tolerancia);
    this.Valor_mini = resultado - (resultado * this.Tolerancia);
  }
}
