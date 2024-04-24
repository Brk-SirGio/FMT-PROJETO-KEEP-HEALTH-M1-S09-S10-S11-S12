import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    // Definir isLoggedIn como false por padrão
    if (localStorage.getItem('isLoggedIn') === null) {
      localStorage.setItem('isLoggedIn', 'false');}
  }

  login(email: string, senha: string): Observable<boolean> {
    const usuarioLS = localStorage.getItem('usuario');
    let authSuccess = false;
  
    if (usuarioLS) {
      const usuario = JSON.parse(usuarioLS);
      authSuccess = usuario.email === email && usuario.senha === senha;
    }
  
    localStorage.setItem('isLoggedIn', authSuccess ? 'true' : 'false');
    return of(authSuccess);
  }
  
}
