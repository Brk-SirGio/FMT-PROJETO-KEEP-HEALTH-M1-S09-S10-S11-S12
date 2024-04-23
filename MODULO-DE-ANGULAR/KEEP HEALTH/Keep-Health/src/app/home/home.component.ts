import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/components/header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, HttpClientModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  usuarioObject: any;
  
  constructor(private router: Router){
    
    const listaProdutos = [
      {
        id: 1,
        imagem: 'assets/banana.jpg',
        descricao: 'A banana é uma fruta rica em potássio e vitamina B6, além de ser uma boa fonte de fibras. É um alimento versátil que pode ser consumido puro, em smoothies, iogurtes, bolos e outras receitas.',
        calorias: 105,
        vezesPorDia: 2,
        nome: 'Banana'
      },
      {
        id: 2,
        imagem: 'assets/abacate.jpg',
        descricao: 'O abacate é uma fruta rica em gorduras monoinsaturadas, que são consideradas saudáveis para o coração. Ele também é uma boa fonte de fibras, vitaminas C e E, e potássio.',
        calorias: 160,
        vezesPorDia: 1,
        nome: 'Abacate'
      },
      {
        id: 3,
        imagem: 'assets/maca.jpg',
        descricao: 'A maçã é uma fruta rica em fibras, vitamina C e potássio. Ela também é uma boa fonte de antioxidantes, que podem ajudar a proteger as células do corpo contra danos.',
        calorias: 95,
        vezesPorDia: 2,
        nome: 'Maçã'
      },
      {
        id: 4,
        imagem: 'assets/mamao.jpg',
        descricao: 'O mamão é uma fruta rica em vitamina C, papaína e fibras. A papaína é uma enzima que ajuda na digestão. O mamão também é uma boa fonte de potássio.',
        calorias: 55,
        vezesPorDia: 1,
        nome: 'Mamão'
      },
      {
        id: 5,
        imagem: 'assets/pera.jpg',
        descricao: 'A pêra é uma fruta rica em fibras, vitamina C e potássio. Ela também é uma boa fonte de antioxidantes, que podem ajudar a proteger as células do corpo contra danos.',
        calorias: 100,
        vezesPorDia: 2,
        nome: 'Pêra'
      },
      {
        id: 6,
        imagem: 'assets/uva.jpg',
        descricao: 'A uva é uma fruta rica em antioxidantes, que podem ajudar a proteger as células do corpo contra danos. Ela também é uma boa fonte de vitamina C e potássio.',
        calorias: 60,
        vezesPorDia: 1,
        nome: 'Uva'
      },
      {
        id: 7,
        imagem: 'assets/laranja.jpg',
        descricao: 'A laranja é uma fruta rica em vitamina C, que é importante para o sistema imunológico. Ela também é uma boa fonte de fibras e potássio.',
        calorias: 47,
        vezesPorDia: 1,
        nome: 'Laranja'
      },
      {
        id: 8,
        imagem: 'assets/melancia.jpg',
        descricao: 'A melancia é uma fruta rica em água, o que a torna uma boa opção para se hidratar nos dias mais quentes. Ela também é uma boa fonte de vitamina C e potássio.',
        calorias: 30,
        vezesPorDia: 1,
        nome: 'Melancia'
      },
      {
        id: 9,
        imagem: 'assets/Kiwi.jpg',
        descricao: 'O kiwi é uma fruta rica em vitamina C, que é importante para o sistema imunológico. Ele também é uma boa fonte de fibras e potássio.',
        calorias: 44,
        vezesPorDia: 1,
        nome: 'Kiwi'
      },
      {
        id: 10,
        imagem: 'assets/abacaxi.jpg',
        descricao: 'O abacaxi é uma fruta rica em vitamina C, bromelina e fibras. A bromelina é uma enzima que ajuda na digestão. O abacaxi também é uma boa fonte de potássio.',
        calorias: 50,
        vezesPorDia: 1,
        nome: 'Abacaxi'
      }
    ];

  localStorage.setItem('listaDeFrutas', JSON.stringify(listaProdutos));

  const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuarioObject = JSON.parse(usuarioString);
    }

}
}