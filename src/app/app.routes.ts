import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida.component';
import { LoginComponent } from './components/login.component';
import { CalcularEdadComponent } from './components/calcular-edad.component';
import { ErrorComponent } from './components/error.component';
import { RegistroComponent } from './components/registro.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'calcular-edad', component: CalcularEdadComponent },
  { path: 'registrarse', component: RegistroComponent },
  { path: '**', component: ErrorComponent }
];
