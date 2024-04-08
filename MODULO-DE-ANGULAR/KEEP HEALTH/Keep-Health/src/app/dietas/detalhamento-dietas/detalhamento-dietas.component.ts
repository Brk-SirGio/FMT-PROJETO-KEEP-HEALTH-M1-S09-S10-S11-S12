import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietasService } from '../dietas-service.service'; // Importe o serviço

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
  templateUrl: './detalhamento-dietas.component.html',
  styleUrls: ['./detalhamento-dietas.component.css']
})
export class DetalhamentoDietasComponent implements OnInit {

  id: number | undefined;
  fruta: Produto | undefined;

  constructor(private activatedRoute: ActivatedRoute, private dietasService: DietasService) { } // Injete o "DietasService"

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.fruta = this.dietasService.getFruta(this.id); // Utilize o "dietasService"
  }
}
