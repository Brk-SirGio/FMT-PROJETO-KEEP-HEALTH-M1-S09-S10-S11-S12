import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../address/models/address.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly baseUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`${this.baseUrl}${cep}/json/`);
  }

}
