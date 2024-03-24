import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    {
      path: 'home',
      title: 'Home da página',
      component: HomeComponent,
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
      }

];
