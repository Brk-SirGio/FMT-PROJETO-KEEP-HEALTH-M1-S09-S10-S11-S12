import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [SidebarComponent, PipesModule, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  usuarioObject: any;

  constructor() {
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuarioObject = JSON.parse(usuarioString);
    }
  }

}
