import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarioObject: any;
  
  constructor(private router: Router){
    
    const abacate = {
    id: 1,
    name: "Abacate",
    description: "...",
    qttCalories: 0,
    qttDaysFeed: 3,
    imageLink: ""
  }

  localStorage.setItem('abacate', JSON.stringify(abacate));

  const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuarioObject = JSON.parse(usuarioString);
    }

}
}