import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      peso: [null],
      altura: [null],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: [null],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: this.senhasCombinam });
  }

  private senhasCombinam(group: FormGroup): { [key: string]: any } | null {
    const senha = group.controls['senha'].value;
    const confirmarSenha = group.controls['confirmarSenha'].value;
    return senha === confirmarSenha ? null : { 'senhasNaoCombinam': true };
  }

  cadastrarUsuario(): void {
    if (this.cadastroForm.valid) {
      const usuario = this.cadastroForm.value;
      const usuarioParaSalvar = {
        ...usuario,
        emailUsuario: undefined,
        confirmarSenhaUsuario: undefined,
        senhaUsuario: undefined,
        email: usuario.email,
        senha: usuario.senha,
        codigoUsuario: 'teste123' // Forçar adicionar o código do usuário
      };
      localStorage.setItem('usuario', JSON.stringify(usuarioParaSalvar));
      this.router.navigate(['/login']);
      alert('Usuário cadastrado com sucesso!');
    } else {
      // Exibir mensagem de erro
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
