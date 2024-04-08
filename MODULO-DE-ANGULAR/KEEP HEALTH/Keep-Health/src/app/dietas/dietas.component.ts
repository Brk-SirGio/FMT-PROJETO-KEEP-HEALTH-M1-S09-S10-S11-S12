import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';


@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, FormsModule, SidebarComponent],
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.css'
})
export class DietasComponent {
  listaProdutos = [
    {
      imagem: 'assets/banana.jpg',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/abacate.jpg',
      descricao: 'Abacate'
    },
    {
      imagem: 'assets/maca.jpg',
      descricao: 'Maçã'
    },
    {
      imagem: 'assets/mamao.jpg',
      descricao: 'Mamão'
    },
    {
      imagem: 'assets/pera.jpg',
      descricao: 'Pêra'
    },
    {
      imagem: 'assets/uva.jpg',
      descricao: 'Uva'
    },
    {
      imagem: 'assets/laranja.jpg',
      descricao: 'Laranja'
    },
    {
      imagem: 'assets/melancia.jpg',
      descricao: 'Melância'
    },
    {
      imagem: 'assets/Kiwi.jpg',
      descricao: 'Kiwi'
    },
    {
      imagem: 'assets/abacaxi.jpg',
      descricao: 'Abacaxi'
    }

  ];
  textoPesquisa: string | undefined;
  listaProdutosFiltro = this.listaProdutos;
  localStorageService: any;
  localStorage: any;

  pesquisar() {
    if(!this.textoPesquisa) {
      this.listaProdutosFiltro = this.listaProdutos;
    } else {
      this.listaProdutosFiltro = this.listaProdutos.filter(item => item.descricao === this.textoPesquisa);
    }
  }
}