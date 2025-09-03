import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcular-edad',
  standalone: true,
  imports: [FormsModule],
  template: `
    <style>
      .calculator-container {
        max-width: 400px;
        margin: 2rem auto;
        padding: 2rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: white;
      }

      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: #555;
      }

      input[type="number"] {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        box-sizing: border-box;
      }

      input[type="number"]:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
      }

      .results-section {
        margin: 2rem 0;
      }

      .result-group {
        margin-bottom: 1rem;
      }

      input[readonly] {
        background-color: #f8f9fa;
        cursor: not-allowed;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }

      button {
        flex: 1;
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .btn-primary {
        background-color: #007bff;
        color: white;
      }

      .btn-primary:hover {
        background-color: #0056b3;
      }

      .btn-secondary {
        background-color: #6c757d;
        color: white;
      }

      .btn-secondary:hover {
        background-color: #545b62;
      }
    </style>

    <div class="calculator-container">
      <h1>Calculadora de Edades</h1>
      
      <div class="form-group">
        <label for="edadUno">Edad Uno:</label>
        <input 
          type="number" 
          id="edadUno" 
          name="edadUno"
          [(ngModel)]="edadUno"
          min="0"
          placeholder="Ingrese la primera edad"
        >
      </div>

      <div class="form-group">
        <label for="edadDos">Edad Dos:</label>
        <input 
          type="number" 
          id="edadDos" 
          name="edadDos"
          [(ngModel)]="edadDos"
          min="0"
          placeholder="Ingrese la segunda edad"
        >
      </div>

      <div class="results-section">
        <div class="result-group">
          <label for="suma">Suma:</label>
          <input 
            type="number" 
            id="suma" 
            name="suma"
            [value]="suma"
            readonly
            placeholder="Resultado de la suma"
          >
        </div>

        <div class="result-group">
          <label for="promedio">Promedio:</label>
          <input 
            type="number" 
            id="promedio" 
            name="promedio"
            [value]="promedio"
            readonly
            placeholder="Resultado del promedio"
          >
        </div>
      </div>

      <div class="button-group">
        <button type="button" class="btn-primary" (click)="calcular()">
          Calcular
        </button>
        <button type="button" class="btn-secondary" (click)="limpiar()">
          Limpiar
        </button>
      </div>
    </div>
  `
})
export class CalcularEdadComponent {
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