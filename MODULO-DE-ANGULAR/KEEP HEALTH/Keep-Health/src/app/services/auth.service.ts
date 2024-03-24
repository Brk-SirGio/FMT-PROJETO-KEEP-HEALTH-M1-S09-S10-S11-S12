import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, senha: string): Observable<boolean> {
    const usuarioLS = localStorage.getItem('usuario');

    if (usuarioLS) {
      const usuario = JSON.parse(usuarioLS);
      return of(usuario.email === email && usuario.senha === senha);
    } else {
      return of(false);
    }
  }
}
