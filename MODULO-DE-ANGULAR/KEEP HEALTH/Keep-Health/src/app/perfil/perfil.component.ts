import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressService } from '../services/adress.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [SidebarComponent, PipesModule, CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent {

  usuarioObject: any;
  cepInput: string;
  response: any;

  constructor(private addressService: AddressService) {
    this.cepInput = '';
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuarioObject = JSON.parse(usuarioString);
    }
  }

  pesquisar() {
    this.addressService.get(this.cepInput).subscribe((data) => {
      this.response = data;
    });
  }

}
