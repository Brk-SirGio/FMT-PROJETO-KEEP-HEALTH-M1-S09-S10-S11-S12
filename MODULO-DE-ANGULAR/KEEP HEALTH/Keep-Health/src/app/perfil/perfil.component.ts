import { Component, ViewChild, ElementRef, Injectable, OnInit, Injector } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressModule } from '../address/address.module';
import { AddressService } from '../services/address.service';
import { Address } from '../address/models/address.model';
import { HttpClientModule } from '@angular/common/http';
import { addressServiceFactory } from '../services/address.service.factory'; // Importe a fábrica
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, PipesModule, CommonModule, FormsModule, AddressModule, HttpClientModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [
    {
      provide: AddressService,
      useFactory: addressServiceFactory,
      deps: [Injector]
    }
  ]
})
export class PerfilComponent implements OnInit {

  usuarioObject: any;
  cep: string | undefined;
  address: Address = {} as Address;

  constructor(private injector: Injector, private addressService: AddressService) { // Injete o Injector
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      this.usuarioObject = JSON.parse(usuarioString);
    }
  }

  ngOnInit(): void {
    // ...
  }

  pesquisar() {
    this.addressService.getAddress(this.cep as string).subscribe(address => {
      this.address = address;
    });
  }

}
