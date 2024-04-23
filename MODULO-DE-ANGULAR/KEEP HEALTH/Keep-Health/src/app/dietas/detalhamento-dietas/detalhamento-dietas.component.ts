import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DietasService } from '../dietas-service.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { Location } from '@angular/common';

interface Produto {
  id: number;
  imagem: string;
  descricao: string;
  calorias: number;
  vezesPorDia: number;
  nome: string;
}

@Component({
  selector: 'app-detalhamento-dietas',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, FormsModule, SidebarComponent, RouterLink],
  templateUrl: './detalhamento-dietas.component.html',
  styleUrls: ['./detalhamento-dietas.component.scss'],
  template: `<button (click)="goBack()">Voltar</button>`
})

export class DetalhamentoDietasComponent implements OnInit {

  id: number | undefined;
  fruta: Produto | undefined;

  constructor(private activatedRoute: ActivatedRoute, private dietasService: DietasService, private location: Location) { } // Injete o "DietasService"

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.fruta = this.dietasService.getFruta(this.id); // Utilize o "dietasService"
  }

  goBack(): void {
    this.location.back();
  }
}
