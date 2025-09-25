import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = '';
  CantidadCompradores: number = 0;
  Operacion_si_no: string = 'No';
  CantidadBoletos: number = 0;
  ValorPagar: number = 0;

  Pago(): void {
    const PrecioBoleto = 12;
    const LimiteBoletos = this.CantidadCompradores * 7;

    if (this.CantidadBoletos >= LimiteBoletos) {
      alert("No puedes comprar más de " + LimiteBoletos + " boletos.");
      this.ValorPagar = 0;
      return;
    }
    else if (this.CantidadCompradores >= LimiteBoletos) {
      alert("El limite es de " + LimiteBoletos + "por la cantidad de compradores.");
      return;
    }
    else if (this.CantidadBoletos <= 0) {
      alert("inserta tu cantidad de boletos siempre y cuando no sea mayor a: " + LimiteBoletos)
    }

    let subtotal = this.CantidadBoletos * PrecioBoleto;
    let descuentoPorCantidad = LimiteBoletos;

    if (this.CantidadBoletos >= 5) {
      descuentoPorCantidad = subtotal * 0.15;
    }
    else if (this.CantidadBoletos >= 3) {
      descuentoPorCantidad = subtotal * 0.10;
    }
    else if (this.CantidadBoletos >= 3) {
      descuentoPorCantidad = subtotal * 0;
    }
    let total = subtotal - descuentoPorCantidad;

    if (this.Operacion_si_no === "Si") {
      total = total - (total * 0.10);
    }


    this.ValorPagar = total;
  }
}
