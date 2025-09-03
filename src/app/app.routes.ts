import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida.component';
import { LoginComponent } from './components/login.component';
import { ErrorComponent } from './components/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];
