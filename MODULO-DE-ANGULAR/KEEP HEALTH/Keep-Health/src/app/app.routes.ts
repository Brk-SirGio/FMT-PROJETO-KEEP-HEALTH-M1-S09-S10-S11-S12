import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DietasComponent } from './dietas/dietas.component';
import { DetalhamentoDietasComponent } from './dietas/detalhamento-dietas/detalhamento-dietas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './shared/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home da página',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    title: 'Login da página',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    title: 'Cadastro da página',
    component: CadastroComponent,
  },
  {
    path: 'diet',
    title: 'Dietas',
    component: DietasComponent,
    canActivate: [AuthGuard]
  },
  {
    
    path: 'diet-detail/:id', // Rota com parâmetro ':id'
    title: 'Detalhamento da Dieta',
    component: DetalhamentoDietasComponent
  },
  {
    path: 'profile',
    title: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  }
];
