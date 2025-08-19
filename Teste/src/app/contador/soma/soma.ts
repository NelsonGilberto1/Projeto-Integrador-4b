import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  standalone: false,
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class Soma {
  numero = 0;

  Numero(){
    this.numero = this.numero + 1;
  }
}
