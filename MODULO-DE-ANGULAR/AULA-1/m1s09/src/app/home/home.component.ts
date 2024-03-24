import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textoPesquisa: string | undefined
  
  
  listaProdutos = [
    {
      imagem: 'assets/banana.jpg',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/maca.jpg',
      descricao: 'Maça'
    },
    {
      imagem: 'assets/pera.jpg',
      descricao: 'Pera'
    },
    {
      imagem: 'assets/uva.jpg',
      descricao: 'Uva'
    }
  ];
  listaProdutosFiltro = this.listaProdutos;
  
  pesquisar() {
    this.listaProdutosFiltro = this.listaProdutos.filter(item => item.descricao === this.textoPesquisa)
  }
}
