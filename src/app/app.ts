import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto-clase-1');
  
  edadUno: number = 0;
  edadDos: number = 0;
  suma: number = 0;
  promedio: number = 0;

  calcular(): void {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar(): void {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
