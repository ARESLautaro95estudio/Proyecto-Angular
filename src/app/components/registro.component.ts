import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <h2>Registrar</h2>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" [(ngModel)]="email" placeholder="Ingrese su email">
      </div>
      <div>
        <label for="contrasena">Contraseña:</label>
        <input id="contrasena" type="password" [(ngModel)]="contrasena" placeholder="Ingrese su contraseña">
      </div>
    </div>
  `
})
export class RegistroComponent {
  email: string = '';
  contrasena: string = '';
}