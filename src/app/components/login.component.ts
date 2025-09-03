import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <p>Usuario: {{usuario.nombre}}</p>
    <p>Clave: {{usuario.clave}}</p>
  `,
  standalone: true
})
export class LoginComponent {
    usuario = new User('', '');
}