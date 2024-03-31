import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DietasComponent } from './dietas/dietas.component';
import { DetalhamentoDietasComponent } from './detalhamento-dietas/detalhamento-dietas.component';
import { PerfilComponent } from './perfil/perfil.component';

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
      },
      {
        path: 'diet',
        title: 'Dietas',
        component: DietasComponent,
      },
      {
        path: 'diet-detail',
        title: 'Detalhamento da dieta',
        component: DetalhamentoDietasComponent,
      },
      {
        path: 'profile',
        title: 'perfil',
        component: PerfilComponent,
      }

];
