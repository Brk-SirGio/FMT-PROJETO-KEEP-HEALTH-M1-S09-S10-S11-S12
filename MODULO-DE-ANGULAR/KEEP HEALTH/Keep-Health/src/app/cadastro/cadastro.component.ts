import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string | null = null;
  email: string | null = null;
  nascimento: Date | null = null;
  senha: string | null = null;
  confirmarSenha: string | null = null;

  constructor(private router: Router) {}

  private validar(): boolean {
    if (!this.email || !this.senha || !this.confirmarSenha) {
      return false;
    }

    if (this.senha !== this.confirmarSenha) {
      return false;
    }

    if (!this.nascimento) {
      return false;
    }

    return true;
  }

  cadastrarUsuario(): void {
    if (!this.validar()) {
      return;
    }

    const usuario = {
      nome: this.nome,
      email: this.email,
      nascimento: this.nascimento,
      senha: this.senha,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.router.navigate(['/login']);

    // Exibir mensagem de sucesso
    alert('Usuário cadastrado com sucesso!');
  }

}
